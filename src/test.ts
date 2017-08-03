import { Chilli } from './config';
export function abc() {
	Chilli.signup();
	let User = Chilli.getUserCollection();
	console.log(new User());
}