<template>
    <v-app>
        <v-layout>
            <v-navigation-drawer expand-on-hover rail color="primary">
                <v-list>
                    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                        title="毗斯迦山"></v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
                    <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me"
                        value="shared"></v-list-item>
                    <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main>
                <RouterView />
            </v-main>

            <v-footer app color="primary">
                <span>&copy; 2021 Mount Pisgah Seventh-day Adventist Church</span>
            </v-footer>

        </v-layout>

    </v-app>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    name: 'QodeshHaQodashim',
}
</script>

<style>
/* main {
    margin: 0 auto;
} */
</style>