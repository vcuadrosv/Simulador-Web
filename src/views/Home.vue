<template>
  <div class="full-page">
    <img
      class="background-image"
      src="@/assets/fondo_1.jpg"
    />
    <div align="center" class="tittle_h1">
      <h1>
        Módulo de predicción
      </h1>
      <v-row class="center-column">
        <v-col cols="6" align="center">
          <v-card
            class="py-4"
            color="white"
            rounded="lg"
            variant="outlined"
          >
            <div class="text-subtitle-1">
              <p>El modelo predictivo desarrollado es una herramienta basada en Deep Neural Networks (DNN) diseñada para estimar con alta precisión el rendimiento de los cultivos utilizando un conjunto de variables climáticas clave. Este modelo, implementado en un software con interfaz amigable para el usuario, permite a los agricultores tomar decisiones informadas sobre la gestión de cultivos y recursos, facilitando la planificación anticipada y la optimización de operaciones agrícolas en un contexto donde las condiciones climáticas tienen un impacto significativo en la producción agrícola.</p>
            </div>
    
            <v-overlay
              opacity=".02"
              scrim="primary"
              contained
              model-value
              persistent
            />
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-card
      class="mx-auto card-class"
      max-width="900"
    >
      <v-img
        height="200px"
        src="@/assets/maiz_2.jpg"
        cover
      ></v-img>

      <v-card-title>
        Cultivos de Maíz
      </v-card-title>
      <v-divider class="mx-4 mb-1"></v-divider>

      <v-card-title>Factores climáticos influyentes</v-card-title>

      <div class="px-4">
        <v-chip-group v-model="selection">
          <v-chip>Brillo Solar</v-chip>

          <v-chip>Precipitación</v-chip>

          <v-chip>Presión de vapor</v-chip>

          <v-chip>Temperatura Máxima</v-chip>

          <v-chip>Temperatura Mínima</v-chip>
        </v-chip-group>
      </div>
      <v-card-actions class="actions">
        <router-link to="/maizpredict">
          <v-btn
            class="me-2 text-none"
            color="#4f545c"
            prepend-icon="mdi-arrow-right-drop-circle"
            variant="flat"
          >
            Explorar
        </v-btn>
        </router-link>

        <v-spacer></v-spacer>

        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text class="text-subtitle-2">
            El maíz es uno de los cultivos más importantes en Colombia, no solo por su significativa contribución a la seguridad alimentaria, sino también por su relevancia económica y cultural. Su versatilidad lo convierte en un elemento clave en la dieta de muchas personas y en un componente fundamental en la cadena de producción agrícola. La capacidad del modelo predictivo para estimar con precisión el rendimiento del maíz, representa un avance significativo en la agricultura moderna. Este modelo ofrece a los agricultores una herramienta invaluable para tomar decisiones informadas y optimizar sus operaciones agrícolas en función de las condiciones climáticas.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    })
  }
</script>

<style scoped>

  .full-page {
    position: absolute;
    width: 100%;
    height: 115%;
    overflow-wrap: break-word;
    overflow: auto;
  }

  .background-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    opacity: 0.3; /* Define la opacidad de la imagen de fondo */
  }

  .card-class {
    margin-bottom: 5%;
  }

  .tittle_h1 {
    align-items: center;
    margin-bottom: 20px;
  }

  .description {
    background-color: yellow;
    padding: 10px;
    margin-bottom: 20px;
  }

  .center-column {
    display: flex;
    justify-content: center;
    margin: 1%;
  }

  .text-subtitle-1 p {
    max-width: 100%;
    text-align: justify;
    padding: 3%;
  }

  .text-subtitle-2 {
    text-align: justify;
    padding: 3%;
  }

  .actions {
    padding-left: 2%;
    margin-top: 2%;
  }
</style>
