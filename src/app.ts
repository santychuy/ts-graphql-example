import { ApolloServer } from 'apollo-server-express';
import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { buildSchema } from 'type-graphql';

import { Ping } from './graphql/resolvers/ping';

export const startServer = async (): Promise<Application> => {
	const app: Application = express();

	app.set('port', process.env.PORT || 3000);

	app.use(helmet());
	app.use(cors());

	/* Config Graphql */
	const schema = await buildSchema({
		resolvers: [Ping],
	});
	const server = new ApolloServer({ schema });
	server.applyMiddleware({ app, path: '/api' });
	/* --------------- */

	return app;
};
