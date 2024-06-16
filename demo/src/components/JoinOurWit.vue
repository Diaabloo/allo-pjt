<template>
  <div class="join-wit" v-show="modelActive && !joinedDriver">

    <div v-if="modelActive && !joinedDriver" class="join-wit-cont">

      <i class="fa-solid fa-xmark" @click="$emit('close-modal')"></i>

      <div class="join-navbar">
        <h1 class="join-navbar-title">Join Us !!</h1>
        <p class="join-navbar-para">
          Step into the driver's seat of our vibrant community!
          <br />
          Drop your email below and ignite the journey with us.
        </p>

        <form @submit.prevent="submitEmail">
          <input
            type="email"
            v-model="userEmail"
            placeholder="Enter your email"
            class="join-navbar-input"
            :disabled="joinedDriver"
          />
          <div class="join-btn">
            <button
              type="submit"
              class="join-btn-submit"
              :disabled="joinedDriver"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

    </div>

  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';
import axios from 'axios';
import { ref } from 'vue';
import Swal from 'sweetalert2';


// Define Emits in Template
defineEmits(["close-modal"]);

// Define Props and Data
defineProps({
  modelActive: {
    type: Boolean,
    default: false,
  },
});

const userEmail = ref('');
// Flag to indicate if user joined the driver
const joinedDriver = ref(false);



// Method to validate email
const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

// Method to show alert
const showAlert = (title, text, icon = 'success') => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: 'OK',
    confirmButtonColor: '#0074d9',
  });
};

// Method to submit email
const submitEmail = async () => {
  if (!validateEmail(userEmail.value)) {
    showAlert('Invalid Email', 'Please enter a valid email address.', 'error');
    return;
  }
  try {
    const response = await axios.post('http://localhost:3000/register', { email: userEmail.value });
    console.log(response.data);
    joinedDriver.value = true; // Mark user as joined the driver
    showAlert('Email Confirmation', 'Please check your inbox.');
  } catch (error) {
    console.error('Error submitting email:', error);
    showAlert('Error', 'Error sending email. Please try again later.', error);
  }

};

</script>

<style scoped>
.fa-xmark {
  font-size: 20px;
  color: red;
  margin-left: 550px;
  margin-bottom: 20px;
  cursor: pointer;
}
.join-navbar {
  margin: 5px 60px;
}
.join-wit {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 5000;
  overflow-y: auto;
}
.join-wit-cont {
  border-radius: 20px;
  background-color: #70bf73;
  position: relative;
  overflow: hidden;
  padding: 20px;
  animation: fadeIn 1.5s ease-in-out forwards;
  max-width: 48rem;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.join-navbar-title {
  margin-bottom: 10px;
  margin-top: 0;
  font-size: 30px;
  color: #0074d9;
  font-weight: bold;
}
.join-navbar-para {
  margin-bottom: 20px;
}
.join-navbar-input {
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  color: black;
  font-weight: bold;
}
.join-btn {
  display: flex;
  justify-content: space-around;
  padding: 10px 20px;
  margin-right: 10px;
}
.join-btn-submit {
  background-color: #0074d9;
  color: white;
  cursor: pointer;
  padding: 5px 20px;
  font-size: 15px;
  font-weight: bold;
  border: solid 2px black;
}
.join-btn-submit:hover {
  background-color: #70bf73;
  color: black;
}
</style>
