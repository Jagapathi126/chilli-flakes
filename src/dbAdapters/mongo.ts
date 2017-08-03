import { connection, connect } from 'mongoose';

function dbConnection(dbUrl):boolean {
	let connectionState:number = connection.readyState;
	switch(connectionState){
		case 0: 		// disconnected
			connect(dbUrl);
			return true;
		case 1:			// connected
			return true;
		case 2:			// connecting
			return; 
		case 3: 		// disconnecting
			
			return;
	}
}

