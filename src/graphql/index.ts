import { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import { UserResolver } from './resolvers/User';

export const initGraphql = async (app: Application): Promise<void> => {
	const schema = await buildSchema({
		resolvers: [UserResolver],
	});
	const server = new ApolloServer({ schema });
	server.applyMiddleware({ app, path: '/api' });
};
