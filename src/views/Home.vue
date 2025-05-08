<template>
  <div class="background">
    <router-link to="/simulador1" class="simple-button">
      Simulador
    </router-link>
  </div>
</template>

<style scoped>
/* Fondo del espacio profundo */
.background {
  position: fixed;
  inset: 0;
  background: url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzB1amJlMnZyZXNzcDZkNHFnM2pkdWJucDdpMDlpb2duaWgwMzA0ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KZFrf9JusXzmpnPsT6/giphy.gif') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.simple-button {
  font-family: 'Orbitron', sans-serif;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #fff;
  background-color: #204e47;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 60px;
  border-radius: 15px;
  border: 3px solid #c4e9e4;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  box-shadow: none;
}

/* Hover: efecto leve */
.simple-button:hover {
  background-color: #2c6f64;
  box-shadow: 0 0 20px #dcebe9;
  border-color: #ffffff;
}
</style>