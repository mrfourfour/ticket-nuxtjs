export default function(context) {
    return {
        httpEndpoint: '/graphql',
        getAuth: () => 'Bearer my-static-token' // use this method to overwrite functions
    }
}