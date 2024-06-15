<script>
import { RouterLink } from 'vue-router';
export default {
    name: 'NavDrawer',
}
</script>
<template>
    <v-navigation-drawer expand-on-hover rail color="primary">
        <v-list>
            <v-list-item prepend-avatar="../../assets/xiashafellowship.jpg" title="毗斯迦山"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <RouterLink to="/holyofholies/course">
                <v-list-item prepend-icon="mdi-folder" title="信息" value="信息"></v-list-item>
            </RouterLink>

            <RouterLink to="/holyofholies/news">
                <v-list-item prepend-icon="mdi-account-multiple" title="动态" value="动态"></v-list-item>
            </RouterLink>
        </v-list>

    </v-navigation-drawer>
</template>