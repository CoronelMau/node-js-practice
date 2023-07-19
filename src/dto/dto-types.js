import { Type } from "@sinclair/typebox";

export const idDTOSchema =Type.String({
  format: 'uuid',
  errorMessage:{
    type: 'El tipo del _id no es válido, debe ser un String',
    format: 'El formato no es válido, debe ser un uuid4', 
  }
});

export const nameDTOSchema = Type.String({
  minLength: 2,
  maxLength: 20,
  errorMessage:{
    minLength: 'El nombre debe tener al menos 2 carácteres de longitud',
    maxLength:  'El nombre debe tener máximo 20 carácteres de longitud'
  }
});

export const surnameDTOSchema =Type.String({
  minLength: 4,
  maxLength: 50,
  errorMessage:{
    minLength: 'El apellido debe tener al menos 2 carácteres de longitud',
    maxLength:  'El apellido debe tener máximo 20 carácteres de longitud'
  }
});

export const emailDTOSchema = Type.String({
  format: 'email',
  errorMessage:{
    type: 'El tipo del email no es válido, debe ser un String',
    format: 'El formato del email no es válido, debe incluir el RFC 5322', 
  }
});

export const passwordDTOSchema = Type.String({
  format: 'password',
  minLength: 10,
  maxLength: 25,
  errorMessage:{
    type: 'El tipo de la constraseña no es válido, debe ser un String',
    format: 'El formato de la contraseña no es válido, debe contener una mayúscula, una minúscula y un número', 
    minLength: 'El apellido debe tener al menos 10 carácteres de longitud',
    maxLength:  'El apellido debe tener máximo 25 carácteres de longitud'
  }
});