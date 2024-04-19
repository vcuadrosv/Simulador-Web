<template>
    <Bar :key="componentKey" ref="myChart" :data="data" :options="options" />
</template>

<script lang="ts">
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        BarElement,
        CategoryScale,
        LinearScale
    } from 'chart.js'
    import { Bar } from 'vue-chartjs'
    import * as chartConfig from './chartConfig.js'
    
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
    
    export default {
        props: { 
            chartData: {
                type: Array,
                required: true,
            },
        },
        data() {
            return chartConfig
        },
        watch: {
            chartData() {
                console.log('Lllega al watch');
                this.updateChartData(this.chartData);
            },
        },
        methods: {
            updateChartData(data) {
                console.log('Datos de predicción recibidos:', data);
                // Actualiza las etiquetas y valores del dataset con los nuevos datos
                this.data.datasets[0].data = data.map((item) => item.value); // Utiliza 'valor' en lugar de 'value'
                this.componentKey += 1;
            },
        },
        components: {
            Bar
        },
        updated() {
            console.log('Se actualizó el componente. Actualizando el gráfico.');
            this.updateChartData(this.chartData);
        }
    };
</script>
  