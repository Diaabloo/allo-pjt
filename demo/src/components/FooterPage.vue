<template>
    <footer class="footer">
      <div class="box-container">
        <div class="box">
          <h4 class="foot">quick links</h4>
          <router-link to="/"> <i class="fas fa-angle-right"></i> HOME</router-link>
          <router-link to="/WhyWeExist"> <i class="fas fa-angle-right"></i>Why We Exist</router-link>
          <router-link to="/RulesAndDuties"> <i class="fas fa-angle-right"></i> Rules and Duties</router-link>
        </div>

        <div class="box">
          <h4 class="foot">contact info</h4>
          <a href="#"> <i class="fas fa-phone"></i> +212 000-00000 </a>
          <a href="#"> <i class="fas fa-envelope"></i> allomioniteur@gmail.com </a>
          <a href="#"> <i class="fa-solid fa-map-location-dot"></i> Rabat Maroc  </a>
        </div>

        <div class="box">
          <h4 class="foot">follow us</h4>
          <a href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
          <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
          <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
        </div>
      </div>

      <div class="credit"> created by <span>allo moniteur</span> |<i class="fa-solid fa-copyright"></i> </div>
    </footer>
  </template>

  <script>
  export default {
    name: 'FooterPage'
  }
  </script>

  <style scoped>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

  .footer {
    background: url('../assets/img/cover-2.jpg');
    font-size: 20px;
    background-size: cover;
    background-position: center;
    padding: 2rem 8%;
    color: lightgray;
    border-radius: 20px;
  }

  .footer .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 1.5rem;
  }

  .foot {
    color: #0074D9;
    font-size: 2.5rem;
    padding-bottom: 2rem;
  }

  .footer .box-container .box a {
    color: #0074D9;
    font-size: 1.5rem;
    padding-bottom: 1.5rem;
    display: block;
  }

  .footer .box-container .box a i {
    color: #1C8EF9;
    padding-right: .5rem;
    transition: .2s linear;
  }

  .footer .box-container .box a:hover i {
    padding-right: 2rem;
  }

  .footer .credit {
    text-align: center;
    padding-top: 1rem;
    margin-top: 1rem;
    border-top: .1rem solid #0074D9;
    font-size: 2rem;
    color: #0074D9;
  }

  .footer .credit span {
    color: #1C8EF9;
  }

  .footer .fa-copyright {
    color: black;
    font-size: 15px;
    margin-left: 3px;
  }
  </style>


