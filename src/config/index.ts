import dotenv from 'dotenv';

dotenv.config();

export const config = {
	APP: {
		NODE_ENV: process.env.NODE_ENV,
	},
};
