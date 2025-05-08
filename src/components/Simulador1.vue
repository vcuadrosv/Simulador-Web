<template>
  <div class="full-page">
    <img
      class="background-image"
      src="@/assets/fondo-b2.jpg"
    />
    <v-container class="border-white">
      <v-row align="center" class="row-c1">
        <v-col class="col1-color align-self-stretch">
          <h1 class="textc2 mb-8">
            Simulador 1
          </h1>
          <v-container class="[`elevation-${20}`]">
            <v-row align="center" justify="center" class="row-c1">
              <v-col sm="6">
                <form id="prediction-form" @submit.prevent="submit">
                  <h3 class="mb-4">Velocidad</h3>
                  <v-select
                    v-model="p.value.value"
                    :items="[0, 1, 2, 3]"
                    label="Presión"
                    outlined
                    dense
                    class="mb-4"
                    color="white"
                  />

                  <h3 class="mb-4">Presión</h3>
                  <v-select
                    v-model="v.value.value"
                    :items="filteredVelocities"
                    label="Velocidad"
                    outlined
                    dense
                    class="mb-4"
                    color="white"
                  />
                </form>
              </v-col>
            </v-row>

            <!-- Botón debajo del formulario -->
            <v-btn
              form="prediction-form"
              class="bordered-button"
              type="submit"
            >
              Simular
            </v-btn>
          </v-container>
        </v-col>

        <v-col class="col2-color">
          <h1 class="mb-8 textc2">Entorno de simulación</h1>
          <!-- iframe con recarga dinámica -->
          <iframe
            src="http://localhost:1234/"
            width="100%"
            height="85%"
            style="border: none"
          ></iframe>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useField } from 'vee-validate'

const p = useField('p')
const v = useField('v')

// Valores por defecto
v.value.value = 0
p.value.value = 0

// Computed que filtra opciones de velocidad según presión
const filteredVelocities = computed(() => {
  const pressure = p.value.value
  return pressure === 0 ? [0, 1, 2, 3] : [1, 2, 3]
})

// Función para ejecutar el backend con la carpeta del proyecto
const submit = async () => {
  const pressure = p.value.value
  const velocity = v.value.value

  console.log('Solicitud enviada con:', { pressure, velocity })

  try {
    await fetch('http://localhost:5001/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pressure, velocity })
    })

    console.log('Respuesta del backend recibida')

    // Esperar 10 segundos y recargar el iframe
    setTimeout(() => {
      const iframe = document.querySelector('iframe')
      if (iframe) {
        iframe.src = iframe.src
        console.log('Iframe recargado')
      }
    }, 10000)

  } catch (error) {
    console.error('❌ Error al contactar el backend:', error)
  }
}
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
    color: rgb(255, 255, 255);
    height: 80vh;
    border-radius: 8px;
    margin: 1%;
    justify-content: center;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 20%;
    position: relative;
  }

  .col2-color {
    background-color: #4d4b4b;
    color: rgb(255, 255, 255);
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
    color: rgb(255, 255, 255);
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

  .v-select input {
    color: white !important;
  }
  .v-label {
    color: #ffffff !important;
  }

</style>