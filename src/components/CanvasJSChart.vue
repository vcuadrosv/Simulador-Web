<template>
  <div :style="styleOptions">
    <div ref="chartContainer"></div>
  </div>
</template>

<script>
  import * as CanvasJS from '@canvasjs/charts';

  export default {
    props: {
      chartData: Array,
      styleOptions: Object,
      chartTitle: String,
      chartTitle2: String,
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        const options = {
          animationEnabled: true,
          theme: "light2",
          backgroundColor: "#F1F8E9",
          dataPointMaxWidth: 30,
          title: {
            text: this.chartTitle,
            fontSize: 20,
            margin: 20,
            padding: 15,
          },
          axisY: {
            title: this.chartTitle2,
            includeZero: true,
            margin: 15,
            gridThickness: 1,
          },
          axisX: {
            margin: 15,
            gridThickness: 0,
          },
          legend: {
            cursor: "pointer",
            itemclick: this.toggleDataSeries,
          },
          toolTip: {
            shared: true,
            content: this.toolTipFormatter,
          },
          data: this.chartData
        };
        const chart = new CanvasJS.Chart(this.$refs.chartContainer, options);
        chart.render();
      },
      toolTipFormatter(e) {
        var content = "";
        var percentageDifference = (e.entries[0].dataPoint.y - e.entries[1].dataPoint.y) / e.entries[1].dataPoint.y;
        content += "<strong>" + e.entries[0].dataPoint.label + "</strong>";
        content += " (<span style=\"color: " + (percentageDifference >= 0 ? "green \"> ↑ " : "red\"> ↓ ") + CanvasJS.formatNumber(Math.abs(percentageDifference), "#0.##%") + "</span>)<br/>";
        for (var i = 0; i < e.entries.length; i++) {
          content += "<span style= \"color:" + e.entries[i].dataSeries.color + "\">" + e.entries[i].dataSeries.name + "</span>: <strong>" + e.entries[i].dataPoint.y + "</strong> <br/>";
        }
        return content;
      },
      toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        } else {
          e.dataSeries.visible = true;
        }
        chart.render();
      }
    }
  };
</script>

<style>
.canvasjs-chart-container {
  width: 800px !important; /* Ancho fijo */
  height: 400px !important; /* Alto fijo */
}
</style>