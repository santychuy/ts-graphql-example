import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { config } from './config';
import { initGraphql } from './graphql';

const {
	APP: { PORT },
} = config;

export const startServer = async (): Promise<Application> => {
	const app: Application = express();

	app.set('port', PORT);

	app.use(helmet());
	app.use(cors());

	initGraphql(app);

	return app;
};
