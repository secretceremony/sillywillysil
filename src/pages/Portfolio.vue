<template>
  <div>
    <section class="bg-primary text-white text-center py-10 py-md-16">
      <v-container>
        <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">My Portfolio</h1>
        <p class="text-subtitle-1">A showcase of my digital art contributions and best pieces over the years.</p>
      </v-container>
    </section>

    <section class="bg-white py-10 py-md-16">
      <v-container>
        <h2 class="text-h4 font-weight-bold text-center mb-8">Zine Contributions Art</h2>

        <v-row justify="center">
          <v-col
            v-for="item in zineArt"
            :key="item.id"
            cols="12"
            md="10"
          >
            <v-card elevation="2" class="mb-8">
              <v-row no-gutters>
                <v-col cols="12" md="6">
                  <v-img
                    :src="item.image"
                    :alt="item.title"
                    aspect-ratio="1"
                    cover
                    class="fill-height cursor-pointer"
                    @click="openDialog(item)"
                  ></v-img>
                </v-col>
                <v-col cols="12" md="6">
                  <v-card-title>{{ item.title }}</v-card-title>
                  <v-card-subtitle v-if="item.zine">From: {{ item.zine }}</v-card-subtitle>
                  <v-card-text>
                    <p>{{ item.description }}</p>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="bg-surface py-10 py-md-16">
      <v-container>
        <h2 class="text-h4 font-weight-bold text-center mb-8">Best Artwork by Year</h2>

        <v-card elevation="2">
          <v-tabs
            v-model="activeYearTab"
            align-tabs="center"
            color="primary"
            grow
          >
            <v-tab
              v-for="year in sortedYears"
              :key="year"
              :value="year"
            >
              {{ year }}
            </v-tab>
          </v-tabs>

          <v-window v-model="activeYearTab">
            <v-window-item
              v-for="year in sortedYears"
              :key="year"
              :value="year"
            >
              <v-card flat>
                <v-card-text>
                  <v-carousel
                    v-if="yearlyArtwork[year] && yearlyArtwork[year].length > 0"
                    cycle
                    show-arrows="hover"
                    hide-delimiter-background
                    delimiter-icon="mdi-minus"
                    height="400"
                  >
                    <v-carousel-item
                      v-for="artwork in yearlyArtwork[year]"
                      :key="artwork.id"
                      :src="artwork.image"
                      :alt="artwork.title"
                      cover
                      class="cursor-pointer"
                      @click="openDialog(artwork)"
                    >
                       <div class="d-flex fill-height justify-center align-end pa-3 text-white" style="background: rgba(0, 0, 0, 0.3);">
                         <div class="text-center">
                            <h3 class="text-h6 font-weight-bold mb-1">{{ artwork.title }}</h3>
                            <p class="text-body-2">{{ artwork.description }}</p>
                         </div>
                       </div>
                    </v-carousel-item>
                  </v-carousel>
                   <p v-else class="text-center text-medium-emphasis py-8">No artwork available for {{ year }} yet.</p>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-card>
      </v-container>
    </section>

     <v-dialog
       v-model="dialogOpen"
       max-width="800"
     >
       <v-card>
         <v-card-title class="d-flex justify-space-between align-center">
           <span>{{ selectedImage ? selectedImage.title : 'Image Preview' }}</span>
           <v-btn icon @click="closeDialog">
             <v-icon>mdi-close</v-icon>
           </v-btn>
         </v-card-title>
         <v-card-text class="pa-0">
           <v-img
             v-if="selectedImage"
             :src="selectedImage.image"
             :alt="selectedImage.title"
             contain
             width="100%"
           ></v-img>
         </v-card-text>
         <v-card-actions v-if="selectedImage && selectedImage.description">
            <v-card-text class="text-body-2 text-medium-emphasis">
              {{ selectedImage.description }}
            </v-card-text>
         </v-card-actions>
       </v-card>
     </v-dialog>

     <section class="text-center py-10">
        <v-btn color="primary" to="/">Back to About Me</v-btn>
     </section>

  </div>
</template>

<script>
export default {
  name: 'PortfolioPage',
  data() {
    return {
      activeYearTab: null,
      dialogOpen: false,
      selectedImage: null, // Holds the data of the image clicked
      zineArt: [
        {
          id: 1,
          title: 'Void Space Zine Piece Title',
          image: 'https://via.placeholder.com/1200x900/0000FF/FFFFFF?text=Void+Zine+Art+1', // Increased size for modal preview
          description: 'This piece was created for the Void Space Zine, exploring the theme of quiet moments in vast, empty spaces. I focused on color gradients and a sense of solitude.',
          zine: 'VOID SPACE ZINE PROJECT'
        },
        {
          id: 2,
          title: 'Witch of Time Zine Art Title',
          image: 'https://via.placeholder.com/1200x900/FF0000/FFFFFF?text=Witch+Zine+Art+2', // Increased size for modal preview
          description: 'My contribution to the Witch of Time Zine, depicting the character in a moment of contemplation. I aimed for a moody atmosphere using strong shadows and highlights.',
          zine: 'WITCH OF TIME ZINE'
        },
         {
          id: 3,
          title: 'Homestuck Vol.10 Zine Piece',
          image: 'https://via.placeholder.com/1200x900/00FF00/000000?text=HS+Zine+Art+3', // Increased size for modal preview
          description: 'Inspired by the track "Creata" from the Homestuck Vol.10 OST, this piece visualizes the energetic and chaotic feeling of the music. It was a fun challenge to translate sound into visuals.',
          zine: 'Homestuck Vol.10 Fan Zine'
        },
        // Add more zine art objects here
      ],
      yearlyArtwork: {
        2025: [
           // Add artwork for 2025 here
           // Example: { id: 202501, title: 'Concept Work 2025', image: 'https://via.placeholder.com/1200x800/123456/FFFFFF?text=Artwork+2025-1', description: 'Latest concept work.' },
        ],
        2024: [
           { id: 202401, title: 'Digital Painting Study', image: 'https://via.placeholder.com/1200x800/FFFF00/000000?text=Artwork+2024-1', description: 'A recent study focusing on lighting and textures.' },
           { id: 202402, title: 'Character Concept Sketch', image: 'https://via.placeholder.com/1200x800/FF00FF/FFFFFF?text=Artwork+2024-2', description: 'Exploration for a new character design.' },
        ],
        2023: [
          { id: 202301, title: 'Illustration for a Friend', image: 'https://via.placeholder.com/1200x800/00FFFF/000000?text=Artwork+2023-1', description: 'A personal illustration completed last year.' },
          { id: 202302, title: 'UI Mockup Practice', image: 'https://via.placeholder.com/1200x800/FFA500/FFFFFF?text=UI+Mockup+2023-2', description: 'Working on user interface design principles.' },
        ],
         2022: [
          { id: 202201, title: 'Early Digital Art Experiment', image: 'https://via.placeholder.com/1200x800/800080/FFFFFF?text=Artwork+2022-1', description: 'One of my earlier attempts at digital painting.' },
        ],
         2021: [
           // Add artwork for 2021 here
           // Example: { id: 202101, title: 'Sketchbook Entry 2021', image: 'https://via.placeholder.com/1200x800/ABCDEF/000000?text=Artwork+2021-1', description: 'From my physical sketchbook, digitized.' },
        ],
         2020: [
           // Add artwork for 2020 here
            // Example: { id: 202001, title: 'First Digital Piece', image: 'https://via.placeholder.com/1200x800/FEDCBA/000000?text=Artwork+2020-1', description: 'This is where I started exploring digital art.' },
        ],
        // Add more years and artwork objects here if needed in the future
      }
    };
  },
  computed: {
    // Sorts the years in descending order for tabs
    sortedYears() {
       // Get all years, filter out any with no data if preferred, but the prompt
       // asks for 2020-2025, so we'll include all those keys if they exist.
       const years = Object.keys(this.yearlyArtwork);
       // You could filter like this if you only want tabs for years with content:
       // .filter(year => this.yearlyArtwork[year] && this.yearlyArtwork[year].length > 0)

      return years.sort((a, b) => b - a);
    }
  },
   mounted() {
    // Set the default active tab to the most recent year
    if (this.sortedYears.length > 0) {
      this.activeYearTab = this.sortedYears[0];
    }
  },
  methods: {
    openDialog(artwork) {
      this.selectedImage = artwork;
      this.dialogOpen = true;
    },
    closeDialog() {
      this.dialogOpen = false;
      this.selectedImage = null; // Clear selected image when closed
    }
  }
};
</script>

<style scoped>
/* Custom styles if needed */
.v-carousel-item .d-flex {
    background: rgba(0, 0, 0, 0.3); /* Dark overlay for text readability */
}

.cursor-pointer {
  cursor: pointer;
}
</style>