import * as joi from 'joi';

const configurationSchema = joi.object().keys({
  dbUrl: joi.string().required(),
  dbType: joi.string().required().lowercase(),
  tableName: joi.string().empty('').default('users'),
  formInputs: joi.any()
})

export class Configuration {
  constructor(config){
    const {error, value} = joi.validate(config, configurationSchema);
    if(error){
      throw error;
    }else{
      console.log(value);
    }
  }
}

interface IConfiguration {
  dbUrl: string,
  dbType: string,
  tableName: string,
  formInputs: any
}
