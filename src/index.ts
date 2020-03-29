import 'reflect-metadata';
import { startServer } from './app';

(async (): Promise<void> => {
	const app = await startServer();
	const port = app.get('port');
	app.listen(port);
	console.log(`>> Server on: http://localhost:${port}`);
	console.log(`>> Graphql Playground: http://localhost:${port}/api`);
})();
