<template>
  <v-app-bar app color="#8C90E7" dark>
    <v-toolbar-title>silly willy sil!</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/about" text>About</v-btn>
    <v-btn to="/portfolio" text>Portfolio</v-btn>
    <v-btn to="/commission" text>Commission</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavbarApp'
};
</script>