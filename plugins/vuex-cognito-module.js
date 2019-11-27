import attachCognitoModule from '@vuetify/vuex-cognito-module'
import {
    AWS_COGNITO_POOL_ID,
    AWS_COGNITO_CLIENT_ID,
    AWS_REGION,
} from '../api/cognito-types.js'

export default (ctx, inject) => {
    const store = ctx.store
    attachCognitoModule(store, {
        userPoolId: AWS_COGNITO_POOL_ID,
        // identityPoolId: 'your-data-here', // This field is now optional
        userPoolWebClientId: AWS_COGNITO_CLIENT_ID,
        region: AWS_REGION
    }, 'cognito')
}