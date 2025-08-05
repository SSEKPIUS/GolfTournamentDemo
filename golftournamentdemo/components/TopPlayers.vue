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
            <div v-for="n in 4" :key="n" class="flex flex-col items-center">
                <v-badge location="top left" color="primary" :content="n + 1">
                    <v-avatar size="x-large">
                        <v-img alt="Avatar" src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                    </v-avatar>
                </v-badge>
                <span class="text-xs font-extralight mt-1">{{ n + 1 }} Player</span>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>