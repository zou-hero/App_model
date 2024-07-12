import { createRouter, createWebHistory } from 'vue-router'
import footer from '../components/footer.vue'
import index from '../components/index.vue'
import announcement from '../components/announcement.vue'
import exposing from '../components/exposing.vue'
import dynamic from '../components/dynamic.vue'
import science from '../components/science.vue'
import scienceRecommend from '../components/scienceRecommend.vue'
import dynamicRecommend from '../components/dynamicRecommend.vue'
import my from '../components/my.vue'
import report from "../components/report.vue";
import case1 from '../components/case.vue'
import warning from "@/components/warning.vue";
import check from "@/components/check.vue";

const routes = [
    {
        path:'/',
        redirect:'/footer'
    },
    {
        path:'/footer',
        component:footer,
        redirect:'/index',
        children:[
            {
                path:'/index',
                component:index
            },
            {
                path:'/exposing',
                component:exposing,
                redirect:'/dynamic',
                children:[
                    {
                        path: '/dynamic',
                        component:dynamic,
                        redirect:'/dynamicRecommend',
                        children: [
                            {
                                path:'/dynamicRecommend',
                                component:dynamicRecommend
                            }
                        ]
                    },
                    {
                        path:'/science',
                        component:science,
                        redirect:'/scienceRecommend',
                        children:[
                            {
                                path: '/scienceRecommend',
                                component:scienceRecommend
                            }
                        ]

                    }
                ]
            },
            {
                path:'/my',
                component:my
            }
        ]
    },
    {
        path:'/announcement',
        component:announcement
    },
    {
        path:'/report',
        component: report,
    },
    {
        path: '/case',
        component: case1,
    },
    {
        path:'/warning',
        component:warning,
    },
    {
        path:'/check',
        component:check,
    }


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router