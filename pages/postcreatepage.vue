<template>
<v-container 
    fluid
    align-center
    >
    <v-row 
        align-center>
    <!-- <v-layout> -->
    <post-create-form @submit="onSubmit"/>
    <!-- </v-layout> -->
    </v-row>
</v-container>
</template>

<script>
import PostCreateForm from '@/components/PostCreateForm'
import api from '@/api'

export default {
    name: 'PostCreatePage', 
    components: { PostCreateForm }, 
    methods: {
        onSubmit(payload) {
            console.log(payload)
            payload['price'] = Number(payload['price'])
            console.log(payload)
            // const { name, info, price, image, category, subCategory, sellerId, area, date, options } = payload
            // console.log({ name, sellerId, image, info, category, subCategory, price, area, options })
            //현규 포스트 성공하면 내가 올린 게시글 그대로 다 반환해줘...
            // console.log(this.$apollo.query())
            api.post('/product/save', payload)
            .then(res => {
                console.log(res)
                this.$router.push({ 
                    name: 'postviewpage-postId', 
                    params: {postId: res.data.id} })
            })
            .catch(err => {
                console.log(err)
            })

            // api.get('/product')
            // .then(res => console.log(res))
            // .then(res => {
            //     alert('게시물이 성공적으로 작성되었습니다.')
            //     this.$router.push({
            //         name: 'postviewpage-postId', 
            //         params: { postId: res.data.id.toString() }
            //     })
            // }).catch(err => {
            //     if (err.response.status == 401) {
            //         alert('로그인이 필요합니다.')
            //         this.$router.push({ name: 'Signin' })
            //     } else {
            //         alert(err.response.data.msg)
            //     }
            // })

        }
    },
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        const getTitle = async function () {
            const isLoggedIn = await store.getters['cognito/isLoggedIn'];
            return isLoggedIn ? "Login" : "Logout";
        };
        const getEndPoint = async function () {
            const isLoggedIn = await store.getters['cognito/isLoggedIn'];
            return isLoggedIn ? "/logout" : "/login";
        };
        
        const items = [
            {
            icon: 'mdi-apps',
            title: 'Welcome',
            to: '/'
            },
            { 
            icon: 'mdi-account', 
            title: await getTitle(), 
            to: await getEndPoint()
            },
            {
            icon: 'mdi-chart-bubble', 
            title: 'PostList', 
            to: '/postlistpage'
            }
        ];

        console.log(items);
        return { items }
    },

}
</script>