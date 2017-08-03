import * as joi from 'joi';
import { model } from 'mongoose';

import { userSchema } from './user/mongo.schema';

const configurationSchema = joi.object().keys({
  dbUrl: joi.string().required(),
  dbType: joi.string().required().lowercase().valid('mongo','sql'),
  tableName: joi.string().lowercase().alphanum().empty('').default('users'),
  formInputs: joi.any()
})

export class Chilli {
  private static configuration: IConfiguration;
  private static User: any;
  constructor(config){
    const {error, value} = joi.validate(config, configurationSchema);
    if(error){
      throw error;
    }else{
      Chilli.configuration = value;
      Chilli.User = model(Chilli.configuration.tableName, userSchema);
    }
  }
  
  static login():void {

  }

  static signup():void {
    let newUser = new this.User();
    newUser.email = this.configuration.formInputs.email;
    newUser.password = this.configuration.formInputs.password;
    newUser.save((err,response)=>{
      if(err) throw err;
    });
  }

  static getUserCollection():any {
    return this.User;
  }
}


interface IConfiguration {
  dbUrl: string,
  dbType: string,
  tableName: string,
  formInputs: any
}

interface IChilli {
  login: any,
  signup: any
}
