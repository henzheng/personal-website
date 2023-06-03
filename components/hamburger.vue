<template>
    <div class="menu-btn">
        <div class="menu-btn__burger"></div>
    </div>
</template>

<script setup>
onMounted(() => {
    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
            for (var hidden of document.getElementsByClassName("links")) {
                hidden.style.display = "grid"
            }
            document.getElementsByClassName("topnav")[0].style.height = "9rem"
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
            for (var visible of document.getElementsByClassName("links")) {
                visible.style.display = "none"
            }
            document.getElementsByClassName("topnav")[0].style.height = "5rem"
        }
    });
})
</script>

<style scoped>
.menu-btn {
    display: none;
}

@media only screen and (max-width: 768px) {
    .menu-btn {
        display: block;
    }
}

.menu-btn__burger {
    width: 44px;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, .2);
    transition: all .25s ease-in-out;
    cursor: pointer;
}

.menu-btn__burger::before,
.menu-btn__burger::after {
    content: '';
    position: absolute;
    width: 44px;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, .2);
    transition: all .25s ease-in-out;
}

.menu-btn__burger::before {
    transform: translateY(-16px);
}

.menu-btn__burger::after {
    transform: translateY(16px);
}

/* ANIMATION */
.menu-btn.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
}

.menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
}

.menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
}
</style>