<template>
    <v-app>
        <v-main>
            <v-container fluid class="pa-0">
                <v-card variant="flat">
                    <v-card-title>
                        <v-chip prepend-icon="mdi-step-backward" color="primary" variant="text">
                            <span class=" text-gray-700">Players</span>
                        </v-chip>
                    </v-card-title>
                    <v-card-subtitle>
                        <v-list>
                            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                                subtitle="sandra_a88@gmailcom" title="Sandra Adams"></v-list-item>
                        </v-list>
                    </v-card-subtitle>
                    <v-card-text>
                        <span class=" text-sm text-gray-700 px-5">No et ipsum justo amet duo est lorem. Sed erat
                            consetetur sanctus gubergren amet elitr aliquyam. Ka psd erat amet eirmod ut sit clita at.
                            Takimata dolores no takimata sed diam sanctus ea. Sadipscing justo ipsum et accusam. Eirmod
                            eirmod sit ea et magna tempor diam, et sit clita lorem clita. <span
                                class=" text-blue-700">Full Bio</span> </span>
                    </v-card-text>
                    <v-card-actions>
                        <div class="flex justify-between w-full px-5 border border-gray-300 rounded">
                            <div class="flex flex-col items-center my-4 w-full">
                                <span class=" font-bold">Position</span>
                                <span class=" text-xl text-gray-700">7</span>
                            </div>
                            <v-divider vertical></v-divider>
                            <div class="flex flex-col items-center my-4 w-full">
                                <span class=" font-bold">Par Score</span>
                                <span class=" text-xl text-gray-700">-20</span>
                            </div>
                        </div>
                    </v-card-actions>
                </v-card>

                <v-card variant="flat" class="mt-4">
                    <v-card-title>
                        <div class="flex justify-between">
                            <v-chip prepend-icon="mdi-golf" color="primary" variant="outlined">
                                <span class=" text-gray-700">Round 4</span>
                            </v-chip>
                            <v-spacer></v-spacer>
                            <v-chip variant="text">
                                <span class=" text-green-700">Official Score Card</span>
                            </v-chip>
                        </div>
                    </v-card-title>

                    <v-card-text>
                        <main-chart></main-chart>
                        <v-row>
                            <v-col cols="4">
                                <v-card variant="flat">
                                    <v-card-title>
                                        <span class=" text-gray-700">Eagles</span>
                                    </v-card-title>
                                    <v-card-text>
                                         <minor-chart index="0"></minor-chart>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="4">
                                <v-card variant="flat">
                                    <v-card-title>
                                        <span class=" text-gray-700">Birdies</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <minor-chart index="1"></minor-chart>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="4">
                                <v-card variant="flat">
                                    <v-card-title>
                                        <span class=" text-gray-700">Par</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <minor-chart index="2"></minor-chart>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import MainChart from '~/components/MainChart.vue';
import MinorChart from '~/components/MinorChart.vue';

</script>

<style lang="scss" scoped></style>