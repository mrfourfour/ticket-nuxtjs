<template>
<v-container fulid>
    <!-- <v-btn 
      fab dark large 
      color="primary" 
      fixed 
      right 
      bottom
      :to="{ name: 'postcreatepage' }">
        <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <v-btn 
      fab dark large 
      color="primary" 
      :to="{ name: 'postcreatepage' }">
        <v-icon>mdi-pencil</v-icon>
    </v-btn> -->
    <v-speed-dial
        v-model="fab"
        fixed
        :top="top"
        :bottom="bottom"
        :right="right"
        :left="left"
        :direction="direction"
        :open-on-hover="hover"
        :transition="transition"
      >
        <template v-slot:activator>
          <v-btn
            v-model="fab"
            color="blue darken-2"
            dark
            fab
          >
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-btn
          fab
          dark
          small
          color="green"
          :to="{ name: 'postviewpage-postId-edit', params: {postId: this.postId} }"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="indigo"
          :to="{ name: 'postcreatepage' }"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="red"
          @click="onDelete"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-speed-dial>
    <post-view v-if="post" :post="post"/>
    <p v-else> 게시글 불러오는 중 </p>
</v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PostView from '@/components/PostView'
import api from '@/api'
import store from '@/store'

export default {
    name: 'PostViewPage',
    components: { 
        PostView, 
    },
    data() {
        return {
            direction: 'top',
            fab: false,
            fling: false,
            hover: false,
            tabs: null,
            top: false,
            right: true,
            bottom: true,
            left: false,
            transition: 'slide-y-reverse-transition',
            postId: ''
        }
    },
    asyncData({route, params}) {
      console.log({route, params})
      return { postId: params.postId }
    },
    // props: {
    //     postId: {
    //         type: String, 
    //         required: true
    //     }
    // },
    created() {
        this.fetchPost(`${this.postId}`).catch(err => {
            alert(err.response.data.msg)
            this.$router.back()
        })
    },
    computed: {
        // ...mapState([ 'me' ]),
        ...mapState([ 'post' ]),
    },
    methods: {
        onDelete() {
            console.log(this.post)
            const { id } = this.post
            console.log(id)
            api.delete(`/product/${id}`)
            .then(res => {
              console.log(res)
              this.$router.push({ 
              name: 'postlistpage' })
            })
            .catch(err => {
              console.log(err)
            })
            // console.log(this.me)
            // const { user, id } = this.post
            // const me = this.me
            // console.log(user.id)
            // console.log(me.id)

            // const isAuthor = user.id === me.id
            
            // if (isAuthor) {
            //     api.delete(`/posts/${id}`).then(res => {
            //         alert('게시물이 성공적으로 삭제되었습니다.')
            //         this.$router.push({ name: 'PostListPage' })
            //     }).catch(err => {
            //         alert(err.response.data.msg)
            //     })
            // } else {
            //     alert('게시물의 작성자만 게시물을 삭제할 수 있습니다.')
            // }

            // api.delete(`/posts/${id}`).then(res => {
            //     alert('게시물이 성공적으로 삭제되었습니다.')
            //     this.$router.push({ name: 'PostListPage' })
            // }).catch( err => {
            //     if (err.response.status === 401) {
            //         alert('로그인이 필요합니다.')
            //         this.$router.push({ name: 'Signin' })
            //     } else {
            //         alert(err.response.data.msg)
            //     }
            // })
        },
        ...mapActions([ 'fetchPost' ])
    },
}
</script>