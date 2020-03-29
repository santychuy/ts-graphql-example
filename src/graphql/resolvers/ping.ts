import { Resolver, Query } from 'type-graphql';

@Resolver()
export class Ping {
	@Query(() => String)
	ping(): string {
		return 'Pong';
	}
}
