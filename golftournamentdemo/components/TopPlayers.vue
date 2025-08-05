<template>
    <v-row>
        <v-col class=" grid grid-cols-5 gap-4 pa-4 mt-2">
            <div class="flex flex-col items-center">
                <v-avatar size="x-large">
                    <v-img alt="Avatar" src="~/assets/images/download.png"></v-img>
                </v-avatar>
                <div class="flex flex-col items-center mt-2">
                    <v-chip size="x-small" variant="elevated" color="primary">
                        <span class=" text-xs">Players</span>
                    </v-chip>
                    <span class="text-xs font-extralight mt-1">Top 4</span>
                </div>
            </div>
            <div class="flex flex-col items-center">
                <v-badge location="top left" color="primary" content="-20">
                    <v-avatar size="x-large">
                        <v-img alt="Avatar" src="~/assets/images/p1.jpeg"></v-img>
                    </v-avatar>
                </v-badge>
                <span class="text-xs font-extralight mt-1">Dike A</span>
            </div>
            <div class="flex flex-col items-center">
                <v-badge location="top left" color="primary" content="-10">
                    <v-avatar size="x-large">
                        <v-img alt="Avatar" src="~/assets/images/p2.jpeg"></v-img>
                    </v-avatar>
                </v-badge>
                <span class="text-xs font-extralight mt-1">Tendo T</span>
            </div>
            <div class="flex flex-col items-center">
                <v-badge location="top left" color="primary" content="-9">
                    <v-avatar size="x-large">
                        <v-img alt="Avatar" src="~/assets/images/p3.jpeg"></v-img>
                    </v-avatar>
                </v-badge>
                <span class="text-xs font-extralight mt-1">Dickson A</span>
            </div>
            <div class="flex flex-col items-center">
                <v-badge location="top left" color="primary" content="-7">
                    <v-avatar size="x-large">
                        <v-img alt="Avatar" src="~/assets/images/p4.jpeg"></v-img>
                    </v-avatar>
                </v-badge>
                <span class="text-xs font-extralight mt-1">Jackie N</span>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>