import { createConnection } from 'typeorm';

(async (): Promise<void> => {
	await createConnection({
		name: 'default',
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'postgres',
		password: 'postgres',
		database: 'ts-graphql-example',
		synchronize: true,
		logging: false,
		entities: ['dist/entity/*.*'],
	});
})();
