<template>
  <div class="service-container max-w-screen-xl mx-auto px-4 md:px-8 mb-20 text-center">
    <h1 class="text-4xl md:text-6xl font-bold text-center mt-8">Service</h1>

    <!-- Service Client Section -->
    <div class="flex flex-col md:flex-row justify-center items-center md:gap-20 lg:gap-20 rounded-lg px-8 mb-16">
      <div class="image relative flex-1 flex-shrink-0 md:w-2/5 lg:w-2/5 xl:w-1/2 mx-auto mb-8 md:mb-0">
        <img src="../assets/img/client.jpg" class="w-full h-full object-cover rounded-lg" alt="Client Image">
      </div>

      <div class="client-para md:w-3/5 lg:w-3/5 md:pl-8">
        <p class="text-xl leading-relaxed text-primary mb-8 text-justify">
          We're dedicated to providing top-notch driver education, placing safety as our top priority.
          Our meticulously designed program not only teaches essential driving skills but also cultivates confidence and responsibility.
          Tailored to individual needs, our experienced instructors create a supportive environment, emphasizing clarity and thoroughness in every lesson.
          With a focus on defensive driving, traffic laws, and real-life situations, we equip our clients for safe road navigation.
          Beyond just teaching driving, we aim to nurture responsible, conscientious drivers for life.
          <span class="text-secondary font-bold text-xl mt-4">Join us for a journey towards safe and confident driving.</span>
        </p>
        <router-link to="" class="btn-service text-xl font-bold text-blue-500 py-2 px-6 rounded-lg inline-block">GET APP</router-link>
      </div>
    </div>

    <!-- Service Driver Section -->
    <div class="flex flex-col md:flex-row justify-center items-center md:gap-20 rounded-lg p-8 mb-16">
      <div class="driver-para md:w-3/5 lg:w-3/5 md:pr-8 text-justify">
        <p class="text-xl leading-relaxed text-secondary mb-8 ">
          Our dedication to providing top-notch driver education service is unwavering.
          Recognizing the importance of obtaining a driver's license, we prioritize safety above all.
          Our program is meticulously crafted to equip drivers with essential skills while fostering confidence and responsibility.
          Led by experienced instructors, we create a supportive learning environment tailored to each individual.
          Whether in classrooms or behind the wheel, clarity and thoroughness are our guiding principles.
          By focusing on defensive driving, traffic laws, and real-life scenarios, we empower drivers to navigate roads safely.
          Our goal transcends mere instruction; it's about cultivating a lifelong commitment to responsible driving.
          <span class="text-primary font-bold text-xl mt-4">Join us in the pursuit of safe and confident driving experiences.</span>
        </p>
        <router-link to="" class="btn-service-driver text-xl font-bold text-green-700 py-2 px-6 rounded-lg inline-block">Join our witless</router-link>
      </div>

      <div class="relative flex-1 flex-shrink-0 md:w-2/5 lg:w-2/5">
        <img class="w-full h-full object-cover rounded-lg" src="../assets/img/driver.jpg" alt="Driver Image">
      </div>
    </div>

    <!-- Include your modal component here -->
    <JoinOurWit :modelActive="modelActive" @close-modal="toggleModal"/>
  </div>
</template>



  <script setup>
  import JoinOurWit from './JoinOurWit.vue';
  import { ref } from 'vue';

  const modelActive = ref(null);
  const toggleModal = () => {
    modelActive.value = !modelActive.value;
  };
  </script>

