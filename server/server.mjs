import express from 'express'
import http from 'http'
import cors from 'cors'
import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4'
import bodyParser from 'body-parser'

import fakeData from './fakeData/index.js'

const app = express()
const httpServer = http.createServer(app)

const typeDefs = `#graphql
    type Folder {
        id: String,
        name: String,
        createdAt: String,
        author: Author
    }
    type Author {
        id: String,
        name: String
    }
    type Query {
        folders: [Folder]
    }
`;
const resolvers = {
    Query: {
        folders: () => fakeData.folders
    },
    Folder: {
        author: (parent, args) => fakeData.authors.find(e => e.id == parent.authorId)
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
})

await server.start()

app.use(cors(), bodyParser.json(), expressMiddleware(server))

await new Promise((resolve) => httpServer.listen({port: 4000}, resolve))
console.log("Server is running on http://localhost:4000")