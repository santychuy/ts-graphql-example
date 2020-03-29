import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { createConnection } from 'typeorm';

import { initGraphql } from './graphql';

export const startServer = async (): Promise<Application> => {
	await createConnection();
	const app: Application = express();

	app.set('port', process.env.PORT || 3000);

	app.use(helmet());
	app.use(cors());

	initGraphql(app);

	return app;
};
