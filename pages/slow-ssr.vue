<template>
    <div>
        <TheHeader/>

        <b>Content</b>
        <div v-for="film in films" :key="film.id">
            {{ film.title }}
        </div>
        <br>

        <TheFooter/>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

import { useFetchFilms } from '@/composable/fetch-films';

import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default defineComponent({
    components: {
        TheHeader,
        TheFooter
    },
    setup() {
        const { films } = useFetchFilms();

        return { films };
    },
})
</script>
