/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IProductTypes {
	map: any;
	[x: string]: unknown;
	_id: number;
	name: string;
	slug: string;
	desc: string;
	category: string;
	new: boolean;
	amount: number;
	quantity: number;
	image: string;
	more: string;
	price: number;
	totalPrice: number;
}

export interface IBoxColumns {
	label: string;
	fieldName: string;
}
// eslint-disable-next-line no-unused-expressions
[];

export interface ItableConfig {
	columns: {
		label: string;
		fieldName: string;
	}[];
}

export interface IConfigTypes {
	columns: {
		label: string;
		fieldName: string;
	}[];
}
export interface IUser {
	name: string;
	surname: string;
	street: string;
	stNumber: string;
	city: string;
	zipCode: string;
	email: string;
	phoneNumber: string;
}

export interface ISubmitedUser {
	email: string;
	password: string;
}

export interface IFaq {
	id: string;
	question: string;
	answer: string;
}

export interface IFaqTitle {
	id: string;
	title: string;
}
export interface IHome {
	id: string;
	title: string;
	content: string;
}
export type TSubmitUserData = (user: IUser) => void;

export type TAddToBox = (p: IProductTypes) => void;

export type TSubmitUser = (user: ISubmitedUser) => void;
