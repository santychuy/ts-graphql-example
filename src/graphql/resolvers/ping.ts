import { Resolver, Query } from 'type-graphql';

@Resolver()
export class Ping {
	@Query(() => String, { description: 'Ping ------ Pong' })
	ping(): string {
		return 'Pong';
	}
}
