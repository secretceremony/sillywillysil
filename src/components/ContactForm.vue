<template>
    <v-container class="mt-10 contact-form" max-width="600">
      <v-form @submit.prevent="sendEmail" ref="formRef">
        <v-text-field
          v-model="form.name"
          label="Name"
          required
          outlined
          dense
        ></v-text-field>
  
        <v-text-field
          v-model="form.email"
          label="Email"
          type="email"
          required
          outlined
          dense
        ></v-text-field>
  
        <v-text-field
          v-model="form.title"
          label="Message Title"
          required
          outlined
          dense
        ></v-text-field>
  
        <v-textarea
          v-model="form.message"
          label="Message"
          rows="4"
          required
          outlined
        ></v-textarea>
  
        <v-btn type="submit" class="mt-4" block color="primary">Send</v-btn>
  
        <v-alert
          v-if="success"
          type="success"
          class="mt-4"
        >
          Message sent successfully!
        </v-alert>
  
        <v-alert
          v-if="error"
          type="error"
          class="mt-4"
        >
          Failed to send message.
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
        error: false
      };
    },
    methods: {
      sendEmail() {
        this.success = false;
        this.error = false;
  
        emailjs
          .send('sillywillysil', 'contactsil', this.form, 'Z22VEoCFMFfglpy-X')
          .then(() => {
            this.success = true;
            this.form = { name: '', email: '', title: '', message: '' };
            this.$refs.formRef.resetValidation();
          })
          .catch(() => {
            this.error = true;
          });
      }
    }
  };
  </script>