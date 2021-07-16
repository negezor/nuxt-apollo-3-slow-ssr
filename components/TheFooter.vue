<template>
    <div>
        <b>Footer</b>

        <div v-for="film in films" :key="film.id">
            {{ film.title }}
        </div>
        <br>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

import { useFetchFilms } from '@/composable/fetch-films';

export default defineComponent({
    setup() {
        const { films } = useFetchFilms();

        return { films };
    },
})
</script>
