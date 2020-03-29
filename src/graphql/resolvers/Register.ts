import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { hash, genSalt } from 'bcryptjs';

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
		/* Logica de este endpoint */
		const salt = await genSalt(13);
		const hashedPassword = await hash(password, salt);

		const user = await User.create({
			firstName,
			lastName,
			email,
			password: hashedPassword,
		}).save();
		/* ------------------------ */
		return user;
	}
}
