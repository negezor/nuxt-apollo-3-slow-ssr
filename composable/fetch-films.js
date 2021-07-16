import { computed } from '@vue/composition-api'
import { useQuery } from '@vue/apollo-composable/dist'
import { gql } from '@apollo/client/core'

export const useFetchFilms = () => {
    const { result: allFilmsResult, loading } = useQuery(
        gql`
            query fetchAllFilms {
                allFilms(first: 10) {
                    edges {
                        node {
                            title
                        }
                    }
                }
            }
        `
    );

    const films = computed(() => (
        allFilmsResult.value?.allFilms?.edges?.map(edge => edge.node) || []
    ));

    return { films, loading };
};
