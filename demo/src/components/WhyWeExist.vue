<template>
    <div class="why-we-container">

        <!-- Why-we-exist -->
        <div class="why-we-exist">
            <h1 class="why-we-exist-title">Why We Exist ?</h1>
            <div class="why-we-exist-content">
                <div class="why-we-exist-image">
                    <img src="../assets/img/why.png" alt="">
                </div>
                <div class="exist-content">
                    At Allo Moniteur, we believe in our fundamental purpose: to empower individuals with the essential skill of safe driving while making a positive impact on society.
                    We recognize that access to quality driving education is not just about mastering the mechanics of operating a vehicle; it's about fostering responsible and confident drivers who contribute to safer roads and communities.
                    <br><br>
                    Our existence is driven by the profound social impact we strive to achieve.
                    By providing accessible and personalized driving lessons, we aim to democratize the learning process and break down barriers to entry in acquiring this critical life skill.
                    Through our commitment to safety and excellence, we aspire to cultivate a culture of responsible driving behavior, ultimately leading to fewer accidents and safer roads for everyone.
                    <br><br>
                    Every aspect of our startup, from our rigorous instructor selection process to our user-friendly platform, is designed with the overarching goal of positively impacting society. We firmly believe that by equipping individuals with the knowledge and skills to drive safely, we can create a ripple effect that extends far beyond the confines of our platform, fostering a culture of road safety and responsibility that benefits us all.
                </div>

            </div>


        </div>

        <!-- Our-Value -->
        <div class="our-value">
            <h1 class="our-value-title">Our Value</h1>
            <div class="our-value-content">
                <div class="our-value-image">
                    <img src="../assets/img/our-value.png" alt="">
                </div>
                <div class="value-content">
                    At Allo Moniteur, we are committed to providing high-quality, accessible, and safe driving education.
                    Our core values include safety, excellence, and innovation.
                    We firmly believe that everyone deserves to learn to drive in a secure and supportive environment.
                    By connecting students with experienced and certified instructors, we aim to reduce road accidents and promote a culture of responsible driving.
                </div>
            </div>

        </div>

        <!-- Our-impact -->
        <div class="our-impact">
            <h1 class="our-impact-title">Our Impact</h1>
            <div class="our-impact-content">
                <div class="our-impact-image">
                    <img src="../assets/img/our-impact.png" alt="">
                </div>
                <div class="impact-content">
                    Our impact goes beyond teaching driving skills. By offering personalized and flexible lessons, we help clients build confidence and become skilled drivers. Additionally, we support local instructors by providing a platform to share their expertise and expand their business. Allo Moniteur also enhances overall road safety by training safer drivers, thereby reducing accident risks and making roads safer for everyone
                </div>
            </div>
        </div>


        <FooterPage/>
    </div>
</template>

<script >
import FooterPage from './FooterPage.vue'
export default {
    name:'WhyPage',
    components: {FooterPage}
}

</script>

<style scoped>

    .why-we-exist-title , .our-value-title , .our-impact-title{
        margin-top: 100px;
        text-transform: uppercase;
        font-weight: bold;
    }
    .why-we-exist-content, .our-value-content, .our-impact-content{
        display: flex;
        justify-content: space-around;
    }
    .why-we-exist-image , .our-value-image, .our-impact-image{
        position: relative;
        flex: 1 1 15rem;
    }
    .exist-content{
        margin: 80px 50px;
        flex: 1 1 45rem;
        padding: 2rem;
        background: #70bf73;
        border-radius: 32px;
        gap: 50px;
        box-shadow: -5px 5px 15px lightgrey;
        text-align: justify;
        font-size: 18px;
    }
    .value-content , .impact-content{
        margin: 80px 50px;
        flex: 1 1 45rem;
        padding: 3rem;
        background: #70bf73;
        border-radius: 32px;
        gap: 50px;
        box-shadow: -5px 5px 15px lightgrey;
        text-align: justify;
        font-size: 18px;
        line-height: 2.5;
    }



</style>