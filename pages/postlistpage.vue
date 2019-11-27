<template>
<!-- <v-content> -->
  <v-container fluid>

    <client-only>
    <v-btn 
      fab dark
      color="primary" 
      fixed 
      right 
      bottom
      :to="{ name: 'postcreatepage' }">
        <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-card>
    <post-list :posts="posts"/>
    </v-card>
    </client-only>
    <!-- <router-link :to="{ name: 'PostCreatePage' }">글쓰기</router-link> -->
  </v-container>

<!-- </v-content> -->
</template>

<script>
import PostList from '@/components/PostList'
import api from '@/api'
import axios from 'axios';
// import productlistQuery from '../graphql/productlist.gql'
import { mapState, mapActions } from 'vuex'
import gql from 'graphql-tag'

export default {
  name: 'PostListPage',
  components: { PostList },
  data() {
    return {
      // productlist: 
    }
  },
  computed: {
    ...mapState(['posts']), 
  }, 
  // asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
  //   store.dispatch('fetchPostList')
  // },
  created () {
    // await this.$apolloHelpers.onLogin('token', undefined, { expires: 7 })
    // console.log(productlist)
    this.fetchPostList()
    // console.log(this.$store)
    // console.log(this.$store.getters['cognito/isLoggedIn'])
    // this.$store.dispatch('cognito/signInUser', {username: 'aerain', password: 'Comka5857ei_'})
    // .then(res => {
    //   console.log(res)
    // })
    // this.$store.dispatch('cognito/fetchSession')
    // .then(res => {
    //   console.log(res)
    // })
    // this.$store.dispatch('cognito/fetchJwtToken')
    // .then(async jwt => {
    //   console.log(jwt)

    //   const res = await axios.get('/auth/user/me', {
    //     headers: {
    //       Authorization: `Bearer ${jwt}`
    //     }
    //   });
    //   console.log(res.data, 'hihi')
      
    // })
    // this.$store.getters['cognito/session']
    // .then(res => {
    //   console.log(res)
    // })
    // this.$store.getters['cognito/userAttributes']
    // .then(res => {
    //   console.log(res)
    // })

    this.$store.getters['cognito/isLoggedIn']
    this.$store.getters['cognito/session']
  },

  methods: {
    ...mapActions(['fetchPostList']), 
  },
}
</script>