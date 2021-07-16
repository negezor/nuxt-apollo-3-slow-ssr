import fetch from 'cross-fetch';

import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { createHttpLink } from '@apollo/client/link/http';

import { provide } from '@vue/composition-api';

import { DefaultApolloClient } from '@vue/apollo-composable/dist';
import { getStates } from '@vue/apollo-ssr';

/**
 * The method beforeSerialize will be present in Nuxt.js 1.16
 * https://github.com/nuxt/nuxt.js/pull/9332#issuecomment-877098973
 */
export default ({ app, nuxtState: currentNuxtState, beforeSerialize }) => {
    // Root setup
    app.setup = () => {
        const httpLink = createHttpLink({
			uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
			fetch
		});

        const cache = new InMemoryCache({

        });

        const apolloClient = new ApolloClient({
			link: httpLink,
			cache,
			...(
				process.server
					? { ssrMode: true, ssrForceFetchDelay: 100 }
					: {}
			),
			connectToDevTools: process.env.NODE_ENV !== 'production'
		});

        provide(DefaultApolloClient, apolloClient);

        if (process.client && currentNuxtState.apollo) {
            cache.restore(currentNuxtState.apollo.default);
        }

        if (!process.server) {
			return;
		}

		beforeSerialize((nuxtState) => {
			const states = getStates({
				default: apolloClient
			});

			nuxtState.apollo = states;
		});
    };
};
