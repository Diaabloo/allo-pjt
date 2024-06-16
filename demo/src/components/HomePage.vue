<template>
    <div class="page-head">
            <!-- slider -->
            <div class="slide">
                <swiper
                        :spaceBetween="30"
                        :centeredSlides="true"
                        :autoplay="{
                            delay: 3000,
                            disableOnInteraction: false,
                        }"
                        :pagination="{
                            clickable: true,
                        }"
                        :navigation="true"
                        :modules="modules"
                        class="mySwiper">

                    <swiper-slide>
                    <div class="content">
                            <h3>Drive your future with <span>confidence</span> </h3>
                            <a href="#" class="btn">GET APP</a>
                    </div>
                        <img src="../assets/img/img-1.jpg" alt="">
                    </swiper-slide>

                    <swiper-slide>
                    <div class="content">
                            <h3>Navigate to safety with our <span>expertise</span> </h3>
                            <a href="#" class="btn">GET APP</a>
                    </div>
                        <img src="../assets/img/img-2.jpg" alt="">
                    </swiper-slide>

                    <swiper-slide>
                    <div class="content">
                            <h3>Learn to drive with <span>assurance</span>  and <span>competence</span></h3>
                            <a href="#" class="btn">GET APP</a>
                    </div>
                        <img src="../assets/img/img-3.jpg" alt="">
                    </swiper-slide>

                    <swiper-slide>
                    <div class="content">
                            <h3>Let us steer your journey on the road to <span>safety</span></h3>
                            <a href="#" class="btn">GET APP</a>
                    </div>
                        <img src="../assets/img/img-4.jpg" alt="">
                    </swiper-slide>

                </swiper>
            </div>

            <!-- Rules And Duties -->
            <div class="mt-20 w-full px-64 box-border">
                <div class="flex justify-between min-h-[365px] rounded-3xl bg-secondary gap-4 shadow-custom-lightgrey">
                    <div class="text-start px-8 py-15 flex-1 mt-8">
                        <h2 class="text-primary text-6xl font-semibold leading-normal">
                            Safety first
                        </h2>
                        <p class="mt-4 mb-8 text-xl font-medium text-gray leading-2xl text-justify">
                            Driver education emphasizes the paramount importance of safety on the road. Through comprehensive courses and practical training, novice drivers learn to prioritize caution and responsibility behind the wheel. From mastering defensive driving techniques to understanding traffic
                        </p>
                        <router-link to="/RulesAndDuties" class="text-xl font-bold text-primary px-5 py-2.5 hover:bg-primary hover:text-secondary">PLUS </router-link>
                    </div>
                    <div class="flex-shrink-0">
                        <img src="../assets/img/safety.png" class="object-cover" alt="">
                    </div>
                </div>
            </div>


            <!-- WhyWeExist -->
            <div class="mt-2">
                <div class="flex gap-2 bg-cover">
                    <img src="../assets/img/cover.jpg" alt="">
                    <div class="my-24  mr-[100px] px-15 py-5">
                    <h1 class="text-secondary text-2xl">Why we exist?</h1>
                    <p class="text-justify text-black text-[20px] mt-16">
                        At Allo Moniteur, we believe in our fundamental purpose: to empower individuals with the essential skill of safe driving while making a positive impact on society. We recognize that access to quality driving education is not just about mastering the mechanics of operating a vehicle; it's about fostering responsible and confident drivers who contribute to safer roads and communities...
                    </p>
                    <router-link to="/WhyWeExist" class="btn">PLUS </router-link>
                    </div>
                </div>
            </div>

            <!-- Service -->
            <div class="service-container-home-page">

                <h1 class="service-title">Our Service</h1>

                <!-- service-client -->
                <div class="service-client">

                    <div class="image-client">
                        <img src="../assets/img/client.jpg" class="cover-client" alt="">
                    </div>

                    <div class="client-para">
                        <p class="client-sec-para">
                            We're dedicated to providing top-notch driver education, placing safety as our top priority.
                            Our meticulously designed program not only teaches essential driving skills but also cultivates confidence and responsibility.
                            Tailored to individual needs, our experienced instructors create a supportive environment, emphasizing clarity and thoroughness in every lesson.
                            With a focus on defensive driving, traffic laws, and real-life situations, we equip our clients for safe road navigation.
                            Beyond just teaching driving, we aim to nurture responsible, conscientious drivers for life.
                            <span style="color:#70bf73 ; font-weight: bold; font-size: 21px;">Join us for a journey towards safe and confident driving.</span>
                        </p>
                        <a class="service-btn-client" href="#">GET APP</a>
                    </div>

                </div>

                 <!-- service-driver -->
                <div class="service-driver">

                    <div class="driver-para">
                        <p class="driver-sec-para">

                            Our dedication to providing top-notch driver education service is unwavering.
                            Recognizing the importance of obtaining a driver's license, we prioritize safety above all.
                            Our program is meticulously crafted to equip drivers with essential skills while fostering confidence and responsibility.
                            Led by experienced instructors, we create a supportive learning environment tailored to each individual.
                            Whether in classrooms or behind the wheel, clarity and thoroughness are our guiding principles.
                            By focusing on defensive driving, traffic laws, and real-life scenarios, we empower drivers to navigate roads safely.
                            Our goal transcends mere instruction; it's about cultivating a lifelong commitment to responsible driving.
                            <span style="color: #0074D9; font-weight: bold; font-size: 20px;"> join us in the pursuit of safe and confident driving experiences.</span>
                        </p>
                        <router-link to="" class="service-btn-driver"  @click="toggleModal"> Join our witless </router-link>                    </div>
                    <div class="image-driver">
                        <img src="../assets/img/driver.jpg" class="cover-driver" alt="">
                    </div>
                    </div>

                    <JoinOurWit :modelActive="modelActive" @close-modal="toggleModal"/>

                    <router-link to="/OurService" class="btn">PLUS </router-link>
            </div>


            <FooterPage/>
    </div>
</template>

<script>
    import FooterPage from './FooterPage.vue';
    import JoinOurWit from './JoinOurWit.vue';
    import { ref } from 'vue';
    // Import Swiper Vue.js component
    import { Swiper, SwiperSlide } from 'swiper/vue';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    // Import required modules
    import { Autoplay, Navigation } from 'swiper/modules';


    export default {
    name: 'HomePage',
    components: {
      Swiper,
      SwiperSlide,
      JoinOurWit,
      FooterPage
    },
    setup() {
        const modelActive = ref(null);

        const toggleModal = () => {
            modelActive.value = !modelActive.value;
        };

    return {
        modules: [Autoplay, Navigation],
        modelActive,
        toggleModal,
    }

    }

  }


</script>

<style>

    .slide{
        width: 1400px;
        height: 500px;
        margin: 40px auto;
        background: #ffffff;
        box-shadow: 0px 14px 80px rgba(34,35,58,0.2);
        position: relative;
        padding-right: 40px;
        padding-left: 40px;
        border-radius: 15px;
        transition: all .3s;
        display: flex;
        justify-content: center;
      }
    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: start;
      font-size: 18px;
      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .page-head{
        margin: auto;
        background: #ffffff;
        border-radius: 15px;
        transition: all .3s;
      }

    .content {
        display: inline-block;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        font-weight: bold !important;
        width: 100%;
        height: 100%;
        color: white;
        padding: 140px 40px;
    }

    .content h3 {
        font-size: 50px;
        color: white;
        text-transform: uppercase;
        line-height: 1;
        text-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 5);
        padding: 1rem 0;
        animation: fadeIn .2s linear backwards .4s;

    }
    .content span{
      font-size: 50px;
      text-transform: uppercase;
      color: #70bf73;
    }

    .btn {
        animation: fadeIn .2s linear backwards .6s;
        display: inline-block;
        background: #0074D9;
        margin-top: 2.5rem;
        color: white;
        font-size: 1.7rem;
        padding: 1rem 3rem;
        cursor: pointer;
        border-radius: 16px;
        border: none;
        cursor: pointer;
        text-align: center;
        font-size: 20px;
        position: relative;
    }
    .btn:hover {
        background: #70bf73;
    }

    .swiper-button-prev {
      display: none;
    }
    .swiper-button-next{
      display: none;
    }



    /* .image-safety{
        position: relative;
        flex: 1 1;
        max-width: 1000px;
    }
    .image-safety img{
        position: absolute;
        inset: 0px;
        box-sizing: border-box;
        padding: 0px;
        border: none;
        margin: 52px 135px;
        display: block;
        width: 0px;
        height: 0px;
        min-width: 60%;
        min-height: 80%;
    } */

    /* .cover{
        box-sizing: border-box;
        display: block;
        overflow: hidden;
        width: initial;
        height: initial;
        background: none;
        opacity: 1;
        border: 0px;
        margin: 0px;
        padding: 0px;
        position: absolute;
        inset: 0px;
    } */


    .service-title{
        margin: 70px 0px;
        font-size: 50px;
    }
    .service-container-home-page{
        margin-top: 80px;
        margin-bottom: 80px;
        width: 100%;
        box-sizing: border-box;
    }


    .service-client, .service-driver{
        display: flex;
        justify-content: space-around;
        border-radius: 32px;
    }
    .service-driver{
        margin-top: 100px;
    }


    .image-client{
        position: relative;
        flex: 1 1 41rem;
    }
    .image-client img{
        position: absolute;
        inset: 0px;
        box-sizing: border-box;
        padding: 0px;
        border: none;
        margin-left: 300px;
        display: block;
        width: 0px;
        height: 0px;
        min-width: 50%;
        max-width: 50%;
        min-height: 75%;
        max-height: 50%;
    }
    .image-driver{
        position: relative;
        flex: 1 1 41rem;
    }
    .image-driver img{
        position: absolute;
        inset: 0px;
        box-sizing: border-box;
        padding: 0px;
        border: none;
        margin-left: 150px;
        margin-top: 50px;
        display: block;
        width: 0px;
        height: 0px;
        min-width: 50%;
        max-width: 50%;
        min-height: 75%;
        max-height: 50%;
    }


    .para-title-client{
        color: #0074D9;
        line-height: normal;
        margin-top: 340px;
        margin-left: 150px;
    }
    .para-title-driver{
        color: #0074D9;
        line-height: normal;
        margin-top: 340px;
        margin-right: 150px;
    }


    .client-para{
        flex: 1 1 45rem;
        padding: 2rem;
        background: lightgray;
        border-radius: 32px;
        gap: 50px;
        box-shadow: -5px 5px 15px lightgrey;
        margin-right: 120px;
    }
    .driver-para{
        flex: 1 1 45rem;
        padding: 2rem;
        background: lightgray;
        border-radius: 32px;
        gap: 50px;
        box-shadow: 5px -5px 15px lightgrey;
        margin-left: 120px;
    }


    .client-sec-para{
        text-align: justify;
        font-size: 18px;
        color: #0074D9;
        margin-bottom: 90px;
    }
    .driver-sec-para{
        text-align: justify;
        font-size: 18px;
        color: #70bf73;
        margin-bottom: 90px;
    }


    .service-btn-client{
        font-size: 20px;
        font-weight: bold;
        color: #0074D9;
        padding: 10px 20px ;
        margin-left: 700px;
    }
    .service-btn-driver{
        font-size: 20px;
        font-weight: bold;
        color: #70bf73;
        padding: 10px 20px ;
        margin-right: 650px;
    }


    .service-btn-client:hover{
        background-color: #0074D9;
        color: #70bf73;
        padding: 10px 20px ;
    }
    .service-btn-driver:hover{
        background-color: #70bf73;
        color: #0074D9;
        padding: 10px 20px ;
    }
</style>

