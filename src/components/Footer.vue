<template>
  <v-footer color="#edd9e2">
    <v-container class="text-center">
      <div class="mb-4 footer-text">
        Connect with my social medias!
      </div>

      <div class="mb-2">
        <v-btn icon size="small" class="mx-2" href="https://www.instagram.com/eclairvanna/" target="_blank" color="#8C90E7">
            <v-icon>mdi-instagram</v-icon>
        </v-btn>

        <v-btn icon size="small" class="mx-2" href="http://sxlveri.deviantart.com/" target="_blank" color="#8C90E7">
            <v-icon>mdi-deviantart</v-icon>
        </v-btn>

        <v-btn icon size="small" class="mx-2" href="https://sil-vxeri.tumblr.com/" target="_blank" color="#8C90E7">
            <v-icon>mdi-post</v-icon>
        </v-btn>

        <v-btn icon size="small" class="mx-2" href="http://toyhou.se/silvxeri/" target="_blank" color="#8C90E7">
             <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn icon size="small" class="mx-2" href="https://www.linkedin.com/in/ansselmaa/" target="_blank" color="#8C90E7">
            <v-icon>mdi-linkedin</v-icon>
        </v-btn>

        <v-btn icon size="small" class="mx-2" href="https://secretceremony.carrd.co/" target="_blank" color="#8C90E7">
            <v-icon>mdi-web</v-icon>
        </v-btn>

        <v-btn icon size="small" class="mx-2" href="https://artfight.net/~secretceremony" target="_blank" color="#8C90E7">
            <v-icon>mdi-palette</v-icon>
        </v-btn>

          <v-btn icon size="small" class="mx-2" href="https://github.com/secretceremony" target="_blank" color="#8C90E7">
              <v-icon>mdi-github</v-icon>
        </v-btn>
      </div>

      <div class="footer-text">
        Copyright &copy; <span id="currentYear"></span> secretceremony
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterApp',
  mounted() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
  }
};
</script>

<style scoped>
/* Apply text color from the palette */
.footer-text {
  color: #23254d;
}


</style>