<template>
  <v-footer color="primary">
    <v-container class="text-center">
      <div class="mb-4">
        Connect with my social medias!
      </div>

      <div class="mb-2">
        <v-btn icon size="small" class="mx-2" href="https://www.instagram.com/eclairvanna/" target="_blank">
            <v-icon>mdi-instagram</v-icon>
        </v-btn>

        <v-btn icon size="small" class="mx-2" href="http://sxlveri.deviantart.com/" target="_blank">
            <v-icon>mdi-deviantart</v-icon>
        </v-btn>
        
        <v-btn icon size="small" class="mx-2" href="https://sil-vxeri.tumblr.com/" target="_blank">
            <v-icon>mdi-post</v-icon>
        </v-btn>

        <v-btn icon size="small" class="mx-2" href="http://toyhou.se/silvxeri/" target="_blank">
             <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn icon size="small" class="mx-2" href="https://www.linkedin.com/in/ansselmaa/" target="_blank">
            <v-icon>mdi-linkedin</v-icon>
        </v-btn>

        <v-btn icon size="small" class="mx-2" href="https://secretceremony.carrd.co/" target="_blank">
            <v-icon>mdi-web</v-icon>
        </v-btn>

        <v-btn icon size="small" class="mx-2" href="https://artfight.net/~secretceremony" target="_blank">
            <v-icon>mdi-palette</v-icon>
        </v-btn>

         <v-btn icon size="small" class="mx-2" href="https://github.com/secretceremony" target="_blank">
             <v-icon>mdi-github</v-icon>
        </v-btn>
      </div>

      <div>
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