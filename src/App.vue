<template>
  <v-app>
    <v-container>
      <v-app-bar :elevation="15" color="#33691E" style="color: #F1F8E9;">
        <template v-slot:prepend>
          <v-app-bar-nav-icon id="menu-activator" aria-expanded="true"></v-app-bar-nav-icon>  
        </template>
        <v-menu activator="#menu-activator">
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index" @click="handleItemClick(item)">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      
        <v-app-bar-title align="center" justify="center">Predicción del Rendimiento de Cultivos</v-app-bar-title>
      
        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>
    </v-container>
    <v-main class="fixed-main">
      <router-view></router-view>
    </v-main>
    <v-footer class="d-flex flex-column fixed-footer" style="color: #F1F8E9; position: fixed; bottom: 0; left: 0; right: 0;">
      <div class=" border-0 fill-height fill-width d-flex justify-center align-center w-100" style="background-color: #33691E; color: #F1F8E9;">
        <strong>Contáctenos</strong>
      </div>
      <div class=" border-0 fill-height fill-width d-flex justify-center align-center w-100" style="background-color: #33691E; color: #F1F8E9;">
        <strong>intecse@udistrital.edu.co</strong>
      </div>
  
      <div class=" border-0 fill-height fill-width d-flex justify-center bg-black align-center w-100" style="color: #F1F8E9;">
        {{ new Date().getFullYear() }} — <strong> INTECSE</strong>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Home', route: '/'},
        { title: 'Módulo de predicción', route: '/maizpredict'},
        { title: 'Análisis del modelo', route: '/estadisticas'},
      ],
    }),
    methods: {
      handleItemClick(item) {
        // Redirecciona a la página correspondiente
        this.$router.push(item.route);
      },
    },
  }
</script>

<style>
.v-application {
  overflow: auto !important;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15px; /* Tamaño del footer */
  padding: 10px; /* Ajuste del padding */
  z-index: 1000; /* Asegura que el footer esté por encima del contenido */
}

.fixed-footer {
  height: 100px;

}

.fixed-main {
  height: calc(100vh - 150px); /* 150px es la suma del alto del app bar y el footer */
}

</style>
