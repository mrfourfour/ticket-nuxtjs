import api from '@/api'
import apollo from '../api/apollo'
// import apollo from '@nuxtjs/apollo'
import gql from 'graphql-tag'

import {
    FETCH_POST_LIST,
    FETCH_POST,
    SET_ACCESS_TOKEN,
    SET_MY_INFO,
    DESTROY_ACCESS_TOKEN,
    DESTROY_MY_INFO
} from './mutations-types.js'

export default {
    fetchPostList({ commit }) {
        // return api.get('/product').then(res => {
        //     commit(FETCH_POST_LIST, res.data)
        //     console.log({ apollo })
        // })
        console.log(apollo)
        return apollo.query({
                query: gql `
                    query productlist {
                        product {
                            id
                            name
                            info
                            image
                            price
                            category
                            subCategory
                            date
                            sellerId
                            area
                            reviews {
                                userid
                                title
                                description
                                rate
                            }
                            options {
                                id
                            }
                        }
                    }
                `,

            })
            .then(data =>
                // console.log(data.data.product),
                commit(FETCH_POST_LIST, data.data.product)
            )
            .catch(error => console.error(error))

    },
    fetchPost({ commit }, postId) {
        // return api.get(`/posts/${postId}`)
        //     .then(res => {
        //         commit(FETCH_POST, res.data)
        //     })
        return apollo.query({
                query: gql `
                    query productById($id: String!) {
                        productById(id: $id) {
                            id
                            name
                            info
                            image
                            price
                            category
                            subCategory
                            date
                            sellerId
                            area
                            reviews {
                                userid
                                title
                                description
                                rate
                            }
                            options {
                                id
                            }
                        }
                    }`,
                variables: {
                    id: postId
                }
            })
            .then(data =>
                // console.log({ data, postId })
                commit(FETCH_POST, data.data.productById)
            )
            .catch(error => console.log(error))
    },
    signin({ commit }, payload) {
        const { email, password } = payload
        return api.post('/auth/signin', { email, password }).then(res => {
            const { accessToken } = res.data
            commit(SET_ACCESS_TOKEN, accessToken)
            return api.get('/users/me')
        }).then(res => {
            commit(SET_MY_INFO, res.data)
        })
    },
    signinByToken({ commit }, token) {
        commit(SET_ACCESS_TOKEN, token)
        return api.get('/users/me').then(res => {
            commit(SET_MY_INFO, res.data)
        })
    },
    signout({ commit }) {
        commit(DESTROY_MY_INFO)
        commit(DESTROY_ACCESS_TOKEN)
    }

}