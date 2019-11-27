import ApolloClient from 'apollo-client';
import { ApolloLink, concat, split } from 'apollo-link';
import fetch from 'node-fetch'
import { createHttpLink, HttpLink } from 'apollo-link-http'
import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';

// const httpLink = createHttpLink( {
//     uri: '/gr'
// })

// const httpLink = new createHttpLink({ uri: 'http://172.19.3.5:4000/grapql' });

// const wsLink = new WebSocketLink({
//     uri: `wss://172.19.3.5:4000/grapql`,
//     options: {
//         reconnect: true
//     }
// });

// const authMiddleware = new ApolloLink((operation, forward) => {
//     // add the authorization to the headers
//     operation.setContext({
//         headers: {
//             authorization: '초원범천재' || null,
//         }
//     });
//     return forward(operation);
// })

// const link = split(
//     // split based on operation type
//     ({ query }) => {
//         const { kind, operation } = getMainDefinition(query);
//         return kind === 'OperationDefinition' && operation === 'subscription';
//     },
//     // wsLink,
//     httpLink,
// );

// export default new ApolloClient({
//     link: concat(authMiddleware, link),
//     cache: new InMemoryCache()
// });

const httpLink = createHttpLink({
    uri: '/graphql',
    fetch: fetch
});

// const authLink = setContext((_, ) => {
//     // get the authentication token from local storage if it exists
//     // const token = localStorage.getItem('token');
//     // return the headers to the context so httpLink can read them
//     return {
//         headers: {
//             // authorization: token ? `Bearer 강민규 천재` : "",
//             authorization: 'Bearer 강민규 천재'
//         }
//     }
// });

// export default new ApolloClient({
//     link: authLink.concat(httpLink),
//     cache: new InMemoryCache()
// });

const defaultOptions = {
    // watchQuery: {
    //   fetchPolicy: 'no-cache',
    //   errorPolicy: 'ignore',
    // },
    query: {
        fetchPolicy: 'no-cache',
        //   errorPolicy: 'all',
    },
}


const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    const token = 'tokentokentoken'
    operation.setContext({
        headers: {
            Authorization: token ? `Bearer ${token}` : null
        }
    })

    return forward(operation)
})

export default new ApolloClient({
    link: authMiddleware.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
    connectToDevTools: true
})











// const defaultOptions = {
//     // watchQuery: {
//     //     fetchPolicy: 'no-cache',
//     //     errorPolicy: 'ignore',
//     // },
//     query: {
//         fetchPolicy: 'network-only',
//         // errorPolicy: 'all',
//     },
// }

// export default new ApolloClient({
//     link: createHttpLink({
//         uri: '/graphql',
//         fetch: fetch,
//     }),

//     cache: new InMemoryCache(),
//     defaultOptions: defaultOptions
// });