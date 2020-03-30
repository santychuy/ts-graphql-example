import { hash, genSalt } from 'bcryptjs';

import { User } from '../../entity/User';

export const getUsers = async (): Promise<User[]> => {
	const users = await User.find();
	return users;
};

export const registerUser = async (
	firstName: string,
	lastName: string,
	email: string,
	password: string
): Promise<User> => {
	const salt = await genSalt(13);
	const hashedPassword = await hash(password, salt);

	const user = await User.create({
		firstName,
		lastName,
		email,
		password: hashedPassword,
	}).save();

	return user;
};
