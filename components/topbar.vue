<template>
    <div class="topnav">
        <!-- <Hamburger id="hamburger" /> -->
        <div class="links">
            <li class="button"><a @click="scrollTo('about')">About</a></li>
            <li class="button"><a @click="scrollTo('work')">Work</a></li>
            <li class="button"><a @click="scrollTo('skills')">Skills</a></li>
            <li class="button"><a @click="scrollTo('contact')">Contact</a>
            </li>
            <li class="button">
                <a href="/resume.pdf" target="_blank">Resume</a>
            </li>
        </div>
        <Atom v-if="isMobile" @click="returnToTop" />
        <img v-else class="logo" src="/images/uranus.png" alt="website-logo" @click="returnToTop">
    </div>
</template>

<script setup lang="ts">
const isMobile = ref(false);

onMounted(() => {
    if(window.innerWidth <= 960) {
        isMobile.value = true;
    }
})

function scrollTo(id: string) {
    const top: any = document.getElementById(id)?.offsetTop;
    scroll({ top: top - 100, behavior: 'smooth' });
}

function returnToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<style scoped>

.logo {
    height: 6rem;
    width: 6rem;
    padding: 1.5rem;
    margin-left: auto;
    cursor: pointer;
}

.links {
    text-align: center;
    list-style: none;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1.5rem;
    transition: all .5s ease-in-out;
}

.topnav {
    z-index: 99;
    position: fixed;
    top: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    transition: all .5s ease-in-out;
    background-color: #0a192f;
}

@media only screen and (max-width: 768px) {
    .links {
        display: none;
        flex-direction: column;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }

    .logo {
        display: none;
    }
}

.menu-btn {
    position: absolute;
    top: 2.5rem;
    right: 2rem;
}

li a {
    text-decoration: none;
    padding: 10px 15px;
    color: #48cae4;
    /* color: #fff; */
}

li {
    margin-right: 2rem;
}

li:hover {
    transition: all 300ms ease-in-out;
    transform: scale(1.1, 1.1);
}

.button {
    border-radius: 4px;
    color: #48cae4;
    border: 1px solid;
    padding: 0.75rem 1rem;
    text-decoration: none;
    cursor: pointer;
}

/*button click hover effect*/
nav ul li:hover {
    transform: scale(.9, .9);
}
</style>