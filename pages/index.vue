<template>
    <div>
        <NuxtLink to="/fast-ssr">
            Fast SSR Example (three identical requests in one component)
        </NuxtLink>

        <br>

        <NuxtLink to="/slow-ssr">
            Slow SSR Example (the same request in three different components)
        </NuxtLink>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
    setup() {

    },
})
</script>
