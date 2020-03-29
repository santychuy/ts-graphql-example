import 'reflect-metadata';

import './database';
import { startServer } from './app';
import { welcomeLogs } from './constants/welcomeLogs';

(async (): Promise<void> => {
	const app = await startServer();
	const port: number = app.get('port');
	app.listen(port);
	welcomeLogs(port);
})();
