import { ApolloServer } from 'apollo-server-express';
import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';

import { Ping } from './graphql/resolvers/ping';
import { RegisterResolver } from './graphql/resolvers/Register';

export const startServer = async (): Promise<Application> => {
	await createConnection();
	const app: Application = express();

	app.set('port', process.env.PORT || 3000);

	app.use(helmet());
	app.use(cors());

	/* Config Graphql */
	const schema = await buildSchema({
		resolvers: [Ping, RegisterResolver],
	});
	const server = new ApolloServer({ schema });
	server.applyMiddleware({ app, path: '/api' });
	/* --------------- */

	return app;
};
