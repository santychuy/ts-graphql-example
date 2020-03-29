import { msgBlue, msgPink } from './colors';

export const welcomeLogs = (port: number): void => {
	console.log(msgBlue(`>> Server on: http://localhost:${port}`));
	console.log(msgPink(`>> Graphql Playground: http://localhost:${port}/api`));
};
