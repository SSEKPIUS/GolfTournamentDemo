<template>
    <v-card>
        <v-card-title>
            <TopPlayers />
        </v-card-title>
        <v-layout>
            <v-app-bar style="top: 8em">
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>
                    <v-icon color="primary">mdi-folder</v-icon>
                </v-toolbar-title>

                <template v-if="$vuetify.display.mdAndUp">
                    <v-btn icon="mdi-magnify" variant="text"></v-btn>

                    <v-btn icon="mdi-filter" variant="text"></v-btn>
                </template>

                <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
                <v-list :items="items">
                    
                </v-list>
            </v-navigation-drawer>

            <v-main>
                <v-container class="mt-4">
                    <slot />
                </v-container>
            </v-main>
        </v-layout>
    </v-card>
</template>
<script setup>
import { ref, watch } from 'vue'
import TopPlayers from '~/components/TopPlayers.vue'

const items = [
    {
        title: 'Foo',
        value: 'foo',
    },
    {
        title: 'Bar',
        value: 'bar',
    },
    {
        title: 'Fizz',
        value: 'fizz',
    },
    {
        title: 'Buzz',
        value: 'buzz',
    },
]

const drawer = ref(false)
const group = ref(null)

watch(group, () => {
    drawer.value = false
})
</script>