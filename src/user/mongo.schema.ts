import {Schema, model} from 'mongoose';
import { generateUID } from '../common';

const userSchema = new Schema({
	uid: {type: String, default: generateUID()},
	email: [{
		address: {type: String, required: true},
		verified: {type: Boolean, default: false}
	}],
	password: String,
	active: {type: Boolean, default: true},
	createdAt: {type: Date, default: Date.now},
	updatedAt: {type: Date, default: Date.now},
	ipAddress: String,
	userAgent: String
})

export { userSchema }