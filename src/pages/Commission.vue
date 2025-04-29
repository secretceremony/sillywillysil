<template>
  <div>
    <section style="background-color: #8C90E7;" class="text-white text-center py-10 py-md-16">
      <v-container>
        <h1 class="text-h3 text-md-h2 font-weight-bold mb-4">Commissions</h1>
        <p class="text-subtitle-1">Interested in commissioning a piece from me? Find information about my services here.</p>
      </v-container>
    </section>

    <section style="background-color: #E9BFE3;" class="py-10 py-md-16 dark-text">
      <v-container>
           <h2 class="text-h4 font-weight-bold text-center mb-8">Terms</h2>
           <v-card elevation="2"> <v-tabs
               v-model="activeTermTab"
               align-tabs="center"
               color="#8C90E7" grow
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

      <section class="bg-white py-10 py-md-16 dark-text">
         <v-container>
             <h2 class="text-h4 font-weight-bold text-center mb-8">Will & Won't Draw</h2>
             <v-row justify="center">
                 <v-col cols="12" md="6">
                     <v-card elevation="2" class="fill-height"> <v-card-title class="text-h6 font-weight-semibold" style="color: #BAA7E6;">
                             <v-icon left color="#BAA7E6">mdi-check-circle-outline</v-icon>
                             Will Draw
                         </v-card-title>
                          <v-card-text> <ul>
                                 <li class="mb-2">Humanoids / Anthro / Feral (Depending on commission type).</li>
                                 <li class="mb-2">Original Characters (OCs) and Franchise Characters.</li>
                                 <li class="mb-2">Complex Designs.</li>
                                 <li>OC x OC or OC x Canon pairings.</li>
                             </ul>
                          </v-card-text>
                     </v-card>
                 </v-col>
                   <v-col cols="12" md="6">
                      <v-card elevation="2" class="fill-height"> <v-card-title class="text-h6 font-weight-semibold" style="color: #ECC9dc;">
                              <v-icon left color="#ECC9dc">mdi-close-circle-outline</v-icon>
                              Won't Draw
                          </v-card-title>
                          <v-card-text> <ul>
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
        <h2 class="text-h4 font-weight-bold text-center mb-8 dark-text">Commission Types</h2>

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
            > <v-img
                  v-if="type.image"
                  :src="type.image"
                  :alt="type.title"
                  aspect-ratio="1.5"
                  cover
               ></v-img>
              <v-card-title class="dark-text">{{ type.title }}</v-card-title> <v-card-text class="flex-grow-1 dark-text"> <p>{{ type.shortDescription }}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="#8C90E7">Learn More</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-dialog
      v-model="typeDetailsDialogOpen"
      max-width="600"
    > <v-card> <v-card-title class="d-flex justify-space-between align-center"> <span>{{ selectedCommissionTypeDetails ? selectedCommissionTypeDetails.title : 'Commission Details' }}</span>
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

          <p class="text-body-1 font-weight-semibold mb-2">Description:</p> <p class="text-body-2 text-medium-emphasis">{{ selectedCommissionTypeDetails.details.fullDescription }}</p> <p class="text-body-1 font-weight-semibold mt-4 mb-2">Starting Price:</p> <p class="text-body-2 text-medium-emphasis">{{ selectedCommissionTypeDetails.details.basePrice }}</p> <p class="text-body-1 font-weight-semibold mt-4 mb-2">What's Included:</p> <ul class="text-body-2 text-medium-emphasis"> <li v-for="(item, i) in selectedCommissionTypeDetails.details.includes" :key="'include-item-' + i">{{ item }}</li>
            </ul>

            <p class="text-body-1 font-weight-semibold mt-4 mb-2">Order Form Details:</p> <ul v-if="selectedCommissionTypeDetails.details.orderForm && selectedCommissionTypeDetails.details.orderForm.length > 0" class="text-body-2 text-medium-emphasis"> <li v-for="(item, i) in selectedCommissionTypeDetails.details.orderForm" :key="'order-item-' + i">{{ item }}</li>
            </ul>
            <p v-else class="text-body-2 text-medium-emphasis">Order form details not available for this type.</p> </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#8C90E7" text @click="closeTypeDetailsDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <section style="background-color: #E9BFE3;" class="py-10 py-md-16 dark-text">
      <v-container>
        <h2 class="text-h4 font-weight-bold text-center mb-8">Commission Examples</h2>
        <v-card elevation="2"> <v-tabs
             v-model="activeGalleryTab"
             align-tabs="center"
             color="#8C90E7" grow
           >
              <v-tab
              v-for="(images, type) in galleryImages"
              :key="type"
              :value="type"
            >
              {{ type }} </v-tab>
           </v-tabs>

            <v-window v-model="activeGalleryTab">
               <v-window-item
                v-for="(images, type) in galleryImages"
                :key="type"
                :value="type"
               >
                <v-card flat> <v-card-text>
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
                       <p v-else class="text-center text-medium-emphasis py-8">No examples available for this type yet.</p> </v-card-text>
                   </v-card>
                 </v-window-item>
            </v-window>
          </v-card>
      </v-container>
    </section>

      <v-dialog
        v-model="galleryImageDialogOpen"
        max-width="800"
      > <v-card> <v-card-title class="d-flex justify-space-between align-center"> <span>{{ selectedGalleryImage ? selectedGalleryImage.title : 'Example Preview' }}</span>
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
             <v-card-text class="text-body-2 text-medium-emphasis"> {{ selectedGalleryImage.description }}
             </v-card-text>
           </v-card-actions>
         </v-card>
       </v-dialog>


    <section class="bg-white py-10 py-md-16">
      <v-container>
        <h2 class="text-h4 font-weight-bold text-center mb-8 dark-text">How to Order</h2> <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="text-body-1 text-center text-medium-emphasis mb-6"> If you're interested in commissioning me, please fill out the form below with details about your request.
              Make sure you've read the Terms of Service and Terms of Use above.
              You can also contact me directly via discord (secretceremony) or email (ibelongtothestar@gmail.com).
            </p>
              <ContactForm />
           </v-col>
        </v-row>
      </v-container>
    </section>

      <section class="text-center py-10 dark-text" style="background-color: #ffffff;"> <v-btn color="#8C90E7" to="/">Back to About Me</v-btn>
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
          id: 1, // Re-indexed ID
          title: 'Mini Icon',
          image: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/28423233?1725495158', // Placeholder image (replace with actual)
          shortDescription: 'Small chibi icon commission.',
          details: {
            fullDescription: 'I am offering Mini Icon art of any character you desire! The size is 500 x 500 pixels with 350 DPI. By default, it will have a transparent background, but I can include a background if desired (color/gradient or pride flag is OK).',
            basePrice: '$3.00 for USD, Rp7.000 for IDR and 300pts for DA Points.',
            includes: ['High-resolution digital file (PNG)', 'Simple or transparent background', 'Up to 3 revisions'],
            // Added Order Form details for Mini Icon
            orderForm: [
                'Character: (Link/Ref)',
                'Expression: (Describe it or include an image if necessary)',
                'Design Note: (Any specific details to consider while drawing the character)',
                '(Opt) Background: Color/Gradient/Pride Flag (leave it blank if transparent)',
                'Contact via: Discord/Toyhouse/Email'
            ]
          }
        },
        {
          id: 2, // Re-indexed ID
          title: 'PWYW Sketch',
          image: 'https://f2.toyhou.se/file/f2-toyhou-se/characters/31895343?1740916021', // Placeholder image (replace with actual)
          shortDescription: 'Pay What You Want minimal colored sketch commission.',
          details: {
            fullDescription: 'I am offering a PWYW (Pay What You Want) Sketch Commission! There is no minimum amount, but please pay what you think is fair. I offer a minimal colored sketch of any character you desire. By default, I use dark blue for sketching, but you are free to request any other color if desired!',
            basePrice: 'min $1.00 for USD, Rp5.000 for IDR and 100pts for DA Points.',
            includes: ['High-resolution digital file (PNG)', 'Simple or transparent background', 'Up to 3 revisions'],
             // Added Order Form details for PWYW Sketch
            orderForm: [
                'Character: (Link/Ref)',
                'Prompt: (Ideas like pose and/or expression, optional but preferred)',
                'Design Note: (Any specific details to consider while drawing the character)',
                'Lineart Color: (Optional, leave blank otherwise)',
                'Contact via: Discord/Toyhouse/Email',
            ]
          }
        },
      ],
      galleryImages: {
        'Mini Icon': [
          { id: 101, image: 'https://f2.toyhou.se/file/f2-toyhou-se/images/96635855_TxoAVb7hLgsrj4m.png?1740972590', title: 'Mini Icon Example #1', description: 'Clients sona with Kavehs accessories' },
          { id: 102, image: 'https://f2.toyhou.se/file/f2-toyhou-se/images/96635948_RcthxomzTr22ago.png', title: 'Mini Icon Example #2', description: 'Matching Clients OC (1/2) #1.' },
          { id: 103, image: 'https://f2.toyhou.se/file/f2-toyhou-se/images/96635990_Y1BE1r1MdyoO5ec.png?1740972740', title: 'Mini Icon Example #3', description: 'Matching Clients OC (2/2) #1.' },
          { id: 104, image: 'https://f2.toyhou.se/file/f2-toyhou-se/images/96636017_Eqwm1RKKynP0Btk.png', title: 'Mini Icon Example #4', description: 'Fandom Character (I forgot her source.. will update later haha).' },
          { id: 105, image: 'https://f2.toyhou.se/file/f2-toyhou-se/images/96636036_7OlamPnfU5JDFlv.png', title: 'Mini Icon Example #5', description: 'Clients OC.' },
          { id: 106, image: 'https://f2.toyhou.se/file/f2-toyhou-se/images/96636053_dXPKDwzsuFRKE0k.png', title: 'Mini Icon Example #6', description: 'Clients RL childself.' },
          { id: 107, image: 'https://f2.toyhou.se/file/f2-toyhou-se/images/96636075_a5R3CEm3ztlDEUe.png', title: 'Mini Icon Example #7', description: 'Matching Clients OC (1/2) #2.' },
          { id: 108, image: 'https://f2.toyhou.se/file/f2-toyhou-se/images/96636116_0EHgSgoiqgfziT8.png', title: 'Mini Icon Example #8', description: 'Matching Clients OC (1/2) #2.' },
          { id: 109, image: 'https://f2.toyhou.se/file/f2-toyhou-se/images/96635906_mRPk76RYsaGLEwi.png?1740972641', title: 'Mini Icon Example #9', description: 'Conan Edogawa from Detective Conan/Case Closed.' }

        ],
        'PWYW Sketch': [
           { id: 201, image: 'https://f2.toyhou.se/file/f2-toyhou-se/watermarks/96635751_fZyVRXUUi.png', title: 'PWYW Result #1', description: 'Marius x Vyn (from Tears of Themis) with their fanchild.' },
           { id: 202, image: 'https://f2.toyhou.se/file/f2-toyhou-se/images/96635722_k1OvxC3rDQdXCNg.png', title: 'PWYW Result #2', description: 'Vyn x Artem (from Tears of Themis) cuddling.' },
           { id: 203, image: 'https://f2.toyhou.se/file/f2-toyhou-se/watermarks/96635685_2yt5iiF68.png', title: 'PWYW Result #3', description: 'Marius x Vyn (from Tears of Themis) sleeping together.' },
           { id: 204, image: 'https://f2.toyhou.se/file/f2-toyhou-se/watermarks/96635639_5K901TAgM.png?1740972298', title: 'PWYW Result #4', description: 'Vyn x Luke (from Tears of Themis) kissing.' },
           { id: 205, image: 'https://f2.toyhou.se/file/f2-toyhou-se/watermarks/96634677_mnSf8CPwG.png?1740972234', title: 'PWYW Result #5', description: 'WLW OC kissing.' },
          ],
      }
    };
  },
   mounted() {
    // Set the default active gallery tab to the first type with images
    // This logic will now work correctly with the updated galleryImages structure
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
/* Apply dark-text color to lists within dark-text sections */
.dark-text ul {
    list-style: disc;
    padding-left: 20px; /* Add some padding for the list bullets */
    color: inherit; /* Ensure lists in dark-text sections inherit the dark-text color */
}

/* Ensure list items within the dialog's v-card-text use default styling or inherit appropriately */
/* The .text-medium-emphasis class will apply opacity */
.v-dialog .v-card-text ul {
     list-style: disc;
     padding-left: 20px;
     color: inherit; /* Inherit dialog's default text color (usually black) */
}


/* Adjust padding for list items if needed */
.v-card-text ul li {
  margin-bottom: 8px; /* Add space between list items */
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