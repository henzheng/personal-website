<template>
    <div class="main-content">
        <div class="section" id="landing">
            <h1 class="text-primary-blue">Hey I'm</h1>
            <h2 class="text-[4rem] md:text-5xl xl:text-[4rem]">Henry Zheng</h2>
            <Typewriter class="text-[4rem] md:text-5xl xl:text-[4rem] opacity-50" text="Programmer, Tech Enthusiast" />
            <p class="mb-2">Currently a student 
                <a class="text-primary-blue" href="https://www.siths.org" target="_blank">@ Staten Island Technical High School 🎓</a>
            </p>
            <li class="list-none rounded-md text-primary-blue border border-solid border-primary-blue p-3 no-underline cursor-pointer transition-all ease-in-out duration-300 hover:scale-110">
                <a class="color-primary-blue" @click="scrollTo('about')">Explore the website!</a>
            </li>
        </div>
        <div class="section" id="about">
            <Heading number="01." title="About Me" />
            <Section image="/images/web-development.png" alt="development">
                <p>Hello, my name is Henry! I'm a high school student aspiring to be a <span>software engineer</span>.</p>
                <p>I was introduced to the world of programming through the TI-84 Calculator. Surprisingly, messing around with <span>TI-Basic</span> teaches you a lot of core programming principles!</p>
                <p>After this experience sparked my curiousity, I went on to learn Python as my first programming language.
                    Many of my early projects were <span>Discord bots</span> made using Discord.py, an API wrapper for
                    Discord. However, recently I have been much more interested in <span>web development and machine learning</span>.
                    For instance, this website was built using Nuxt.js and Tailwind CSS!
                </p>
            </Section>
        </div>
        <div class="section" id="work">
            <Heading number="02." title="Work & Experience" />
            <Section image="/images/joystick.png" alt="joystick">
                <Tabs />
            </Section>
        </div>
        <div class="section" id="skills">
            <Heading number="03." title="Skills" />
            <Section image="/images/innovation.png" alt="innovation">
                <ul class="list-disc p-6 text-md md:text-md md:columns-2 gap-12">
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110 md:break-inside-avoid-column">Autodesk AutoCAD Certified</li>
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110 md:break-inside-avoid-column">OSHA-10 Certified</li>
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110 md:break-inside-avoid-column">Proficient in various programming and markup languages
                        <br> (HTML, CSS, Javascript, Typescript, Python - Currently Learning C++)
                    </li>
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110 md:break-inside-avoid-column">Understanding of web development frameworks
                        <br> (React, Vue.js, Nuxt3, Express.js, TailwindCSS)
                    </li>
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110 md:break-inside-avoid-column">Experienced in working with Ubuntu, Docker, and Git, enabling efficient and streamlined development processes</li>
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110 md:break-inside-avoid-column">Able to work effectively both independently and as part of a collaborative team, adapting to different work environments and technologies</li>
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110 md:break-inside-avoid-column">Self-motivated and proactive worker, consistently taking initiative to achieve project goals and meet deadlines</li>
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110 md:break-inside-avoid-column">Strong problem-solving skills, capable of analyzing complex issues and finding practical solutions</li>
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110 md:break-inside-avoid-column">Detail-oriented and dependable, ensuring accuracy and quality in work deliverables</li>
                </ul>
            </Section>
        </div>
        <div class="section" id="contact">
            <Heading number="04." title="Contact Me" />
            <Section image="/images/global-network.png" alt="network">
                <p class="text-md">If you want to reach out, feel free to send a message through <span>social media or email</span> to get in touch!</p>
                <p class="text-md">I'm always open to new <span>opportunities</span> and learning <span>experiences</span>!</p>
                <p class="text-md">I check my inboxes often, so I'll try my best to get back <span>ASAP</span>.</p>
                <p><span class="text-md">Let's connect and explore the possibilities together!</span></p>
            </Section>
        </div>
        <Credits />
    </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

function scrollTo(id) {
    const top = document.getElementById(id).offsetTop;
    scroll({ top: top - 100, behavior: 'smooth' });
}

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    let sections = gsap.utils.toArray('.section')
    sections.pop(-1)
    sections.forEach(box => {
        gsap.fromTo(box, {
            autoAlpha: 0,
            y: 50
        }, {
            scrollTrigger: {
                trigger: box,
                once: true
            },
            duration: 1.5,
            autoAlpha: 1,
            y: 0
        });
    });
})
</script>

<style scoped>
.main-content {
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 40vh;
}

.main-content:nth-last-child(2) {
    gap: 20vh;
}

.section {
    flex-grow: 1;
    margin: 0 auto;
    width: fit-content;
    width: 65vw;
    /* max-width: 1000px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
}

#landing {
    margin-top: 30vh;
    width: 50vw;
    margin: 30vh auto;
}

#type {
    white-space: nowrap;
}

@media only screen and (max-width: 960px) {
    #landing,
    #about,
    #work,
    #skills,
    #contact, {
        width: 600px;
    }

    #skills .section-text {
        width: 400px;
        height: 500px;
    }

    #type {
        font-size: 40px;
        white-space: nowrap;
    }

    #about img {
        margin-top: 100px;
    }

    #work img {
        margin-top: 200px;
    }

    .skill-list li {
        font-size: 1.1rem;
    }
}

/* Tablets */
@media only screen and (max-width: 820px) {
    .section li,
    .section p {
        font-size: 0.9rem;
    }

    #type {
        font-size: 1.5rem;
    }

    #landing p {
        font-size: 1rem;
    }

    #landing h2 {
        font-size: 2.25rem;
        font-weight: 600;
    }

    #landing,
    #about,
    #work,
    #skills,
    #contact {
        width: 90vw;
    }

    #landing {
        margin-left: 25vw;
    }

    #skills .section-text {
        margin-left: 15px;
        width: 380px;
        height: 350px;
    }

    .section {
        width: 90vw;
    }
}

@media only screen and (max-width: 640px) {
    #landing {
        margin-left: 1rem;
    }
    
}
</style>