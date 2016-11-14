MANUAL DE TAREAS DE GULP
==============

Listado de tareas que se ejecutan actualmente (Explicadas por orden alfabético):

- **compile**:  Esta tarea se encarga de compilar todo nuestro 
                javascript en un único fichero. Lo minificará e incluirá las inyección de dependencias manuales en angular.
- **copy**: Copia dentro de www archivos necesarios de librerías localizadas fuera.
- **default**:  Tarea que se ejecuta por defecto. Ejecuta todas las tareas necesarias para nuestro workflow.
- **eslint**:   Analiza nuestro código para escribir javascript de calidad. Nos saldrán errores o warning por pantalla de cmd 
                si hemos puesto algo mal. La configuración se encuentra en .eslintrc (NO TOCAR LA CONFIGURACION - ESO ES TRAMPA).
- **install**:  Esta tarea nos permite instalar las dependencias de bower y npm en único comando.
- **libs**:     Concatena todas las librerías externas de nuestra aplicación en único fichero vendors.
- **minimage**: Optimiza las imágenes de nuestra aplicación reduciendo su tamaño y permitiendo así una carga más rápida.
- **minsvg**: Optimiza las imágenes svg de nuestra aplicación reduciendo su tamaño y permitiendo así una carga más rápida.
- **sass**:     Compila todos los sass en un único fichero css.
- **templates**:Cachea todos nuestros html en un fichero js. Con eso evitamos llamadas innecesarias a servidor.
- **watch**:    Observa los cambios en nuestro código y ejecuta tareas necesarias para el uso correcto de la app.