<template>
    <v-container class="border-white">
      <v-row align="center" class="row-c1">
        <v-col class="col1-color align-self-stretch">
          <h1 class="mb-8">
            Módulo de Predicción
          </h1>
          <v-container class="['border-white', `elevation-${20}`]">
            <v-row align="center" justify="center" class="row-c1">
              <v-col sm="6">
                <form id="prediction-form" @submit.prevent="submit">
                  <h3 class="mb-4">
                    Brillo Solar (Horas/Sol)
                  </h3>
                  <v-slider
                    v-model="bshg.value.value"
                    min="0"
                    max="1"
                    step="0.001"
                    thumb-label
                    color="#33691E"
                    track-color="#33691E"
                    thumb-color="#33691E" 
                  ></v-slider>
                  <h3 class="mb-4">
                    Precipitación (mm)
                  </h3>
                  <v-slider
                    v-model="p.value.value"
                    min="0"
                    max="50"
                    step="0.001"
                    thumb-label
                    color="#33691E"
                    track-color="#33691E"
                    thumb-color="#33691E" 
                  ></v-slider>
                  <h3 class="mb-4">
                    Temperatura Mínima (°C)
                  </h3>
                  <v-slider
                    v-model="tmin.value.value"
                    min="0"
                    max="40"
                    step="0.001"
                    thumb-label
                    color="#33691E"
                    track-color="#33691E"
                    thumb-color="#33691E" 
                  ></v-slider>
                  <h3 class="mb-4">
                    Temperatura Máxima (°C)
                  </h3>
                  <v-slider
                    v-model="tmax.value.value"
                    min="0"
                    max="40"
                    step="0.001"
                    thumb-label
                    color="#33691E"
                    track-color="#33691E"
                    thumb-color="#33691E" 
                  ></v-slider>
                  <h3 class="mb-4">
                    Presión de Vapor (hPa)
                  </h3>
                  <v-slider
                    v-model="pv.value.value"
                    min="0"
                    max="40"
                    step="0.001"
                    thumb-label
                    color="#33691E"
                    track-color="#33691E"
                    thumb-color="#33691E"
                  ></v-slider>
                </form>
              </v-col>
              <v-col sm="6" class="highlighted-column">
                <h2 class="mb-4 center-title">
                  Predicción
                </h2>
                <br>
                <h3 class="mb-4 center-title">
                  Rendimiento del Cultivo de Maíz (t/ha)
                </h3>
                <v-text class="css-text" v-if="predictionResultDNN !== null">
                  <span class="label">DNN:</span>
                  <b>{{ predictionResultDNN }}</b>
                </v-text>
                <br>
                <v-text class="css-text" v-if="predictionResultCNN !== null">
                  <span class="label">CNN:</span>
                  <b>{{ predictionResultCNN }}</b>
                </v-text>
                <br>
                <v-text class="css-text" v-if="predictionResultCNN_DNN !== null">
                  <span class="label">CNN - DNN:</span>
                  <b>{{ predictionResultCNN_DNN }}</b>
                </v-text>
              </v-col>
              <br>
              <v-btn form="prediction-form" class="bordered-button" type="submit">
                Calcular Predicción
              </v-btn>
            </v-row>
          </v-container>
        </v-col>
        <v-col lg="6" class="col2-color align-self-stretch">
          <h1 class="mb-8 textc2">
            Análisis del modelo
          </h1>
          <BarChart width="850px" height="550px"
            :chartData="chartData"
          />
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script setup>
  import { ref, onMounted} from 'vue';
  import { useField, useForm } from 'vee-validate'
  import BarChart from './BarChart'
  import env from '../environment/env';
  const apiUrl = `${env.backUrl}/model/prediccion`;
  const {handleSubmit} = useForm();
  const bshg = useField('bshg');
  const p = useField('p');
  const tmin = useField('tmin');
  const tmax = useField('tmax');
  const pv = useField('pv');
  const predictionResultDNN = ref(null);
  const predictionResultCNN = ref(null);
  const predictionResultCNN_DNN = ref(null);
  const updateChartData = ref(null);
  const chartData = ref(null);

  // Establecer los valores iniciales
  bshg.value.value = 0;
  p.value.value = 0;
  tmin.value.value = 0;
  tmax.value.value = 0;
  pv.value.value = 0;

  onMounted(() => {
    updateChartData.value = (data) => {
      // ... (tu lógica para actualizar el gráfico) ...
      console.log('Actualizando el gráfico con datos: ', data);
    };
  });


  const submit = handleSubmit(async (values) => {
    console.log('Submit button clicked');
    try {
      const requestBody = {
        BSHG: parseFloat(values.bshg),
        P: parseFloat(values.p),
        TMin: parseFloat(values.tmin),
        TMax: parseFloat(values.tmax),
        PV: parseFloat(values.pv)
      };

      // Realizar solicitud para DNN
      requestBody.Type = "dnn";
      const responseDNN = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Accept': '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Connection': 'keep-alive'
        },
        body: JSON.stringify(requestBody), 
      });
      if (!responseDNN.ok) {
        throw new Error('Error al enviar los datos para DNN.');
      }
      const dataDNN = await responseDNN.json(); 
      console.log('Respuesta de la API (DNN):', dataDNN);
      predictionResultDNN.value = dataDNN.prediction;

      // Realizar solicitud para CNN
      requestBody.Type = "cnn";
      const responseCNN = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Accept': '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Connection': 'keep-alive'
        },
        body: JSON.stringify(requestBody), 
      });
      if (!responseCNN.ok) {
        throw new Error('Error al enviar los datos para CNN.');
      }
      const dataCNN = await responseCNN.json(); 
      console.log('Respuesta de la API (CNN):', dataCNN);
      predictionResultCNN.value = dataCNN.prediction;

      // Realizar solicitud para DNN-CNN
      requestBody.Type = "dnn-cnn";
      const responseDNN_CNN = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Accept': '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          'Connection': 'keep-alive'
        },
        body: JSON.stringify(requestBody), 
      });
      if (!responseDNN_CNN.ok) {
        throw new Error('Error al enviar los datos para DNN-CNN.');
      }
      const dataDNN_CNN = await responseDNN_CNN.json(); 
      console.log('Respuesta de la API (DNN-CNN):', dataDNN_CNN);
      predictionResultCNN_DNN.value = dataDNN_CNN.prediction;
      
      if (predictionResultDNN.value || predictionResultCNN.value || predictionResultCNN_DNN.value) {
        chartData.value = [
            { etiqueta: 'predictionResultDNN', value: predictionResultDNN.value },
            { etiqueta: 'predictionResultCNN', value: predictionResultCNN.value },
            { etiqueta: 'predictionResultCNN_DNN', value: predictionResultCNN_DNN.value },
        ];
        console.log("que pasa: ",chartData.value);
        updateChartData.value(chartData);
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  });
</script>

<script>
  // Asegúrate de que la exportación del componente esté fuera del script setup
  export default {
    name: 'MaizPredict',
    components: { BarChart }
  }
</script>
  
<style scoped>

  /*.border-white {
    width: 100%; 
    height: auto; 
  }*/

  .row-c1 {
    height: auto;
    display: flex;
    align-content: flex-start;
    align-items: flex-start;
  }

  .col1-color {
    background-color: #F1F8E9;
    color: black;
    height: auto;
    border-radius: 8px;
    /*padding: auto;*/
    margin: 1%;
    /*display: flex;*/
    /*flex-direction: column;*/
    justify-content: center;
    justify-items: center;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .col2-color {
    background-color: #4d4b4b;
    color: black;
    height: auto;
    border-radius: 8px;
    /*padding: auto;*/
    margin: 1%;
    /*display: flex;*/
    /*flex-direction: column;*/
    justify-content: center;
    text-align: center;
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
    padding: 10px; /* Ajusta el espacio interno según lo necesites */
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
    background-color:#33691E;
    align-self: center;
  }
  .label {
    background-color: #33691E; /* Cambia 'yellow' al color que desees */
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
  .chart-container {
    display: flex;
    justify-content: center; /* Centrar horizontalmente */
    align-items: center; /* Centrar verticalmente */
    height: 100%; /* Ajustar la altura para centrar verticalmente */
  }

  .chart-scroll {
    overflow-y: auto; /* Habilitar el desplazamiento vertical si el contenido es demasiado grande */
    max-height: 70vh; /* Limitar la altura máxima para evitar que se extienda más allá del viewport */
  }
  .textc2{
    color: #F1F8E9;
    margin-top: 0px;
    align-items: center;
    align-content: flex-start;
  }

</style>