import { Type } from "@sinclair/typebox";
import Ajv from "ajv";
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import { emailDTOSchema, 
  idDTOSchema, 
  nameDTOSchema, 
  passwordDTOSchema, 
  surnameDTOSchema } 
  from "#Dto/dto-types.js";

const UpdatePasswordDTOSchema = Type.Object({
  oldPassword: passwordDTOSchema,
  newPassword: passwordDTOSchema
},
{
  additionalProperties: false,
  errorMessage: {
    additionalProperties: 'El formato del objeto no es correcto'
  }
});

const ajv = new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier');
ajv.addFormat("password", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);

addErrors(ajv);
const validateSchema = ajv.compile(UpdatePasswordDTOSchema);

const userUpdatePasswordDTO = (req,res,next) =>{
  const isDTOValid = validateSchema(req.body);
  
  if(!isDTOValid) 
    return res
      .status(400)
      .send({
        errors: validateSchema.errors.map((error)=>error.message)
      });
  next();
}

export default userUpdatePasswordDTO;