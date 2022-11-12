// Mostrar ordenado por título de publicación, título publicación, descripción publicación y precio publicación, que pertenezcan a los tipos de producto entregados

	select p.tituloPublicacion, p.descripcionPublicacion, p.precioPublicacion 
from Publicaciones as p join Productos as pr
where pr.tipoProducto in (‘Tipos de productos entregados’)
group by p.tituloPublicacion

// Mostrar ordenado por título de gestion, id admin, título gestión, descripción gestión todos los administradores que han hecho una gestión

select ad.idAdmin, g.tituloGestion, g.descripcionGestion 
from Administradors as ad join Gestions as g
where g.idAdmin = any ad.admin
	group by g.tituloGestion

// Mostrar ordenado por título de publicación, título publicación, nombre usuario nombre de producto, de usuarios que hayan hecho una publicación

	select pu.tituloPublicacion, us.nombreUsuario, pr.nombreProducto
	from Usuarios as us join(
            Productos as pr join
	Publicaciones as pu where 
	us.rutUsuario = any pu.rutUsuario) as prpu
	group by prpu.tituloPublicacion

// Mostrar ordenado por tipo producto, nombre producto, marca producto, todos los productos que no tengan sección

	select prs.tipoProducto, prs.nombreProducto, prs.marcaPRoducto
	from Productos as pr join(
                Seccions as s where
	pr.idProducto = any s.idProducto) as prs
group by prs.tipoProducto 

// Mostrar nombre producto, marca producto, tipo producto, nombre sección, nombre mercado y dirección del mercado, dado un nombre de producto

select p.nombreProducto, p.marcaProducto, p.tipoProducto, sm.nombreSeccion,
    sm.nombreMercado, sm.direccionMercado 
	from Productos as p join(
        Seccions as s join Mercados as m where s.idMercado = m.idMercado) as sm
	where p.idProducto = sm.idProducto and
exist “Ingresar nombre producto” = sm.nombreProducto

// Mostrar nombre nombre producto, marca producto, tipo producto y nombre mercado, dirección mercado, de todos los que no tengan sección

select pm.nombreProducto, pm.marcaProducto, pm.tipoProducto, pm.nombreMercado,
    pm.direccionMercado 
	from Productos as p where s.idMercado and s.idProducto not in
    (select pm.idMercado, pm.idProducto
	from Seccions as s join Mercados as m) as pm
