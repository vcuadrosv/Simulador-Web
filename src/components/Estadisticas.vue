<template>
  <div class="full-page">
    <img
      class="background-image"
      src="@/assets/fondo_1.jpg"
    />
    <v-container class="border-white">
      <v-row align="center" justify="center" class="row-c1">
        <v-col class="col2-color" align="center" justify="center" style="margin-bottom: 5%;">
          <h1 class="mb-8 textc2">
            Análisis del modelo
          </h1>
          <div class="chart-container" v-if="chartDataListLoaded" align="center" justify="center">
            <div class="chart-grid" align="center" justify="center">
              <CanvasJSChart v-for="(chartData, index) in chartDataList" :key="index"
                             :chartData="chartData.chartData"
                             :styleOptions="chartData.chartStyleOptions"
                             :chartTitle="chartData.chartTitle"
                             :chartTitle2="chartData.chartTitle2" />
            </div>
          </div>
          <div v-else>
            Cargando gráficas...
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
  
<script setup>
  import { ref, onMounted } from 'vue';
  import env from '../environment/env';
  import CanvasJSChart from './CanvasJSChart.vue';
  const apiUrl2 = `${env.backUrl}/model/metricas`;
  const chartDataListLoaded = ref(false); // Agrega esta línea

  onMounted(async () => {
    try {
      // Realizar la solicitud para obtener los datos de ChartDataList
      const response = await fetch(apiUrl2);
      if (!response.ok) {
        throw new Error('Error al obtener los datos de ChartDataList.');
      }
      const data = await response.json();
      const metrics = ['train', 'test'];
      const models = ['DNN', 'CNN', 'CNN_DNN'];
      const metricsNames = ['rmse', 'mae', 'r2'];

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 2; j++) {
          for (let k = 0; k < 3; k++) {
            const metricValue = data.metrics[models[k]][metrics[j]][metricsNames[i]];
            chartDataList.value[i].chartData[j].dataPoints[k].y = metricValue;
          }
        }
      }
      chartDataListLoaded.value = true;
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  });

  // Definir los datos para los gráficos
  const chartDataList = ref([
    {
      chartData: [
        {
          type: 'bar',
          showInLegend: true,
          name: 'Entrenamiento',
          color: '#2F4F4F',
          dataPoints: [
            { y: 0, label: 'DNN' },
            { y: 0, label: 'CNN' },
            { y: 0, label: 'CNN-DNN' },
          ],
        },
        {
          type: 'bar',
          showInLegend: true,
          name: 'Validación',
          color: '#90EE90',
          dataPoints: [
            { y: 0, label: 'DNN' },
            { y: 0, label: 'CNN' },
            { y: 0, label: 'CNN-DNN' },
          ],
        },
      ],
      chartStyleOptions: {
        width: '700px',
        marginTop: '40px', // Margen superior
        marginBottom: '40px', // Margen inferior
        marginLeft: '50px',
        marginRight: '50px',
      },
      chartTitle: 'Comparación de RMSE en Entrenamiento y Validación',
      chartTitle2: 'RMSE',
    },
    {
      chartData: [
        {
          type: 'bar',
          showInLegend: true,
          name: 'Entrenamiento',
          color: '#2F4F4F',
          dataPoints: [
            { y: 0, label: 'DNN' },
            { y: 0, label: 'CNN' },
            { y: 0, label: 'CNN-DNN' },
          ],
        },
        {
          type: 'bar',
          showInLegend: true,
          name: 'Validación',
          color: '#90EE90',
          dataPoints: [
            { y: 0, label: 'DNN' },
            { y: 0, label: 'CNN' },
            { y: 0, label: 'CNN-DNN' },
          ],
        },
      ],
      chartStyleOptions: {
        width: '700px',
        marginTop: '40px', // Margen superior
        marginBottom: '40px', // Margen inferior
        marginLeft: '50px',
        marginRight: '50px',
      },
      chartTitle: 'Comparación de MAE en Entrenamiento y Validación',
      chartTitle2: 'MAE',
    },
    {
      chartData: [
        {
          type: 'bar',
          showInLegend: true,
          name: 'Entrenamiento',
          color: '#2F4F4F',
          dataPoints: [
            { y: 0, label: 'DNN' },
            { y: 0, label: 'CNN' },
            { y: 0, label: 'CNN-DNN' },
          ],
        },
        {
          type: 'bar',
          showInLegend: true,
          name: 'Validación',
          color: '#90EE90',
          dataPoints: [
            { y: 0, label: 'DNN' },
            { y: 0, label: 'CNN' },
            { y: 0, label: 'CNN-DNN' },
          ],
        },
      ],
      chartStyleOptions: {
        width: '700px',
        marginTop: '40px', // Margen superior
        marginBottom: '40px', // Margen inferior
        marginLeft: '50px',
        marginRight: '50px',
      },
      chartTitle: 'Comparación de R2 en Entrenamiento y Validación',
      chartTitle2: 'R2',
    },
  ]);
</script>
  
<style scoped>
  .border-white {
    width: 100%; /* Tamaño fijo que ocupa todo el ancho */
    height: 100%; /* Tamaño fijo que ocupa todo el ancho */
  }

  .full-page {
    position: absolute;
    width: 100%;
    height: 115%;
    overflow-wrap: break-word;
  }

  .background-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    opacity: 0.10; /* Define la opacidad de la imagen de fondo */
  }

  .col1-color {
    background-color: #F1F8E9;
    color: black;
    height: 100%;
    border-radius: 8px;
    padding: 1%;
    margin: 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .col2-color {
    background-color: #4d4b4b;
    height: 100%;
    padding: 1%;
    border-radius: 8px;
    margin: 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .row-c1 {
    height: auto; /* Tamaño fijo que ocupa todo el ancho */
  }
  .css-text {
    color: rgb(0, 0, 0);
  }
  .col-res {
    height: 100%;
    width: 100%;
  }
  .highlighted-column{
    border-radius: 10px; /* Ajusta el radio de los bordes según lo necesites */
    padding: 10px; /* Ajusta el espacio interno según lo necesites */
    background-color: #C5E1A5; /* Cambia 'yellow' al color que desees */
    width: 100%; /* Ocupar todo el ancho disponible */
    height: 100%; /* Ajustar automáticamente la altura */
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .bordered-button {
    margin-top: 3%; /* Ajusta el margen superior según sea necesario */
    margin-bottom: 2%; /* Ajusta el margen inferior según sea necesario */
    margin-left: 12%;
    border-radius: 10px;
    background-color:#33691E;
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
    justify-content: center;
    align-items: center; /* Ajustado a flex-start para permitir el desplazamiento vertical */
    flex-wrap: wrap; /* Permite el salto de línea cuando no quepan las gráficas */
    height: auto; /* Ajustado a auto para que se ajuste al contenido */
    width: 100%;
    margin-bottom: 20px; /* Ajusta el margen inferior */
  }

  .chart-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(700px, 1fr)); 
    grid-gap: 50px;
    justify-items: center;
    align-items: center;
    width: 100%;
    padding: 50px;
  }

  .textc2{
    color: #F1F8E9;
    margin-top: 80px;
  }

</style>