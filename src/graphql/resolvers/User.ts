import { Resolver, Query, Mutation, Arg } from 'type-graphql';

import { registerUser, getUsers } from '../controllers/User.controller';
import { User } from '../../entity/User';

@Resolver()
export class UserResolver {
	@Query(() => [User], { name: 'GetUsers', description: 'Get Users from DB' })
	async getUsers(): Promise<User[]> {
		const users = await getUsers();
		return users;
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
