<template>
<v-container 
    fluid
    align-center
    >
    <v-row 
        align-center>
    <!-- <v-layout> -->
    <post-Edit-form 
        v-if="post"
        :post="post"
        @submit="onSubmit"/>
    <!-- </v-layout> -->
    </v-row>
</v-container>
</template>

<script>
import PostEditForm from '@/components/PostEditForm'
import api from '@/api'
import { mapState } from 'vuex'

export default {
    name: 'PostEditPage', 
    components: { PostEditForm },
    data() {
        return {
            postId: ''
        }
    }, 
    asyncData({route, params}) {
        console.log({route, params})
        return { postId: params.postId }
    },
    computed: {
        ...mapState(['post'])
    }, 
    methods: {
        onSubmit(payload) {
            console.log(payload)
            payload['price'] = Number(payload['price'])
            console.log(payload)
            api.put('/product/update', payload)
            .then(res => {
                console.log(res)
                this.$router.push({ 
                    name: 'postviewpage-postId', 
                    params: {postId: res.data.id} })
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
}
</script>