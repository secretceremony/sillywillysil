<template>
    <v-card flat>
      <v-card-text>
        <h3 class="text-h6 mb-4">Terms of Service (TOS)</h3>
        <p>Here are my terms regarding commission work:</p>
  
        <h4>General Terms:</h4>
        <ul>
          <li class="mb-2">All prices are in [Your Currency, e.g., USD, IDR].</li>
          <li class="mb-2">Payments are processed via [Payment Methods, e.g., PayPal, Bank Transfer].</li>
          <li class="mb-2">A [Percentage, e.g., 50%] upfront payment is required before I start working. The remaining [Percentage] is due upon completion before delivery of the final file.</li>
          <li class="mb-2">I reserve the right to decline any commission request for any reason.</li>
          <li class="mb-2">Clear communication is essential. Please provide detailed references and descriptions.</li>
          <li>Turnaround time varies depending on the complexity and my current workload. I will provide an estimated timeframe.</li>
        </ul>
  
         <h4 class="mt-4">Revisions:</h4>
         <ul>
           <li class="mb-2">[Number, e.g., 3] rounds of minor revisions are included during the sketch phase.</li>
           <li class="mb-2">Major changes after the sketch is approved may incur additional fees.</li>
           <li>No major changes are allowed after the line art or coloring phase begins.</li>
         </ul>
  
         <h4 class="mt-4">Cancellation & Refunds:</h4>
         <ul>
           <li class="mb-2">If I cancel the commission due to unforeseen circumstances, you will receive a full refund.</li>
           <li class="mb-2">If you cancel the commission after work has started:
             <ul>
               <li class="mb-2">If only the sketch is complete, you will be refunded [Percentage, e.g., 50%].</li>
               <li>If line art or coloring has begun, no refund will be issued.</li>
             </ul>
           </li>
           <li>Chargebacks are not permitted. Any chargebacks will result in blacklisting and potential legal action.</li>
         </ul>
  
         <h4 class="mt-4">Copyright & Usage:</h4>
         <ul>
           <li class="mb-2">I retain all rights to the commissioned artwork, including the right to display it in my portfolio and social media.</li>
           <li class="mb-2">The client is granted rights for **personal use only** unless a commercial license is agreed upon.</li>
           <li class="mb-2">Personal use includes displaying the artwork on personal profiles, printing for personal use, etc.</li>
           <li class="mb-2">**Do not edit, alter, or claim the artwork as your own.**</li>
           <li>For commercial use inquiries (e.g., merchandise, publications, promotional material), please discuss this with me to arrange a commercial license fee.</li>
         </ul>
  
         <p class="mt-4">By commissioning me, you agree to these Terms of Service.</p>
         <p class="text-caption text-medium-emphasis">Last Updated: [Date]</p>
  
         </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'TOS',
  };
  </script>
  
  <style scoped>
  /* Add specific styles for TOS component if needed */
  ul {
    padding-left: 20px; /* Add some padding to the left of list items */
  }
  </style>