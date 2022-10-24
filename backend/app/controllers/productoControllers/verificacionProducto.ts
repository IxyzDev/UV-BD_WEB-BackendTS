//Parsear si el rut introducido por el usuario es correcto
export const parseUserRut = (UserRutRequest: any): string => {
  if (!isString(UserRutRequest) || !isValidRut(UserRutRequest)) { // 
    throw new Error('Error al introducir el rut')
  }
  return UserRutRequest
}

//Parsear si el nombre introducido por el usuario es correcta
export const parseUserName = (UserNameRequest: any): string => {
  if (!isString(UserNameRequest)) {
    throw new Error('Error en el nombre del usuario')
  }
  return UserNameRequest
}

//Parsear si el email ingresado es valido
export const parseUserEmail = (UserEmailFromRequest: any): string => {
  if (!isUserPassword(UserEmailFromRequest) || !isValidUserEmail(UserEmailFromRequest)) {
    throw new Error('El Email ingresado es incorrecto')
  }
  return UserEmailFromRequest
}

//Parsear si la contraseña ingresada es valida
//https://es.stackoverflow.com/questions/142/validar-un-email-en-javascript-que-acepte-todos-los-caracteres-latinos
export const parseUserPassword = (UserPasswordFromRequest: any): string => {
  if (!isString(UserPasswordFromRequest)) { //|| isUserPassword(UserPasswordFromRequest) 
    throw new Error('La contraseña no es valida')
  }
  return UserPasswordFromRequest
}

//Parsear si la direccion ingresada es correcta
export const parseUserAddress = (UserAddressFromRequest: any): string => {
  if (!isString(UserAddressFromRequest)) {
    throw new Error('La direccion ingresada no es correcta')
  }
  return UserAddressFromRequest
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}

export const isValidRut = (string: string): boolean => {
  const userRut = /^[0-9]{2}\.[0-9]{3}.[0-9]{3}-[0-9]{1}?$/;
  const valid = userRut.test(string);
  return valid
}
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Text_formatting
export const isValidUserEmail = (string: string): boolean => {
  const userUserEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const valid = userUserEmail.test(string);
  return valid
}

//https://estradawebgroup.com/Post/Como-validar-que-las-contrasena-que-capturan-tus-usuarios-son-seguras-con-jQuery/4228
export const isUserPassword = (string: string): boolean => {
    var strength = 0
    if (string.length < 6) {
      //return 'Too short'
      return false
    }
    if (string.length > 7) strength += 1
    // If userPassword contains both lower and uppercase characters, increase strength value.
    if (string.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
    // If it has userPassword and characters, increase strength value.
    if (string.match(/([a-zA-Z])/) && string.match(/([0-9])/)) strength += 1
    // If it has one special character, increase strength value.
    if (string.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
    // If it has two special characters, increase strength value.
    if (string.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
    // Calculated strength value, we can return messages
    // If value is less than 2

    //Revisar como implementar esto de forma dinamica
    if (strength < 2) {
      //return 'Weak'
      return false
    } else if (strength == 2) {
      //return 'Good'
      return true
    } else {
      //return 'Strong'
      return true
    }
    
}