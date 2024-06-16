<template>
  <div id="app">

    <NavBar/>

    <div class="slide-head">
        <router-view/>
    </div>

  </div>
</template>

<script>
    import NavBar from './components/NavBar.vue';
    export default {
      name: 'App',
      components:{
        NavBar,
      }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;600;700;800&display=swap');

    *{
      box-sizing: border-box;
      text-decoration: none;
    }
    body{
        display: flex;
        font-weight: 400;
        font-family: 'Fira Sans', sans-serif;
      }
    body, html, #app, #root{
        width: 100%;
        margin: 0;
        padding: 0;
      }

    #app {
        text-align: center;
    }

</style>
