import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'default',
            component:()=>import('../layouts/Default.vue'),
            children:[
                {
                    path:'home',
                    name:'home',
                    component:()=>import('../pages/Home.vue')
                },
                {
                    path:'shop',
                    name:'shop',
                    component:()=>import('../pages/Shop.vue'),
                },
                {
                    path:'plant-care',
                    name:'plant-care',
                    component:()=>import('../pages/PlantCare.vue')
                },
                {
                    path:'blogs',
                    name:'blogs',
                    component:()=>import('../pages/Blog.vue')
                },               
                {
                    path:'test',
                    name:'test',
                    component:()=>import('../pages/Test.vue')
                },
                {
                    path:'composible',
                    name:'composible',
                    component:()=>import('../pages/Composible.vue')
                },
                {
                    path:'products-shop',
                    name:'products-shop',
                    component:()=>import('../pages/ProductsShop.vue')
                },
                {
                    path:'products/:id',
                    name:'product-detail',
                    component:()=>import('../pages/OneProduct.vue')
                },
                {
                    path:'vuex',
                    name:'vuex',
                    component:()=>import('../pages/Vuex.vue')
                },
                {
                    path:'favorites',
                    name:'favorites',
                    component:()=>import('../pages/Favorites.vue')
                },
                {
                    path:'pinia',
                    name:'pinia',
                    component:()=>import('../pages/Pinia.vue')
                },
                {
                    path:'quizze/:id',
                    name:'quizze-detail',
                    component:()=>import('../pages/QuizzeDetails.vue')
                },
                {
                    path:'create-quizze',
                    name:'quizze',
                    component:()=>import('../pages/CreateQuizze.vue')
                },

                
            ]
        }

    ]
})

export default router