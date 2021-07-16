<template>
    <div>
        <div v-for="film in films1" :key="film.id">
            {{ film.title }}
        </div>
        <br>

        <div v-for="film in films2" :key="film.id">
            {{ film.title }}
        </div>
        <br>

        <div v-for="film in films3" :key="film.id">
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
        const { films: films1 } = useFetchFilms();
        const { films: films2 } = useFetchFilms();
        const { films: films3 } = useFetchFilms();

        return { films1, films2, films3 };
    },
})
</script>
