Esta prueba consiste en la implementación de un servicio REST básico con NodeJS para realizar operaciones CRUD sobre una base de datos de usuarios, se deberá utilizar el framework Express y el ORM Sequelize.

A continuación se mencionan los apartados requeridos así como la especificación de cómo recibirán diferentes peticiones.

1. Creación de un usuario en una tabla de base de datos. Los usuarios deben tener los siguientes datos:

-Id: Identificador único para cada usuario, entero y autoincrementable.
-Nombre: Nombre (s) del usuario, cadena de texto.
-Apellido: Apellido (s) del usuario, cadena de texto.
-Email: Correo electrónico de usuario, cadena de texto, debe ser único para cada usuario.
-Imagen de Perfil: Debe ser una cadena de texto correspondiente al nombre o la ruta de una imagen de perfil para el usuario, la imagen debe guardarse en el sistema de archivos y la base de datos únicamente guardará su nombre o ruta.
-Password: Debe ser una cadena de texto que se cifrará al guardarse en la base de datos.

Debe verificarse que ninguno de los datos a excepción de la imagen de perfil y el id (ya que es autoincrementable) pueda ser vacío en la petición, si no se cumple con esta verificación, se deberá retornar un mensaje de error. Si el usuario se crea correctamente, se deberá indicar con un mensaje. La petición a este apartado deberá ser de tipo POST.

2. Listado de usuarios. Debe realizarse una consulta a la base de datos de todos los datos de todos los usuarios y se retornará un arreglo en formato JSON de estos. La petición a este apartado deberá ser de tipo GET y no se recibirá ningún dato de esta.

3. Actualización de usuario. Debe recibirse el id de un usuario, así como alguno o todos los demás datos que serán actualizados para ese usuario, si sólo se recibe el id pero no hay datos para actualizar, se deberá retornar un mensaje de error. Si el id no se recibe o no hay un usuario con el id recibido, deberá retornar un mensaje de error. Si la imagen de perfil de un usuario se actualiza, deberá borrarse la imagen anterior del sistema de archivos, subir la nueva imagen y actualizar el nombre o ruta en la base de datos. La petición a este apartado deberá ser de tipo PUT.

4. Eliminación de un usuario. Debe recibirse el id del usuario a eliminar de la base de datos. Si el id no se recibe o no hay un usuario con el id recibido, deberá retornar un mensaje de error. Si el usuario tiene imagen de perfil, está deberá eliminarse del sistema de archivos antes de eliminar al usuario. La petición a este apartado deberá ser de tipo DELETE.

5. Y por último, las acciones solicitadas anteriormente deben poder ser realizadas desde un "front-end" la inclusión de estilos CSS es obligatoria, es decir, se solicita hacer modificaciones al proyecto para que ahora incluya tanto back-end como un front-end sencillo que consuma los apartados anteriormente realizados a través de JavaScript (ya sea con Fetch API, AJAX, etc.)
   Por ejemplo, deberá tenerse una página .html que corresponda al listado, conectada con JavaScript a la api de listado de usuarios, igualmente, debe incluirse una función que consuma la api correspondiente a la eliminación de usuarios
   Otra página (o páginas) .html que contenga el formulario de usuario y realice la petición de creación y/o actualización (Cambio de perfil y de datos) de usuarios a la api correspondiente con JavaScript. La api debe generar una respuesta de tipo JSON y con JavaScript deberán generarse los elementos DOM correspondientes.
