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
                <!-- <div id="vditor"></div> -->
                <Toolbar
                    style="border-bottom: 1px solid #ccc;"
                    :editor="editorRef"
                    :defaultConfig="toolbarConfig"
                    :mode="mode"
                    />
                <Editor 
                    style="height: 500px; overflow-y: hidden"
                    v-model="valueHTML"
                    :defaultConfig="editorConfig"
                    :mode="mode"
                    @onCreated="handleCreated"/>
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
// import Vditor from 'vditor';
// import 'vditor/dist/index.css';
import '@wangeditor/editor/dist/css/style.css';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';

import axios from 'axios';

import { ref, onMounted, shallowRef, onBeforeUnmount } from 'vue';

let title = ref('');
let series = ref('');
let content = ref('');
let audio = ref('');

const series_arr = ['读经', '试讲', '造就', '福音'];

const router = useRouter();

// 编辑器实例
const editorRef = shallowRef();

// HTML内容
const valueHTML = ref('');

const toolbarConfig = {
    pin: true,
}
const editorConfig = {
    placeholder: '请输入内容',
}

onMounted(() => {
    // contentEditor = new Vditor('vditor', {
    //     height: 300,
    //     toolbarConfig: {
    //         pin: true,
    //     },
    //     cache: {
    //         enable: false,
    //     },
    //     mode: 'sv',
    // })
})

onBeforeUnmount(() => {
    // contentEditor.destroy();
    const editor = editorRef.value;
    if (editor == null) return;
    editor.destroy();
})

const handleCreated = (editor) => {
    editorRef.value = editor;
}

const mode = ref('default')

const submit = () => {
    console.log(valueHTML.value);
    axios.post('/api/course/publish', {
        title: title.value,
        series: series.value,
        content: valueHTML.value,
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