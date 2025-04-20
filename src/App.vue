<template>
  <v-app>
    <NavbarApp />
    <v-main>
      <router-view />
    </v-main>
    <FooterApp />
  </v-app>
</template>

<script>
import NavbarApp from './components/Navbar.vue';
import FooterApp from './components/Footer.vue';

export default {
  components: {
    NavbarApp,
    FooterApp,
  },
};
</script>