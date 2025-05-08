<template>
  <div class="full-page">
      <img
        class="background-image"
        src="@/assets/fondo-b2.jpg"
      />
      <v-container class="border-white">
        <v-row align="center" class="row-c1">
          <v-col class="col1-color align-self-stretch pa-15">
            <h1 class="textc2 mb-8">
              Instrucciones de Uso ParaVIEW Web
            </h1>
            <v-carousel
              height="900px"
              show-arrows="hover"
              cycle
              hide-delimiter-background
            >
            <v-carousel-item v-for="(paso, i) in pasos" :key="i">
              <v-sheet color="#d6eae5" height="100%" class="slide-sheet">
                <div class="slide-content">
                  <div class="text-h4 font-weight-bold mb-4">
                    {{ paso }}
                  </div>
                  <div class="text-subtitle-1 mb-4">
                    {{ slides2[i] }}
                  </div>
                  <div class="mt-4 text-left">
                    <v-img
                      :src="`${slidesImages[i]}`"
                      width="250"
                      height="400"
                      class="mx-auto"
                      contain
                    ></v-img>
                  </div>
            
                  <div v-if="i === 1" class="mt-4 text-left">
                    <ul>
                      <li v-for="(item, index) in listadop2" :key="index">
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                  <div v-if="i === 3" class="mt-4 text-left">
                    <ul>
                      <li v-for="(item, index) in listadop4" :key="index">
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                  <div v-if="i === 4" class="mt-4 text-left">
                    <ul>
                      <li v-for="(item, index) in listadop5" :key="index">
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                  <div v-if="i === 6" class="mt-4 text-left">
                    <ul>
                      <li v-for="(item, index) in listadop7" :key="index">
                        {{ item }}
                      </li>
                    </ul>
                  </div>
            
                  <div v-if="i === 1 || i === 3 || i === 4" class="mt-4 text-left">
                    {{ complemento[i] }}
                  </div>
                </div>
              </v-sheet>
            </v-carousel-item>
            </v-carousel>
            <!-- ✅ Letrero informativo -->
            <div class="info-banner mt-8 text-center">
              <p class="text-h5 font-weight-bold">
                Si desea obtener más información sobre el uso de ParaView, puede consultar la siguiente guía oficial:
              </p>
              <a
                href="https://docs.paraview.org/en/latest/UsersGuide/displayingData.html"
                target="_blank"
                class="link-text text-decoration-underline"
              >
                https://docs.paraview.org/en/latest/UsersGuide/displayingData.html
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
  </div>
</template>

  <script setup>
    const colors = [
      'indigo',
      'warning',
      'pink darken-2',
      'red lighten-1',
      'deep-purple accent-4',
    ]
    const pasos = [
      'Paso 1',
      'Paso 2',
      'Paso 3',
      'Paso 4',
      'Paso 5',
    ]
    const slides2 = [
      'Al iniciar la simulación, en el costado izquierdo se despliega un panel como se muestra a continuación:',
      'Para activar la simulación, diríjase al ícono de archivo y seleccione la parte del simulador que desea visualizar. Por ejemplo:',
      'En la sección de configuración, encontrará el modo de representación gráfica de los datos en 3D. Uno de los modos más comunes es:',
      'Puede elegir cómo colorear la geometría. Por defecto, puede estar en Solid Color. Sin embargo, es más útil seleccionar variables físicas para analizar:',
      'En la interfaz también se encuentran tres desplegables importantes:',
    ]
    const slidesImages = [
      new URL('@/assets/Imagen1.png', import.meta.url).href,
      new URL('@/assets/Imagen2.png', import.meta.url).href,
      new URL('@/assets/Imagen3.png', import.meta.url).href,
      new URL('@/assets/Imagen4.png', import.meta.url).href,
      new URL('@/assets/Imagen5.png', import.meta.url).href,
    ];
    const listadop2 = [
      'Face_1: Corresponde a la tapa de la tubería en la posición',
      'Face_2: Corresponde a la tapa de la tubería en la posición',
      'Face_3: Representa el cuerpo de la tubería.',
      'p_0_v0: Representa la simulación completa del sistema.'
    ]
    const listadop4 = [
      'Surface: muestra únicamente la superficie del objeto.',
      'Surface With Edges: visualiza la superficie junto con las líneas de la malla, lo que permite observar la estructura del mallado.'
    ]
    const listadop5 = [
      'p1 → p: Presión en la sección inicial del dominio (entrada).',
      'p3 → U: Velocidad en la sección final (salida).',
      'c1 → cellID: Identificador único de las celdas en el bloque 1.',
      'c1 → p: Presión en las celdas de la sección inicial.',
      'c3 → U: Velocidad en las celdas de la sección final.'
    ]
    const listadop7 = [
      'Source: representa el archivo o subconjunto de datos seleccionado (por ejemplo, una cara de la geometría o el dominio completo).',
      'Representation: permite elegir cómo se representará gráficamente ese source (Surface, Wireframe, Volume, etc.).',
      'View: es la ventana de visualización donde se renderizan los datos. Desde allí se puede rotar, hacer zoom y explorar el modelo en 3D.'
    ]
    const complemento = [
      'paso',
      'Una vez que seleccione la parte del simulador que desea visualizar, podrá acceder a las opciones de personalización de la vista, que le permitirán analizar mejor los resultados de la simulación.',
      'paso',
      'Estas variables permiten visualizar gradientes, distribuciones de flujo o zonas con mayor presión, dependiendo del campo seleccionado.\n Elementos clave: Source, Representation y View',
      'Estos elementos trabajan en conjunto para ofrecer una visualización precisa, interactiva y personalizada del modelo simulado. \n En el lado derecho de la pantalla se muestran los pasos de tiempo correspondientes a la simulación.'
    ]
  </script>

  <style scoped>
  
    .border-white { 
      border-radius: 8px;
      /*background-color: #755a1c;*/
    }
  
    .row-c1 {
      align-content: flex-start;
      align-items: flex-start;
      position: relative;
    }
  
    .col1-color {
      background-color: #204e47;
      color: rgb(0, 0, 0);
      border-radius: 8px;
      margin: 1%;
      justify-content: center;
      text-align: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      max-width: 100%;
      width: 100%;
      min-height: 100vh; /* Nuevo: asegura altura mínima de pantalla */
      height: auto;      /* Nuevo: permite que crezca si el contenido lo necesita */
      position: relative;
    }
    
  
    .col2-color {
      background-color: #4d4b4b;
      color: black;
      height: 80vh;
      border-radius: 8px;
      margin: 1%;
      justify-content: center;
      text-align: center;
      position: relative;
    }
  
    .cont-app {
      width: 100%;
      height: 100%;  /* Asegura que el contenedor ocupe todo el alto de la ventana */
      justify-content: center;
      align-items: center;
      display: relative;
    }
    
    .col-iframe {
      width: 100%;
      height: 70%;
    }
  
    .css-text {
      color: rgb(0, 0, 0);
    }
    .col-res {
      height: 95%;
      width: 100%;
    }
    .highlighted-column{
      border-radius: 10px; /* Ajusta el radio de los bordes según lo necesites */
      padding: 5px; /* Ajusta el espacio interno según lo necesites */
      background-color: #C5E1A5; /* Cambia 'yellow' al color que desees */
      width: 100%; /* Ocupar todo el ancho disponible */
      height: 500px; /* Ajustar automáticamente la altura */
      text-align: left; /* Alinear el contenido a la izquierda */
      display: flex;
      flex-direction: column;
    }
    .bordered-button {
      margin-top: 3%; /* Ajusta el margen superior según sea necesario */
      margin-bottom: 2%; /* Ajusta el margen inferior según sea necesario */
      margin-left: 1%;
      margin-right: 1%;
      border-radius: 10px;
      background-color:#ffffff;
      align-self: center;
      color:rgb(0, 0, 0)
    }
    .label {
      background-color: #6551a7; /* Cambia 'yellow' al color que desees */
      border-radius: 10px; /* Ajusta el radio de los bordes según lo necesites */
      width: 125px; /* Ancho fijo para todas las etiquetas */
      display: inline-block; /* Para que el ancho fijo funcione correctamente */
      text-align: center; /* Centrar el texto horizontalmente */
      margin-top: 5%;
      color: #F1F8E9;
      justify-content: center; /* Centrar horizontalmente */
      margin-right: 5%;
      margin-left: 10%;
    }
    .center-title {
      text-align: center;
      margin-bottom: 30px;
      margin-top: 30px;
    }
  
    .textc2{
      color: #F1F8E9;
      margin-top: 0px;
      align-items: center;
      align-content: flex-start;
    }
    .full-page {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow-wrap: break-word;
      overflow: auto;
    
      padding-top: 130px; /* 👈 Esto deja espacio para el AppBar fijo */
      padding-bottom: 130px; /* Opcional: si también tienes un footer fijo */
      z-index: 0; /* 👈 Asegura que no se superponga al AppBar */
    }
  
    .background-image {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      object-fit: cover; /* Esto hace que la imagen cubra toda la pantalla */
    }

    .contenido-instrucciones p,
    .contenido-instrucciones ul {
      text-align: justify;
      font-size: 1.05rem;
      line-height: 1.6;
    }

    .contenido-instrucciones li {
      margin-bottom: 0.5rem;
    }

    .titulo-seccion {
      font-size: 1.5rem;
      font-weight: bold;
      color: #F1F8E9;
    }

    .col1-color-b {
      background-color: #4F85A6;
      color: rgb(0, 0, 0);
      border-radius: 8px;
      margin: 1%;
      justify-content: center;
      text-align: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      max-width: 100%;
      width: 100%;
      min-height: 20vh; /* Nuevo: asegura altura mínima de pantalla */
      height: auto;      /* Nuevo: permite que crezca si el contenido lo necesita */
      position: relative;
    }

    .slide-sheet {
      padding: 18px; /* margen interno alto */
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .slide-content {
      width: 100%;
      max-width: 700px;
      text-align: center;
      color: #000;
    }

    .info-banner {
      background-color: #d6eae5; /* Fondo oscuro con contraste */
      color: #000000;  /* Color de texto blanco */
      padding: 40px;  /* Más espacio interno */
      border-radius: 15px;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Sombra sutil */
      margin-top: 50px;
      margin-bottom: 50px; /* Espacio inferior */
      width: 100%;
    }
    
    .link-text {
      color: #000000; /* Color blanco para el enlace */
      font-size: 1.4rem; /* Aumenté el tamaño para destacar */
      font-weight: bold;
      text-decoration: underline;
    }
    
    .link-text:hover {
      color: #204e47; /* Cambio de color al pasar el cursor */
    }
  
  </style>