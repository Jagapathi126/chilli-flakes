import * as uuidv4 from 'uuid/v4';

export function generateUID():string {
	return uuidv4();
}