<template>
  <div>
    <section class="bg-primary text-white text-center py-10 py-md-16">
      <v-container>
        <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">Commissions</h1>
        <p class="text-subtitle-1">Interested in commissioning a piece from me? Find information about my services here.</p>
      </v-container>
    </section>

    <section class="bg-surface py-10 py-md-16">
      <v-container>
         <h2 class="text-h4 font-weight-bold text-center mb-8">Terms</h2>
         <v-card elevation="2">
            <v-tabs
              v-model="activeTermTab"
              align-tabs="center"
              color="primary"
              grow
            >
              <v-tab value="tos">Terms of Service (TOS)</v-tab>
              <v-tab value="tou">Terms of Use (TOU)</v-tab>
            </v-tabs>

            <v-window v-model="activeTermTab">
               <v-window-item value="tos">
                 <TOS />
               </v-window-item>
               <v-window-item value="tou">
                 <TOU />
               </v-window-item>
            </v-window>
         </v-card>
      </v-container>
    </section>

     <section class="bg-white py-10 py-md-16">
        <v-container>
            <h2 class="text-h4 font-weight-bold text-center mb-8">Will & Won't Draw</h2>
            <v-row justify="center">
                <v-col cols="12" md="6">
                    <v-card elevation="2" class="fill-height">
                       <v-card-title class="text-h6 font-weight-semibold text-success">
                           <v-icon left color="success">mdi-check-circle-outline</v-icon>
                           Will Draw
                        </v-card-title>
                        <v-card-text>
                           <ul>
                               <li class="mb-2">Humanoids / Anthro / Feral (Depending on commission type).</li>
                               <li class="mb-2">Original Characters (OCs) and Franchise Characters.</li>
                               <li class="mb-2">Complex Designs.</li>
                               <li>OC x OC or OC x Canon pairings.</li>
                           </ul>
                        </v-card-text>
                    </v-card>
                </v-col>
                 <v-col cols="12" md="6">
                    <v-card elevation="2" class="fill-height">
                        <v-card-title class="text-h6 font-weight-semibold text-error">
                            <v-icon left color="error">mdi-close-circle-outline</v-icon>
                            Won't Draw
                        </v-card-title>
                        <v-card-text>
                           <ul>
                               <li class="mb-2">Mecha.</li>
                               <li class="mb-2">AI designs/characters.</li>
                               <li class="mb-2">NSFW (Fetish/Kink/etc).</li>
                               <li class="mb-2">Gore (No extreme violence. Minor blood is okay).</li>
                               <li>Art promoting hate, discrimination, or offensive content.</li>
                           </ul>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
     </section>


    <section class="bg-white py-10 py-md-16">
      <v-container>
        <h2 class="text-h4 font-weight-bold text-center mb-8">Commission Types</h2>

        <v-row justify="center">
          <v-col
            v-for="type in commissionTypesOverview"
            :key="type.id"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card
              elevation="2"
              class="fill-height d-flex flex-column cursor-pointer"
              @click="openTypeDetailsDialog(type)"
            >
               <v-img
                  v-if="type.image"
                  :src="type.image"
                  :alt="type.title"
                  aspect-ratio="1.5"
                  cover
               ></v-img>
              <v-card-title>{{ type.title }}</v-card-title>
              <v-card-text class="flex-grow-1">
                 <p>{{ type.shortDescription }}</p>
              </v-card-text>
              <v-card-actions>
                 <v-btn text color="primary">Learn More</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-dialog
      v-model="typeDetailsDialogOpen"
      max-width="600"
    >
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <span>{{ selectedCommissionTypeDetails ? selectedCommissionTypeDetails.title : 'Commission Details' }}</span>
          <v-btn icon @click="closeTypeDetailsDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text v-if="selectedCommissionTypeDetails">
          <v-img
             v-if="selectedCommissionTypeDetails.image"
             :src="selectedCommissionTypeDetails.image"
             :alt="selectedCommissionTypeDetails.title"
             aspect-ratio="1.5"
             contain
             class="mb-4"
          ></v-img>
          <p class="text-body-1 font-weight-semibold mb-2">Description:</p>
          <p class="text-body-2 text-medium-emphasis">{{ selectedCommissionTypeDetails.details.fullDescription }}</p>

          <p class="text-body-1 font-weight-semibold mt-4 mb-2">Starting Price:</p>
          <p class="text-body-2 text-medium-emphasis">{{ selectedCommissionTypeDetails.details.basePrice }}</p>

           <p class="text-body-1 font-weight-semibold mt-4 mb-2">What's Included:</p>
           <ul class="text-body-2 text-medium-emphasis">
             <li v-for="(item, i) in selectedCommissionTypeDetails.details.includes" :key="i">{{ item }}</li>
           </ul>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="closeTypeDetailsDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <section class="bg-surface py-10 py-md-16">
      <v-container>
        <h2 class="text-h4 font-weight-bold text-center mb-8">Commission Examples</h2>

        <v-card elevation="2">
           <v-tabs
            v-model="activeGalleryTab"
            align-tabs="center"
            color="primary"
            grow
          >
             <v-tab
              v-for="(images, type) in galleryImages"
              :key="type"
              :value="type"
            >
              {{ type }}
            </v-tab>
          </v-tabs>

          <v-window v-model="activeGalleryTab">
             <v-window-item
              v-for="(images, type) in galleryImages"
              :key="type"
              :value="type"
            >
               <v-card flat>
                  <v-card-text>
                     <v-row v-if="images && images.length > 0">
                       <v-col
                          v-for="image in images"
                          :key="image.id"
                          cols="6"
                          sm="4"
                          md="3"
                       >
                          <v-img
                             :src="image.image"
                             :alt="image.title"
                             aspect-ratio="1"
                             cover
                             class="cursor-pointer"
                             @click="openGalleryImageDialog(image)"
                          ></v-img>
                       </v-col>
                     </v-row>
                     <p v-else class="text-center text-medium-emphasis py-8">No examples available for this type yet.</p>
                  </v-card-text>
               </v-card>
            </v-window-item>
          </v-window>
        </v-card>
      </v-container>
    </section>

     <v-dialog
       v-model="galleryImageDialogOpen"
       max-width="800"
     >
       <v-card>
         <v-card-title class="d-flex justify-space-between align-center">
           <span>{{ selectedGalleryImage ? selectedGalleryImage.title : 'Example Preview' }}</span>
           <v-btn icon @click="closeGalleryImageDialog">
             <v-icon>mdi-close</v-icon>
           </v-btn>
         </v-card-title>
         <v-card-text class="pa-0">
           <v-img
             v-if="selectedGalleryImage"
             :src="selectedGalleryImage.image"
             :alt="selectedGalleryImage.title"
             contain
             width="100%"
           ></v-img>
         </v-card-text>
          <v-card-actions v-if="selectedGalleryImage && selectedGalleryImage.description">
            <v-card-text class="text-body-2 text-medium-emphasis">
              {{ selectedGalleryImage.description }}
            </v-card-text>
         </v-card-actions>
       </v-card>
     </v-dialog>


    <section class="bg-white py-10 py-md-16">
      <v-container>
        <h2 class="text-h4 font-weight-bold text-center mb-8">How to Order</h2>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="text-body-1 text-center text-medium-emphasis mb-6">
              If you're interested in commissioning me, please fill out the form below with details about your request.
              Make sure you've read the Terms of Service and Terms of Use above.
              You can also contact me directly via **[Your Preferred Contact Method/Platform, e.g., email@example.com]**.
            </p>
             <ContactForm />
          </v-col>
        </v-row>
      </v-container>
    </section>

     <section class="text-center py-10">
        <v-btn color="primary" to="/">Back to About Me</v-btn>
     </section>

  </div>
</template>

<script>
import TOS from '../components/TOS.vue';
import TOU from '../components/TOU.vue';
import ContactForm from '../components/ContactForm.vue';

export default {
  name: 'CommissionPage',
  components: {
    TOS,
    TOU,
    ContactForm,
  },
  data() {
    return {
      activeTermTab: 'tos', // Default active tab for Terms
      activeGalleryTab: null, // Default active tab for Gallery
      typeDetailsDialogOpen: false,
      selectedCommissionTypeDetails: null,
      galleryImageDialogOpen: false,
      selectedGalleryImage: null,
      commissionTypesOverview: [
        {
          id: 1,
          title: 'Bust Illustration',
          image: 'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Bust+Example', // Placeholder image for card
          shortDescription: 'Shoulder-up character artwork.',
          details: {
            fullDescription: 'Detailed illustration focusing on the head and shoulders of a character, with simple or transparent background. Perfect for profile pictures or icons.',
            basePrice: 'Starts at [Your Base Price, e.g., $50 USD / Rp 750.000]',
            includes: ['High-resolution digital file (PNG)', 'Simple or transparent background', 'Up to 3 revisions during sketch phase'],
            // Add more details here like extra character cost, complex background cost, etc.
          }
        },
         {
          id: 2,
          title: 'Full Body Artwork',
          image: 'https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Full+Body+Example', // Placeholder image for card
          shortDescription: 'Complete character illustration from head to toe.',
          details: {
            fullDescription: 'Illustration of a character\'s full body, with optional simple background. Suitable for character references, full illustrations, or design showcases.',
            basePrice: 'Starts at [Your Base Price, e.g., $100 USD / Rp 1.500.000]',
             includes: ['High-resolution digital file (PNG)', 'Simple or transparent background', 'Up to 3 revisions during sketch phase'],
            // Add more details here
          }
        },
         {
          id: 3,
          title: 'Emotes/Icons',
          image: 'https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Emote+Example', // Placeholder image for card
          shortDescription: 'Small, expressive icons for streaming or chat.',
          details: {
            fullDescription: 'Set of small, stylized images perfect for Twitch, Discord, or other platforms. Designed for clarity at small sizes. Price is usually per emote or per pack.',
            basePrice: 'Starts at [Your Base Price, e.g., $20 USD each / Rp 300.000 each]',
             includes: ['Digital files in multiple sizes (e.g., 28x28, 56x56, 112x112 px)', 'Simple expression', 'Transparent background'],
            // Add more details here
          }
        },
        // Add more commission types here following the same structure
        // Example: Reference Sheet, Character Design, etc.
      ],
      galleryImages: {
        'Bust Illustration': [
          { id: 101, image: 'https://via.placeholder.com/800x800/FF5733/CCCCCC?text=Bust+Gallery+1', title: 'Bust Example 1', description: 'A sample bust commission showing X.' },
          { id: 102, image: 'https://via.placeholder.com/800x800/FF5733/AAAAAA?text=Bust+Gallery+2', title: 'Bust Example 2', description: 'Another example of a bust with Y style.' },
           // Add more bust examples
        ],
        'Full Body Artwork': [
           { id: 201, image: 'https://via.placeholder.com/800x800/33FF57/CCCCCC?text=Full+Body+Gallery+1', title: 'Full Body Example 1', description: 'Sample full body artwork with Z background.' },
           { id: 202, image: 'https://via.placeholder.com/800x800/33FF57/AAAAAA?text=Full+Body+Gallery+2', title: 'Full Body Example 2', description: 'Another full body piece demonstrating W pose.' },
          // Add more full body examples
        ],
         'Emotes/Icons': [
           { id: 301, image: 'https://via.placeholder.com/800x800/3357FF/CCCCCC?text=Emote+Gallery+1', title: 'Emote Example 1', description: 'An example emote: happy.' },
           { id: 302, image: 'https://via.placeholder.com/800x800/3357FF/AAAAAA?text=Emote+Gallery+2', title: 'Emote Example 2', description: 'Another emote example: sad.' },
          // Add more emote examples
        ],
        // Add galleries for other commission types, make sure keys match commissionTypesOverview titles
      }
    };
  },
   mounted() {
    // Set the default active gallery tab to the first type with images
    const firstTypeWithImages = Object.keys(this.galleryImages).find(key => this.galleryImages[key] && this.galleryImages[key].length > 0);
    if (firstTypeWithImages) {
      this.activeGalleryTab = firstTypeWithImages;
    } else {
       // If no images are available for any type, default to the first key anyway
       this.activeGalleryTab = Object.keys(this.galleryImages)[0] || null;
    }
  },
  methods: {
    openTypeDetailsDialog(type) {
      this.selectedCommissionTypeDetails = type;
      this.typeDetailsDialogOpen = true;
    },
    closeTypeDetailsDialog() {
      this.typeDetailsDialogOpen = false;
      this.selectedCommissionTypeDetails = null;
    },
    openGalleryImageDialog(image) {
      this.selectedGalleryImage = image;
      this.galleryImageDialogOpen = true;
    },
    closeGalleryImageDialog() {
      this.galleryImageDialogOpen = false;
      this.selectedGalleryImage = null;
    }
  }
};
</script>

<style scoped>
/* Add specific styles for CommissionPage if needed */
.cursor-pointer {
  cursor: pointer;
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

/* Style for Will/Won't Draw lists */
.v-card-text ul {
    list-style: disc;
}
</style>