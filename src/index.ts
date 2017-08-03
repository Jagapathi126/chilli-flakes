import { Chilli } from './config';
import {abc} from './test';
import { connection, connect } from 'mongoose';

connect("mongodb://127.0.0.1:27017/chilli-flakes");

let a = new Chilli({
	dbUrl:"Hello url",
	dbType:"mongo", 
	formInputs:{
		"password":"Hello password",
		"email":["spallya@outlook.com"]
	}
});

Chilli.signup();