import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import { registerUser } from '../controllers/Register.controller';
import { User } from '../../entity/User';

@Resolver()
export class RegisterResolver {
	@Query(() => String)
	init(): string {
		return 'Hello Register Resolver';
	}

	@Mutation(() => User, {
		name: 'RegisterUser',
		description: 'Register User w/basic information',
	})
	async register(
		@Arg('firstName') firstName: string,
		@Arg('lastName') lastName: string,
		@Arg('email') email: string,
		@Arg('password') password: string
	): Promise<User> {
		const user = await registerUser(firstName, lastName, email, password);
		return user;
	}
}
