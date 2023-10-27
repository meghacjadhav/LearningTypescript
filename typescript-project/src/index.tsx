import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import {
    ApolloProvider,
    ApolloClient,
    createHttpLink,
    InMemoryCache
} from '@apollo/client';

import App from './App';

const httpLink = createHttpLink({
    uri: 'https://staging-master.smartsoul.com/graphql'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </ApolloProvider>
);

