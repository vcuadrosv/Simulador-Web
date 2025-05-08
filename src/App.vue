<template>
  <v-app>
    <v-layout>
      <v-app-bar height="120" style="position: fixed; top: 0; left: 0; right: 0; z-index: 1001;">
        <!-- Contenedor para el fondo de la imagen -->
        <div class="header-background"></div>
        <!-- Botones con condicionales para cada ruta -->
        <template v-slot:append>
          <v-btn
            v-if="$route.path === '/'"
            class="animated-btn"
            @click="$router.push('/instrucciones')"
          >
            Instrucciones
          </v-btn>

          <v-btn
            v-if="$route.path === '/simulador1'"
            class="animated-btn"
            @click="$router.push('/')"
          >
            Inicio
          </v-btn>

          <v-btn
            v-if="$route.path === '/simulador1'"
            class="animated-btn"
            @click="$router.push('/instrucciones')"
          >
            Instrucciones
          </v-btn>

          <v-btn
            v-if="$route.path === '/instrucciones'"
            class="animated-btn"
            @click="$router.push('/')"
          >
            Inicio
          </v-btn>

          <v-btn
            v-if="$route.path === '/instrucciones'"
            class="animated-btn"
            @click="$router.push('/simulador1')"
          >
            Simulación
          </v-btn>
        </template>
      </v-app-bar>
    </v-layout>

    <v-main class="fixed-main">
      <router-view />
    </v-main>

    <v-footer
      class="animated-footer"
      dark
      padless
      style="position: fixed; bottom: 0; left: 0; right: 0; z-index: 1000;"
    >
      <v-container class="py-1">
        <v-row justify="center" align="center">
          <v-col cols="12" class="text-center">
            <div><strong style="font-size: 13px;">Contáctenos</strong></div>
            <div style="font-size: 12px;">vcuadrosv@udistrital.edu.co</div>
            <div><strong style="font-size: 12px;">Especialización en Ingeniería de Software</strong></div>
            <div style="font-size: 11px;">&copy; {{ new Date().getFullYear() }}</div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  // No se necesita JS adicional aquí
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

/* Header con imagen de fondo */
.space-app-bar {
  position: relative;
  background-color: transparent; /* Asegura que el fondo no sobrescriba la imagen */
  color: white;
  height: 120px;
  display: flex;
  align-items: center;
  padding: 0 16px;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background-image: url('@/assets/h-2.jpg'); /* ← Aquí colocas la imagen */
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color:#204e47;
  z-index: 0;
}


/* Botón animado */
.animated-btn {
  background-color: white !important; /* Color de fondo blanco */
  border: 2px solid #000000 !important; /* Borde azul */
  color: #000000 !important; /* Texto azul */
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
  padding: 20px 20px; /* Aumento del padding superior/inferior */
  height: 100px; /* Aumento de altura fijo */
  line-height: 1.5; /* Ajuste de la altura de la línea */
  transition: all 0.3s ease;
  box-shadow: 0 0 40px rgba(0, 234, 255, 0.3);
  margin-right: 50px; /* Mueve el botón 30px hacia la izquierda */
}

.animated-btn:hover {
  background-color: #2f3735 !important; /* Color de fondo negro al pasar el mouse */
  color: rgb(255, 255, 255) !important; /* Texto blanco */
  box-shadow: 0 0 20px #2f3735, 0 0 100px #2f3735;
  border: 2px solid #2f3735 !important; /* Borde azul */
}

/* Ajuste del layout principal */
.fixed-main {
  padding-top: 130px; /* espacio para el header */
  padding-bottom: 130px; /* espacio para el footer */
  position: relative;
  z-index: 0;
}
</style>