<template>
    <div class="rules">
        <!-- Rules And Duties image -->
        <div class="rules-div">
            <img class="rules-img" src="../assets/img/rules and duties.png" alt="" srcset="">
        </div>

        <!-- Rules and Duties Driver -->
        <div class="rules-driver">
            <h1 class="rules-driver-title">
                DRIVER
            </h1>


            <div class="box-container-driver">

                <!-- BOX--1 -->
                <div class="box-driver">

                    <div class="rules-content">
                        <img src="../assets/icon/ex-icon.png" alt="">
                        <h3>experience</h3>
                        <p>
                            All instructors must be certified and licensed in driving instruction in accordance with local regulations.
                            <br>
                            <span class="rules-span">3 years</span>  of driving experience with a clean record, free of serious offenses and recent accidents (at least 6 months).
                        </p>
                    </div>

                </div>

                <!-- BOX--2 -->
                <div class="box-driver">

                    <div class="rules-content">
                        <img src="../assets/icon/skill-icon.png" alt="">
                        <h3>Skills</h3>
                        <p>
                            Instructors must have excellent communication skills and be able to effectively convey their knowledge to students.
                        </p>
                    </div>

                </div>

                <!-- BOX--3 -->
                <div class="box-driver">

                    <div class="rules-content">
                        <img src="../assets/icon/safety-icon.png" alt="">
                        <h3> Safety</h3>
                        <p>
                            Instructors must emphasize road safety and promote responsible driving practices at all times.
                        </p>
                    </div>

                </div>

                <!-- BOX--4 -->
                <div class="box-driver">

                    <div class="rules-content">
                        <img src="../assets/icon/flex-icon.png" alt="">
                        <h3> Flexibility</h3>
                        <p>
                            Instructors must be flexible in terms of schedules and availability to meet clients' needs
                            <br>
                            The instructor can cancel the session
                        </p>
                    </div>

                </div>

                <!-- BOX--5 -->
                <div class="box-driver">

                    <div class="rules-content">
                        <img src="../assets/icon/danger-icon.png" alt="">
                        <h3> Dangerous </h3>
                        <p>
                            If weather conditions make driving dangerous, such as snowstorms, heavy rain, or dense fog, the instructor may cancel the session.
                        </p>
                    </div>

                </div>

                <!-- BOX--6 -->
                <div class="box-driver">

                    <div class="rules-content">
                        <img src="../assets/icon/emergency-icon.png" alt="">
                        <h3> EMERGENCIES </h3>
                        <p>
                            In the event of an unforeseen personal emergency, such as a sudden illness or family problem, the instructor may cancel the session.
                        </p>
                    </div>

                </div>

                <!-- BOX--7 -->
                <div class="box-driver">

                    <div class="rules-content">
                        <img src="../assets/icon/client-icon.png" alt="">
                        <h3> Client  status </h3>
                        <p>
                            If the client is unfit to drive due to illness or other health condition, the instructor may cancel the session.
                        </p>
                    </div>

                </div>

                <!-- BOX--8 -->
                <div class="box-driver">

                    <div class="rules-content">
                        <img src="../assets/icon/drive-rules-icon.png" alt="">
                        <h3> Driver </h3>
                        <p>
                            The instructor is allowed to use a camera during the session for security purposes, but will not film the client's face if they don't want to.
                        </p>
                    </div>

                </div>


            </div>
        </div>

        <!-- Rules and Duties Client -->
        <div class="rules-client">

            <h1 class="rules-client-title">
                Client
            </h1>

            <div class="box-container-client">

                <!-- BOX--1 -->
                <div class="box-client">

                    <div class="rules-content-client">
                        <img src="../assets/icon/Punctuality-icon.png" alt="">
                        <h3>Punctuality</h3>
                        <p>
                            Customers must arrive at the agreed time for their driving session.
                        </p>
                    </div>

                </div>

                <!-- BOX--2 -->
                <div class="box-client">

                    <div class="rules-content-client">
                        <img src="../assets/icon/Respect-the-rules.png" alt="">
                        <h3>Respect the rules</h3>
                        <p>
                            Clients must carefully follow their instructor's instructions and respect the rules of conduct in force.
                        </p>
                    </div>

                </div>

                <!-- BOX--3 -->
                <div class="box-client">

                    <div class="rules-content-client">
                        <img src="../assets/icon/res-annul.png" alt="">
                        <h3> cancellation & reservation</h3>
                        <p>
                            If the session is canceled by the instructor, you can get back 80% of the amount you paid in advance.
                            <br>
                            To book a session, an initial payment of 50% of the total amount is required. The rest will be paid at the end of the session.
                        </p>
                    </div>

                </div>

                <!-- BOX--4 -->
                <div class="box-client">

                    <div class="rules-content-client">
                        <img src="../assets/icon/confirmation-client.png" alt="">
                        <h3> Client</h3>
                        <p>
                            The customer has the right to give feedback on our application or our support.
                            <br>
                            The client has the right to receive information about the instructor and can also film during the session for safety purposes.
                        </p>
                    </div>

                </div>

            </div>
        </div>

        <FooterPage />

    </div>
</template>

<script >
import FooterPage from '../components/FooterPage.vue'
export default {
    name: 'RulesPage',
    components: { FooterPage }
}

</script>

<style>
    /* Rules And Duties */
    .rules-div{
        width: 100%;
        padding-right: 250px;
        padding-left: 250px;
        box-sizing: border-box;
    }
    .rules-img{
        width: 80%;
        border-radius: 20px;
        box-shadow: 0px -10px 15px lightgrey;
    }

    /* Rules and Duties Driver */
    .rules-driver{
        margin-top: 80px;
        margin-bottom: 80px;
    }
    .rules-driver-title{
        margin: 70px 0px;
        font-size: 60px;
        color: #70bf73;
    }
    .box-container-driver{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        gap: 2rem;
    }
    .box-container-driver .box-driver{
        border: .1rem solid black;
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
        background-color: #70bf73;
    }
    .box-container-driver .box-driver .rules-content{
        padding: 2rem;
        text-align: center;
    }
    .box-container-driver .box-driver .rules-content img{
        width: 30%;
    }
    .box-container-driver .box-driver .rules-content h3 {
        font-size: 40px;
        color: black;
        text-transform: uppercase;
        line-height: 1;
        text-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 5);
        margin-top: 0px;
    }
    .box-container-driver .box-driver .rules-content p {
        font-size: 16px;
        line-height: 1.5;
        padding: 1rem 0;
    }
    .rules-span{
        color: red;
        font-weight: bold;
        font-size: 20px;
    }


    /* Rules and Duties Client */
    .rules-client-title{
        margin: 70px 0px;
        font-size: 60px;
        color: #0074D9;
    }
    .box-container-client{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        gap: 2rem;
        margin-bottom: 50px;
    }
    .box-client{
        border: .1rem solid black;
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
        background-color: #0074D9;
    }
    .box-container-client .box-client .rules-content-client{
        padding: 2rem;
        text-align: center;
    }
    .box-container-client .box-client .rules-content-client img{
        width: 30%;
    }
    .box-container-client .box-client .rules-content-client h3 {
        font-size: 40px;
        color: black;
        text-transform: uppercase;
        line-height: 1;
        text-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 5);
        margin-top: 0px;
    }
    .box-container-client .box-client .rules-content-client p {
        font-size: 16px;
        line-height: 1.5;
        padding: 1rem 0;
    }

</style>