<template>
    <v-container>
      <v-form>
        <v-text-field label="Name" required></v-text-field>
        <v-text-field label="Email" required type="email"></v-text-field>
        <v-textarea label="Message" rows="5" required></v-textarea>
        <v-btn color="primary" type="submit">Send</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script setup>
  </script>