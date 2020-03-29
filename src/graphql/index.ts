import { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import { Ping } from './resolvers/ping';
import { RegisterResolver } from './resolvers/Register';

export const initGraphql = async (app: Application): Promise<void> => {
	const schema = await buildSchema({
		resolvers: [Ping, RegisterResolver],
	});
	const server = new ApolloServer({ schema });
	server.applyMiddleware({ app, path: '/api' });
};
