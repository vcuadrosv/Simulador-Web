export const data = {
  labels: [
      'DNN',
      'CNN',
      'CNN - DNN'
  ],
  datasets: [
    {
      label: 'Rendimiento t/ha',
      backgroundColor: ['#E0F2F1', '#B2DFDB', '#80CBC4'], // Colores distintos para cada barra
      data: [0, 0, 0]
    }
  ]
}

export const options = {
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        usePointStyle: true,
        generateLabels: function(chart) {
          const customLabels = [
            {
              text: 'Precisión',
              fillStyle: '#A7FFEB', // Fondo transparente
              fontStyle: 'bold',
              padding: 10, // Espaciado interno
              fontColor: 'white',
            },
            {
              text: '1. DNN: 95.3%',
              fillStyle: '#A7FFEB', // Fondo con color y opacidad
              padding: 10, // Espaciado interno
              textAlign: 'left',
              lineBreak: true, // Permitir salto de línea
              pointStyle: 'rectRot',
              fontColor: 'white',
            },
            {
              text: '2. CNN: 87%',
              fillStyle: '#A7FFEB', // Fondo con color y opacidad
              padding: 10, // Espaciado interno
              textAlign: 'left',
              lineBreak: true, // Permitir salto de línea
              pointStyle: 'rectRot',
              fontColor: 'white',
            },
            {
              text: '3. CNN-DNN: 85%\n',
              fillStyle: '#A7FFEB', // Fondo con color y opacidad
              padding: 10, // Espaciado interno
              textAlign: 'left',
              pointStyle: 'rectRot',
              fontColor: 'white',
            }
          ];

          return customLabels;
        }
      }
    }
  },
  scales: {
    x: {
      grid: {
        color: '#909090' // Cambiar color de la regilla en el eje x
      },
      ticks: {
        color: 'white' // Cambiar color de las etiquetas del eje x
      }
    },
    y: {
      grid: {
        color: '#909090' // Cambiar color de la regilla en el eje y
      },
      ticks: {
        color: 'white' // Cambiar color de las etiquetas del eje y
      }
    }
  },
};