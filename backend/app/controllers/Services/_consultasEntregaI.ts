import db from '../../models'
import { UserInterface } from '../../interfaces/types'

const usuario = db.Usuario



select correoUsuario
from Usuarios
where rut = "Ingrese rut";

// Mostrar todos los productos que se encuentran en un estado dado

select pr.nombreProducto, pr.tipoProducto
from Productos as pr join Publicacions as pu
where pu.idProducto = pr.idProducto and pu.estadoPublicacion = "Ingrese Estado";

// Muestra a los usuarios gestionados por un administrador

select u.rutUsuario, u.nombreUsuario, pugad.idAdmin
from Usuarios as u join(
    select pu.idPublicacion, pu.rutUsuario, gad.idAdmin 
from Publicacions as pu join(
        select g.idAdmin, g.idPublicacion, ad.idAdmin
from Gestions as g join Administradors as ad 
where ad.idAdmin = g.idAdmin) as gad 
where pu.idPublicacion = gad.idPublicacion) as pugad 
where u.rutUsuario = pugad.usuarioRut and pugad.idAdmin = “Ingrese id Admin”;

// Actualizar contraseña de un usuario

update Usuarios
set contraseñaUsuario = "Ingrese contraseña"
where rutUsuario = “Ingrese rut usuario”
Actualizar la dirección de un usuario

update Usuarios
set direccionUsuario = "Ingrese direccion usuario"
where rutUsuario = “Ingrese rut usuario”;

// Crear una nueva publicación
 
insert into Publicacions
values( “Ingrese fotografía”, ingrese precio, “Ingrese un estado”, "Ingrese un titulo",
    "Ingrese una descripción", "Ingrese el rut de un usuario", “Ingrese el identificador del producto”);

// Crear un nuevo usuario
 
insert into Usuarios
values(“Ingresar nombre del usuario”, "ingresar rut del usuario", "Ingresar correo usuario", "Ingresar contraseña del usuario", "Ingresar direccion del usuario);

// Crear un nuevo mercado

insert into Markets
values("Ingrese nombre mercado", "Ingrese direccion mercado");

// Eliminar un usuario

delete from Usuarios
where rut = “Ingresar rut del usuario”;

// Eliminar una publicacion

delete from Publicacions
where idPublicacion = “Ingrese id publicacion”;