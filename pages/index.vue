<template>
    <div class="main-content">
        <div class="section" id="landing">
            <h1 class="text-primary-blue">Hey I'm</h1>
            <h2 class="text-[4rem]">Henry Zheng</h2>
            <Typewriter class="text-[4rem] opacity-50" text="Programmer, Tech Enthusiast" />
            <p class="mb-2">Currently a student 
                <a class="text-primary-blue" href="https://www.siths.org" target="_blank">@ Staten Island Technical High School 🎓</a>
            </p>
            <li class="list-none rounded-md text-primary-blue border border-solid border-primary-blue p-3 no-underline cursor-pointer transition-all ease-in-out duration-300 hover:scale-110">
                <a class="color-primary-blue" v-on:click="scrollTo('about')">Explore the website!</a>
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
                <ul class="list-disc p-10 text-md">
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110">Autodesk AutoCAD Certified</li>
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110">OSHA-10 Certified</li>
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110">Proficient in multiple programming and markup languages
                        <br> (HTML, CSS, Javascript, Typescript, Python - Currently Learning C++)
                    </li>
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110">Understanding of web development frameworks
                        <br> (React, Vue.js, Nuxt3, Express.js, TailwindCSS)
                    </li>
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110">Experience working with Ubuntu, Docker and Git</li>
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110">Comfortable working individually or collaboratively</li>
                    <li class="mb-2 transition-all ease-in-out duration-300 hover:scale-110">Self-motivated worker and a dependable problem solver</li>
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
    overflow: hidden;
    min-height: 100vh;
    display: grid;
    grid-template-rows: 100vh repeat(4, 1fr) 200px;
    row-gap: 225px;
}

.section {
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
}

#landing {
    width: 900px;
}

#landing {
    grid-row-start: 1;
}

#about {
    margin: auto;
    width: 90%;
    grid-row-start: 2;
}

#work {
    margin: auto;
    width: 90%;
    grid-row-start: 3;
}

#skills {
    margin: auto;
    width: 90%;
    grid-row-start: 4;
}

#contact {
    margin: auto;
    width: 90%;
    grid-row-start: 5;
}

@media only screen and (max-width: 960px) {
    #landing {
        margin-top: -350px;
        width: 600px;
    }

    #about {
        width: 600px;
    }

    #work {
        width: 600px;
    }

    #skills {
        width: 600px;
    }

    #skills .section-text {
        width: 400px;
        height: 500px;
    }

    #contact {
        width: 600px;
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

@media only screen and (max-width: 768px) {
    .section p {
        font-size: 14px;
    }

    .section li {
        font-size: 14px;
    }

    .main-content {
        margin-top: 25%;
        grid-template-rows: 750px repeat(4, 1fr) 100px;
    }

    .big-heading {
        font-size: 35px;
    }

    #type {
        font-size: 24px;
    }

    #landing p {
        font-size: 16px;
    }

    #landing {
        width: 350px;
        grid-row-start: 1;
    }

    #landing h1 {
        font-size: 30px;
    }

    #landing h2 {
        font-size: 35px;
        font-weight: 600;
    }

    #about {
        width: 350px;
        grid-row-start: 2;
    }

    #work {
        width: 350px;
        grid-row-start: 3;
    }

    #work img {
        margin-top: 150px;
        margin-left: 30px;
    }

    #work .inner {
        margin-left: 50px;
    }

    #skills {
        width: 350px;
        grid-row-start: 4;
    }

    #skills .section-text {
        margin-left: 15px;
        width: 380px;
        height: 350px;
    }

    #contact {
        width: 350px;
        grid-row-start: 5;
    }
}
</style>