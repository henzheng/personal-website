<template>
    <div class="tab-container">
        <div class="tab">
            <button v-for="(experience, index) in data" @click="openTab" :link="experience.id" class="tablinks">{{ experience.id }}</button>
        </div>
        <div v-for="(experience, index) in data" :class="index === 0 ? 'tabcontent active' : 'tabcontent'" :id="experience.id">
            <h3>{{ experience.position }} <a :href="experience.url" target="_blank">@ {{ experience.workplace }}</a></h3>
            <p>{{ experience.timeframe }}</p>
            <div class="tab-description">
                <ul class="list-disc p-4">
                    <li v-for="(bullet, index) in experience.description" class="bullet-point">{{ bullet }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import data from "~/assets/experiences.json";
console.log(data);

onMounted(async () => {
    document.querySelectorAll(".tablinks")[0]?.click();
})

// const data = [
//     {
//         position: "Intern",
//         workplace: "TygaSmart Systems",
//         timeframe: "Feb 2023 - Apr 2023",
//         description: [
//             "Coordinated with the web development team to design and implement a new layout for the company's web app",
//             "Organized and collected a diverse range of 2D and 3D furniture assets to assist in the creation of a digital floor planner",
//         ],
//         id: "TS",
//     },
//     {
//         position: "Intern",
//         workplace: "AGS Card Grading",
//         timeframe: "Jul 2022 - Aug 2022",
//         description: [
//             "Worked as a IT intern for software development, utilized knowledge of AV editing to help with advertisement and production",
//             "Collaborated closely with peers over multiple social media and communication platforms to assist with customer accquistion"
//         ],
//         id: "AGS",
//     },
//     {
//         position: "Intern",
//         workplace: "United Activities Unlimited",
//         timeframe: "Jul 2021 - Aug 2021",
//         description: [
//             "Developed leadership, time management, communication, and a number of other skills applicable to all professions, as well as my understanding of the profession I want to pursue",
//             "Fulfilled the two roles of host and audio technician for the cohort’s final live presentation"
//         ],
//         id: "UAU"
//     },
//     {
//         position: "Volunteer",
//         workplace: "Luv Michael",
//         timeframe: "Jan 2021 - Feb 2021",
//         description: [
//             "Advocated for autism acceptance in adults and supported their education and employment",
//             "Fundraised and spread awareness for the cause through various social media and messaging platforms"
//         ],
//         id: "LM"
//     },
// ]

function openTab(event) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";

    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    const tabId = event.currentTarget.getAttribute("link");
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.className += " active";
}
</script>

<style scoped>
.tab-container {
    margin-top: 20px;
    height: 300px;
}

/* Style the tab */
.tab {
    overflow: hidden;
}

/* Style the buttons that are used to open the tab content */
.tab button {
    color: #48cae4;
    font-family: "Roboto Mono", monospace;
    font-size: 1rem;
    background-color: inherit;
    float: left;
    border: none;
    border-bottom: rgba(255, 255, 255, 0.5) solid 2px;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
    background-color: #112240;
}

/* Create an active/current tablink class */
.tab button.active {
    border-bottom: #48cae4 solid 2px;
}

/* Style the tab content */
.tabcontent {
    display: none;
    padding: 12px 12px;
    border: none;
    border-top: none;
}

.tabcontent {
    animation: fadeEffect 1s;
    /* Fading effect takes 1 second */
}

.tabcontent a {
    color: #48cae4;
}

.tabcontent li {
    pointer-events: none;
    font-size: 1rem;
    margin-bottom: 10px;
}
/* Go from zero to full opacity */
@keyframes fadeEffect {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}</style>
