<template>
    <Navbar />
    <div class="work">
        <div class="work-title">
            <div class="text-h4">团契事工</div>
            <div class="text-body-1">下沙学生团契事工内容</div>
        </div>
        <v-item-group selected-class="bg-primary">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-item>
                            <v-card :class="['d-flex align-center', selectedClass]" height="200" dark @click="toggle">
                                <div class="text-h4 flex-grow-1 text-center">
                                    探望
                                </div>
                            </v-card>
                        </v-item>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-item>
                            <v-card :class="['d-flex align-center', selectedClass]" height="200" dark @click="toggle">
                                <div class="text-h4 flex-grow-1 text-center">
                                    出口栽培
                                </div>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-item>
                            <v-card :class="['d-flex align-center', selectedClass]" height="200" dark @click="toggle">
                                <div class="text-h4 flex-grow-1 text-center">
                                    活动策划
                                </div>
                            </v-card>
                        </v-item>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-item>
                            <v-card :class="['d-flex align-center', selectedClass]" height="200" dark @click="toggle">
                                <div class="text-h4 flex-grow-1 text-center">
                                    福音陪同
                                </div>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-item>
                            <v-card :class="['d-flex align-center', selectedClass]" height="200" dark @click="toggle">
                                <div class="text-h4 flex-grow-1 text-center">
                                    文字
                                </div>
                            </v-card>
                        </v-item>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-item>
                            <v-card :class="['d-flex align-center', selectedClass]" height="200" dark @click="toggle">
                                <div class="text-h4 flex-grow-1 text-center">
                                    设计
                                </div>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-item>
                            <v-card :class="['d-flex align-center', selectedClass]" height="200" dark @click="toggle">
                                <div class="text-h4 flex-grow-1 text-center">
                                    诗歌
                                </div>
                            </v-card>
                        </v-item>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-item>
                            <v-card :class="['d-flex align-center', selectedClass]" height="200" dark @click="toggle">
                                <div class="text-h4 flex-grow-1 text-center">
                                    司琴
                                </div>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-container>
        </v-item-group>
    </div>
    <Footer />
</template>

<script>
import Navbar from '../../components/Nav.vue';
import Footer from '../../components/Footer.vue';

export default {
    name: 'Work',
    components: {
        Navbar,
        Footer
    },
}
</script>

<style scoped>
.work {
    padding: 1vw;
    margin-top: 64px;
}

.work-title {
    padding-left: 10px;
    padding-top: 0.3vh;
}

.text-body-1 {
    margin-top: 10px;
    width: 100%;
    text-align: center;
}
</style>