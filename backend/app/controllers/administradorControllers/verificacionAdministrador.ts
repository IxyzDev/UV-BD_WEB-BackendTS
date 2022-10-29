export const parseAdminPassword = (AdminPasswordRequest: any): string => {
  if (!isString(AdminPasswordRequest)) {
    throw new Error('Error al verificar la contraseña del administrador')
  }
  return AdminPasswordRequest
}

export const parseAdminName = (AdminNameRequest: any): string => {
  if (!isString(AdminNameRequest)) {
    throw new Error('Error al verificar la contraseña del administrador')
  }
  return AdminNameRequest
}


export const isString = (string: string): boolean => {
  return typeof string === 'string'
}

