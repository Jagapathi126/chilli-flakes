let joi = require('joi');

const configurationSchema = joi.object().keys({
  dbUrl: joi.string().required(),
  dbType: joi.string().required().lowercase(),
  tableName: joi.string().empty('').default('users'),
  formInputs: joi.any()
})

class Configuration {
  constructor(config){
    const {error, value} = joi.validate(config, configurationSchema);
    if(error){
      console.log(error);
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

let a = new Configuration({dbUrl: "Hello", dbType:"HelloType", formInputs:{"a":"a"}});
