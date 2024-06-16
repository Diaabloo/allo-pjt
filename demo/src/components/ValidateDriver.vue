<template>
    <div class="success-page">
      <div class="checkmark-container">
        <i class="fa-solid fa-check"></i>
      </div>
      <h1>Email Sent Successfully!</h1>
      <p class="sup">Our support will respond soon as possible</p>
      <p class="thank">Thank you for joining us.</p>
    </div>
  </template>

  <script setup>
  </script>

  <style>
  .success-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #70bf73;
    box-shadow: 10px 15px 10px lightgrey;
    border-radius: 20px;
    padding: 50px 20px;
    margin: 150px 700px;

  }

  .checkmark-container {
    font-size: 70px;
    color: #0074d9;
    margin-bottom: 20px;
  }

  .fa-solid {
  animation: spin 3s ease-in-out ; /* Apply the spin animation */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

  h1 {
    font-size: 40px;
    color: #0074d9;
    margin-bottom: 10px;
  }
  .sup{
    font-size: 20px;
    color: black;
    font-weight: bold;
  }

  .thank {
    font-size: 20px;
    color: black;
  }
  </style>