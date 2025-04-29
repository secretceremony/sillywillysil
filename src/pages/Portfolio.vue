<template>
  <div>
    <section style="background-color: #8C90E7;" class="text-white text-center py-10 py-md-16">
      <v-container>
        <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">My Portfolio</h1>
        <p class="text-subtitle-1">A showcase of my digital art contributions and best pieces over the years.</p>
      </v-container>
    </section>

    <section class="bg-white py-10 py-md-16 dark-text">
      <v-container>
        <h2 class="text-h4 font-weight-bold text-center mb-8 dark-text">Zine Contributions Art</h2>

        <v-carousel
          v-if="zineArt && zineArt.length > 0"
          cycle
          show-arrows="hover"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="400"
          class="dark-text" >
          <v-carousel-item
            v-for="item in zineArt"
            :key="item.id"
            :src="item.thumbnail" :alt="item.title"
            cover
            class="cursor-pointer"
            @click="openDialog(item)" >
            <div class="d-flex fill-height justify-center align-end pa-3 text-white" style="background: rgba(0, 0, 0, 0.5);">
               <div class="text-center">
                <h3 class="text-h6 font-weight-bold mb-1">{{ item.title }}</h3>
                <p v-if="item.zine" class="text-body-2">{{ item.zine }}</p>
               </div>
            </div>
          </v-carousel-item>
        </v-carousel>
        <p v-else class="text-center text-medium-emphasis py-8">No zine contributions available yet.</p>

      </v-container>
    </section>


    <section style="background-color: #E9BFE3;" class="py-10 py-md-16 dark-text">
      <v-container>
        <h2 class="text-h4 font-weight-bold text-center mb-8 dark-text">Best Artwork by Year</h2>

        <v-card elevation="2">
          <v-tabs
            v-model="activeYearTab"
            align-tabs="center"
            color="#8C90E7"
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
                      :src="artwork.thumbnail" :alt="artwork.title"
                      cover
                      class="cursor-pointer"
                      @click="openDialog(artwork)" >

                        <div class="d-flex fill-height justify-center align-end pa-3 text-white" style="background: rgba(0, 0, 0, 0.3);">
                          <div class="text-center">
                            <h3 class="text-h6 font-weight-bold mb-1">{{ artwork.title }}</h3>
                            <p v-if="artwork.description" class="text-body-2">{{ artwork.description }}</p> </div>
                        </div>
                    </v-carousel-item>
                  </v-carousel>
                    <p v-else class="text-center text-medium-emphasis py-8">No artwork available for {{ year }} yet.</p> </v-card-text>
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
          <v-card-title class="d-flex justify-space-between align-center dark-text">
                <span>{{ selectedImage ? selectedImage.title : 'Image Preview' }}</span>
                <v-btn icon @click="closeDialog">
                  <v-icon color="dark-text">mdi-close</v-icon>
                </v-btn>
          </v-card-title>

          <v-card-text class="pa-0">
             <v-carousel
                v-if="selectedImage && selectedImage.images && selectedImage.images.length > 0"
                cycle
                :show-arrows="([1, 3].includes(selectedImage.id) ? 'hover' : false)"
                delimiter-icon="mdi-minus"
                height="500"
                v-model="modalCarouselIndex" > <v-carousel-item
                  v-for="img in selectedImage.images"
                  :key="img.id"
                  :src="img.src" :alt="(selectedImage.title || '') + ' - Image ' + img.id"
                  contain width="100%"
                >
                </v-carousel-item>
              </v-carousel>

              <v-img
                v-else-if="selectedImage && selectedImage.fullImage"
                :src="selectedImage.fullImage" :alt="selectedImage.title"
                contain width="100%"
              ></v-img>

              <p v-else class="text-center text-medium-emphasis py-8">Image preview not available.</p>

          </v-card-text>

          <v-card-actions>
             <v-card-text class="text-body-2 text-medium-emphasis">
              <div class="text-center">
                <h3 class="text-h6 font-weight-bold mb-1">{{ selectedImage ? selectedImage.title : '' }}</h3>

                <p v-if="selectedImage && selectedImage.images && selectedImage.images[modalCarouselIndex]">
                   {{ selectedImage.images[modalCarouselIndex].description }}
                </p>
                <p v-else-if="selectedImage && selectedImage.description">
                   {{ selectedImage.description }}
                </p>

              </div>
             </v-card-text>
          </v-card-actions>

         </v-card>
     </v-dialog>

      <section class="text-center py-10 dark-text" style="background-color: #ffffff;"> <v-btn color="#8C90E7" to="/">Back to About Me</v-btn>
      </section>

  </div>
</template>

<script>
export default {
  name: 'PortfolioPage',
  data() {
    return {
      activeYearTab: null,
      dialogOpen: false, // State for the modal
      selectedImage: null, // Holds the data of the item clicked (either a zine project or a yearly artwork)
      modalCarouselIndex: 0, // Added to track the active slide in the modal carousel

      // Updated Zine Art data structure for carousel in modal
      zineArt: [
        {
          id: 1,
          title: 'Void Space Zine Project Contribution', // Title for the overall project
          zine: 'VOID SPACE ZINE PROJECT', // Zine name (Used for carousel item, not modal description)
          thumbnail: './zine/z1.gif', // Thumbnail for the main carousel
            // Array of images for the modal carousel - each has a description
          images: [
            { id: 101, src: './zine/CelKayRai_School_Days.png', description: 'Collaboration between Me, Cel and Kay. We drew a "what-if" school AU, where we the members of Void Space engage various activites in the school hallway!' },
            { id: 102, src: './zine/RaiCel_Hectic_Match.png', description: 'Collaboration between Me and Cel, a crossover and self-insert of IDV and TF2.' },
            { id: 103, src: './zine/RaiShou_Senra.png', description: 'Collaboration between Me and Shou where we drew our OCTP together.' },
            { id: 104, src: './zine/Tetragonodeeznutz_yaoi.png', description: 'Collaboration between Me, Kay, Qani and Andra where our sona are together pinching each others cheeks.' },
            { id: 105, src: './zine/Rai_Busy_Classroom.png', description: 'A freebie drawn by me, similar to the first piece where I depict a school AU of Void Space in a classroom, base used.' },
          ]
        },
          {
          id: 2,
          title: 'Witch of Time Zine Contribution',
          zine: 'WITCH OF TIME ZINE', // Used for carousel item, not modal description
          thumbnail: './zine/z2.png', // Thumbnail for the main carousel
          images: [ // Images for the modal carousel
            { id: 201, src: './zine/Damara_Zine.png', description: 'Primary artwork for the Witch of Time Zine. Moody atmosphere.' },
          ]
        },
        {
          id: 3,
          title: 'Homestuck Vol.10 Zine Contribution',
          zine: 'Homestuck Vol.10 Fan Zine', // Used for carousel item, not modal description
          thumbnail: './zine/z3.gif', // Thumbnail for the main carousel
          images: [ // Images for the modal carousel
            { id: 301, src: './zine/01_Creata_Sil.png', description: 'Contribution piece for the Homestuck Vol.10 Fan Zine, inspired by "Creata".' },
              { id: 302, src: './zine/22_Thanks_For_Playing_Sil.png', description: 'An alternative version or related sketch for the zine.' },
          ]
        },
        {
          id: 4,
          title: 'Bloodswap Zine Contribution',
          zine: 'Bloodswap Zine', // Used for carousel item, not modal description
          thumbnail: './zine/z4.png', // Thumbnail for the main carousel
          images: [ // Images for the modal carousel
            { id: 301, src: './zine/Bloodswap_Zine.png', description: 'Contribution piece for the Homestuck Vol.10 Fan Zine, inspired by "Creata".' }
           ]
        },
      ],

      // Updated Yearly Artwork data structure with thumbnails and full images
      yearlyArtwork: {
        2025: [
            // Add artwork for 2025 here with 'thumbnail' and 'fullImage'
            // Example: { id: 202501, title: 'Concept Work 2025', thumbnail: '...', fullImage: '...', description: 'Latest concept work.' },
        ],
        2024: [
            { id: 202401, title: 'Digital Painting Study', thumbnail: 'https://via.placeholder.com/600x400/FFFF00/000000?text=Artwork+2024-1+Thumb', fullImage: 'https://via.placeholder.com/1200x800/FFFF00/000000?text=Artwork+2024-1+Full', description: 'A recent study focusing on lighting and textures.' },
            { id: 202402, title: 'Character Concept Sketch', thumbnail: 'https://via.placeholder.com/600x400/FF00FF/FFFFFF?text=Artwork+2024-2+Thumb', fullImage: 'https://via.placeholder.com/1200x800/FF00FF/FFFFFF?text=Artwork+2024-2+Full', description: 'Exploration for a new character design.' },
        ],
        2023: [
          { id: 202301, title: 'Illustration for a Friend', thumbnail: 'https://via.placeholder.com/600x400/00FFFF/000000?text=Artwork+2023-1+Thumb', fullImage: 'https://via.placeholder.com/1200x800/00FFFF/000000?text=Artwork+2023-1+Full', description: 'A personal illustration completed last year.' },
          { id: 202302, title: 'UI Mockup Practice', thumbnail: 'https://via.placeholder.com/600x400/FFA500/FFFFFF?text=UI+Mockup+2023-2+Thumb', fullImage: 'https://via.placeholder.com/1200x800/FFA500/FFFFFF?text=UI+Mockup+2023-2+Full', description: 'Working on user interface design principles.' },
        ],
          2022: [
           { id: 202201, title: 'Early Digital Art Experiment', thumbnail: 'https://via.placeholder.com/600x400/800080/FFFFFF?text=Artwork+2022-1+Thumb', fullImage: 'https://via.placeholder.com/1200x800/800080/FFFFFF?text=Artwork+2022-1+Full', description: 'One of my earlier attempts at digital painting.' },
         ],
          2021: [
            // Add artwork for 2021 here with 'thumbnail' and 'fullImage'
            // Example: { id: 202101, title: 'Sketchbook Entry 2021', thumbnail: '...', fullImage: '...', description: 'From my physical sketchbook, digitized.' },
          ],
          2020: [
             // Add artwork for 2020 here with 'thumbnail' and 'fullImage'
              // Example: { id: 202001, title: 'First Digital Piece', thumbnail: '...', fullImage: '...', description: 'This is where I started exploring digital art.' },
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
    // openDialog is used for modal previews for both Zine Art and Yearly Artwork
    openDialog(item) {
      this.selectedImage = item;
      this.modalCarouselIndex = 0; // Reset modal carousel to the first slide
      this.dialogOpen = true; // Control the modal's open state
    },
    // closeDialog closes the modal
    closeDialog() {
      this.dialogOpen = false;
      this.selectedImage = null; // Clear selected item when closed
      this.modalCarouselIndex = 0; // Reset index on close
    }
  }
};
</script>

<style scoped>
/* Custom styles if needed */

.cursor-pointer {
  cursor: pointer;
}

/* Apply the chosen dark color (#23254d) to text elements in sections with light backgrounds */
.dark-text {
    color: #23254d; /* Use the requested very dark purple */
}

/* Adjust card text padding for cards with images */
.v-card .v-card-text {
    padding-top: 0 !important;
}

/* Adjustments for v-img within cards if title/subtitle padding is affecting it */
.v-card .v-card-title,
.v-card .v-card-subtitle {
    padding-bottom: 8px; /* Reduce default padding below title/subtitle */
}

/* Style for lists */
.v-card-text ul {
    list-style: disc;
    padding-left: 20px; /* Add some padding for the list bullets */
}

/* Adjust padding for list items if needed */
.v-card-text ul li {
  margin-bottom: 8px; /* Add space between list items */
}

/* Styles for the carousel item overlay text */
.v-carousel-item .d-flex {
      background: rgba(0, 0, 0, 0.5); /* Dark overlay for text readability */
}
/* Styles for the carousel inside the modal item overlay text */
/* Use a more specific selector if needed, but this might be sufficient */
.v-dialog .v-carousel-item .d-flex {
    background: rgba(0, 0, 0, 0.3); /* Slightly lighter overlay in modal carousel */
}


/* Override text color for elements where default text-medium-emphasis might be too light on the new dark-text color */
/* This might be needed depending on the exact shade of text-medium-emphasis and #23254d */
/* You can uncomment and adjust this rule if the text-medium-emphasis paragraphs are too light */
/*
.dark-text .text-medium-emphasis {
  color: #23254d !important; // Ensure it uses the main dark text color
  opacity: 1 !important; // Remove opacity if desired
}
*/
</style>