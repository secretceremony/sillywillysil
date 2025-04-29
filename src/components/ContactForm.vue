<template>
  <h2 class="text-h4 font-weight-bold text-center mb-6 contact-text">Contact Me!</h2>
  <v-container class="mt-10 contact-form" max-width="600">
    <v-form @submit.prevent="sendEmail" ref="form">
      <v-text-field
        v-model="form.name"
        label="Name"
        required
        outlined
        dense
        :rules="requiredRule" ></v-text-field>

      <v-text-field
        v-model="form.email"
        label="Email"
        type="email"
        required
        outlined
        dense
        :rules="emailRules" ></v-text-field>

      <v-text-field
        v-model="form.title"
        label="Message Title"
        required
        outlined
        dense
        :rules="requiredRule" ></v-text-field>

      <v-textarea
        v-model="form.message"
        label="Message"
        rows="4"
        required
        outlined
        :rules="requiredRule" ></v-textarea>

      <v-btn type="submit" class="mt-4" block color="#8C90E7">Send</v-btn>

      <v-alert
        v-if="error"
        type="error"
        class="mt-4"
      >
        Failed to send message.
      </v-alert>

      <v-alert
        v-if="success"
        type="success"
        class="mt-4"
      >
        Message sent successfully!
      </v-alert>
    </v-form>
  </v-container>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        title: '',
        message: ''
      },
      success: false,
      error: false,
      // Define validation rules
      requiredRule: [
        value => !!value || 'This field is required', // Rule for checking if the value is not empty
      ],
       emailRules: [
        value => !!value || 'Email is required',
        value => /.+@.+\..+/.test(value) || 'E-mail must be valid', // Basic email format check
      ],
    };
  },

  methods: {
    async sendEmail() { // Made method async to use await with validate()
      this.success = false;
      this.error = false;

      // Validate the form using Vuetify's validate method
      const { valid } = await this.$refs.form.validate(); // Use the ref 'form'

      if (!valid) {
        // If validation fails, the input fields will automatically show error messages.
        console.error('Form validation failed.');
        // No need to set a generic 'error' state just for validation failure,
        // as the field errors guide the user.
        return; // Stop the method execution if validation fails
      }

      // If validation passes, proceed with sending email
      emailjs
        .send(
          process.env.VUE_APP_EMAILJS_SERVICE_ID,
          process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
          this.form,
          process.env.VUE_APP_EMAILJS_USER_ID
        )
        .then(() => {
          this.success = true;
          this.resetForm();
        })
        .catch((err) => {
          this.error = true; // Set error state for failed sending
          console.error('Failed to send message:', err); // Log the actual error
        });
    },

    resetForm() {
      // Reset form data
      this.form = { name: '', email: '', title: '', message: '' };
      // Reset validation state and error messages on the form
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style scoped>
/* Using deep selectors to target Vuetify component internals */
/* The .contact-form class on the v-container provides a scope for these styles */

/* Styling for the background of outlined text fields and textarea */
.contact-form ::v-deep(.v-input__control) {
  background-color: #ffffff; /* Set background to white */
}

/* Styling for the border of outlined text fields and textarea */
.contact-form ::v-deep(.v-input--outlined fieldset) {
  border-color: #BAA7E6; /* Unfocused border color from the palette */
}

/* Styling for the label color */
.contact-form ::v-deep(.v-label) {
  color: rgba(0, 0, 0, 0.6); /* Default unfocused label color - adjust rgba value if a different shade is desired */
}

/* Styles for the focused state (border and label) */
.contact-form ::v-deep(.v-input--is-focused.v-input--outlined fieldset) {
  border-color: #8C90E7 !important; /* Focused border color from the palette */
}

.contact-form ::v-deep(.v-input--is-focused .v-label) {
  color: #8C90E7 !important; /* Focused label color from the palette */
}

/* Styling for the success alert */
.contact-form ::v-deep(.v-alert.v-alert--type-success) {
  background-color: #BAA7E6 !important; /* Success background from the palette */
  color: #000000 !important; /* Ensure text is readable on the light background */
}

/* Styling for the error alert */
.contact-form ::v-deep(.v-alert.v-alert--type-error) {
  background-color: #ECC9dc !important; /* Error background from the palette */
  color: #000000 !important; /* Ensure text is readable on the light background */
}

/* Apply text color from the palette */
.contact-text {
  color: #23254d;
}

/* Style for validation error messages */
.contact-form ::v-deep(.v-messages .v-messages__message) {
    color: #FF5252 !important; /* Default Vuetify error text color, or choose a color from your palette if preferred */
}
</style>