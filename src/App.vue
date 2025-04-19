<template>
  <v-app>
    <NavbarApp />
    <router-view />
    <FooterApp />
  </v-app>
</template>

<script setup>
import NavbarApp from './components/NavbarApp.vue'
import FooterApp from './components/FooterApp.vue'
</script>