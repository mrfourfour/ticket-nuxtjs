import colors from 'vuetify/es5/util/colors'
import attachCognitoModule from '@vuetify/vuex-cognito-module'

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    server: {
        port: 8000, // default: 3000
        host: '0.0.0.0' // default: localhost
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/vuex-cognito-module.js'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // '@nuxtjs/apollo',
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],

    axios: {
        proxy: true,
    },
    proxy: [
        'http://gql-saller.fphifd83sm.ap-northeast-2.elasticbeanstalk.com/graphql',
        // 'http://172.19.3.5:4000/graphql',
        'http://ticket-seller.fphifd83sm.ap-northeast-2.elasticbeanstalk.com/api',
        'http://ticket.ap-northeast-2.elasticbeanstalk.com/auth'
    ],

    /*
     ** apollo module configuration
     ** https://github.com/nuxt-community/apollo-module
     */
    apollo: {
        tokenName: 'apollo-token',
        errorHandler: '~/plugins/apollo-error-handler.js',
        cookieAttributes: {
            expires: 7,
            secure: false
        },
        includeNodeModules: true,
        authenticationType: 'Bearer',
        defaultOptions: {
            // See 'apollo' definition
            // For example: default query options
            $query: {
                // loadingKey: 'loading',
                fetchPolicy: 'network-only',
            },
        },
        clientConfigs: {
            // default: '~/api/client-configs/default.js'
            default: {
                httpEndpoint: '/graphql',
                getAuth: () => 'Bearer your_token_string',
                httpLinkOptions: {
                    fetchOptions: {
                        mode: 'cors'
                    },
                    credentials: 'omit'
                },
                tokenName: 'apollo-token', // optional, 
            }
        },
        ssr: true,
        test: {
            httpEndpoint: '/graphql',
            // wsEndpoint: 'ws://localhost:5000',
            tokenName: 'apollo-token'
        },
        test2: '~/plugins/my-alternative-apollo-config.js'

        // Headers: {

        // }
    },


    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
     ** Build configuration
     */

    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {

        }
    },
}