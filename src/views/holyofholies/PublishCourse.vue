<template>
    <v-container class="align-center mb-12">
        <v-row>
            <v-col>
                <RouterLink to="/holyofholies/course">
                    <v-btn icon="mdi-arrow-left-bold" size="large"></v-btn>
                </RouterLink>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model="title" class="ma-2" density="compact" placeholder="输入标题"
                    hide-details></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-combobox label="信息分类" :items="series_arr" v-model="series"
                    variant="outlined"></v-combobox>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div id="vditor"></div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-file-input accept="audio" label="上传录音"></v-file-input>
                <v-btn color="primary" @click="submit">提交</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Vditor from 'vditor';
import 'vditor/dist/index.css';

import axios from 'axios';

import { ref, onMounted } from 'vue';

let contentEditor;
let title = ref('');
let series = ref('');
let content = ref('');
let audio = ref('');

const series_arr = ['读经', '试讲', '造就', '福音'];

const router = useRouter();

onMounted(() => {
    contentEditor = new Vditor('vditor', {
        height: 300,
        toolbarConfig: {
            pin: true,
        },
        cache: {
            enable: false,
        },
        mode: 'sv',
    })
})

const submit = () => {
    console.log(contentEditor.getValue());
    axios.post('/api/course/publish', {
        title: title.value,
        series: series.value,
        content: contentEditor.getValue(),
        audio: audio.value,
        publish_date: new Date(),
    }).then((res) => {
        console.log(res);
        router.push('/holyofholies/course');
    }).catch((err) => {
        console.error(err);
    })
}

const addSeries = () => {
    console.log('add series');
}

</script>