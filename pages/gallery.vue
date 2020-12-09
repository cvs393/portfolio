<template>
  <div class="big-boy">
    <div>
      <h1>GALLERY</h1>
    </div>

    <section id="portfolio">
      <div class="project">
        <img
          class="project__image"
          src="~/assets/gallery/1.png"
        />
        <p>GHOUL TRASH</p>
        <h3 class="grid__title">CYBERNETIC TRASH SERIES #1</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>

      <div class="project">
        <img
          class="project__image"
          src="~/assets/gallery/2.png"
        />
        <p>IMPOSTER</p>
        <h3 class="grid__title">CYBERNETIC TRASH SERIES #2</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>

      <div class="project">
        <img
          class="project__image"
          src="~/assets/gallery/3.png"
        />
        <p>BOYS</p>
        <h3 class="grid__title">AESTHETICS B</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>

      <div class="project">
        <img
          class="project__image"
          src="~/assets/gallery/4.png"
        />
        <p>FUTURE || FEMALE</p>
        <h3 class="grid__title">AESTHETICS F</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      <div class="project">
        <img
          class="project__image"
          src="~/assets/gallery/5.png"
        />
        <p>REFLECTION</p>
        <h3 class="grid__title">AESTHETICS R</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>

      <div class="project">
        <img
          class="project__image"
          src="~/assets/gallery/6.png"
        />
        <p>MACINTOSH++</p>
        <h3 class="grid__title">AESTHETICS M</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>

      <div class="project">
        <img
          class="project__image"
          src="~/assets/gallery/7.png"
        />
        <p>OXYTOCIN</p>
        <h3 class="grid__title">AESTHETICS O</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>

      <div class="project">
        <img
          class="project__image"
          src="~/assets/gallery/8.png"
        />
        <p>PASTEL PACIFIC</p>
        <h3 class="grid__title">AESTHETICS P</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      <div class="overlay">
        <div class="overlay__inner">
          <img />
        </div>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    const buttons = document.querySelectorAll('.project')
    const overlay = document.querySelector('.overlay')
    const overlayImage = document.querySelector('.overlay__inner img')

    function open(e) {
      overlay.classList.add('open')
      const src = e.currentTarget.querySelector('img').src
      overlayImage.src = src
    }

    function close() {
      overlay.classList.remove('open')
    }

    buttons.forEach((button) => button.addEventListener('click', open))
    overlay.addEventListener('click', close)
  }

}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Inconsolata|Merriweather');

$body: 'Inconsolata', monospace;
$big: 'Merriweather', serif;

$white: #ffffff;
$primary:  #ece9e3;
$secondary: #e0d7c3;
$light: #d3d2d2;
$dark: #474545;

$ease: all 0.3s ease-in-out;

body {
  font-family: $body;
  margin: 0;
}

button {
  cursor: pointer;
}

#portfolio {
  width: 100%;
  min-height: 100vh;
  background: $white;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-gap: 2px;
}
.project {
  position: relative;
  background: $primary;
  overflow: hidden;
  img {
    position: absolute;
    opacity: 0.9;
  }
  p {
    position: absolute;
    text-align: center;
    width: 100%;
    padding: 1em 0;
    text-transform: uppercase;
    letter-spacing: 2px;
    z-index: 3;
  }
  .grid__title {
    position: absolute;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    bottom: 0;
    font-weight: 100;
    font-size: 0.8em;
    z-index: 3;
    text-transform: uppercase;
    color: $dark;
    letter-spacing: 2px;
  }
}

// project hover overlay
.project:hover .grid__overlay {
  transform: translateY(0%);
}

.grid__overlay {
  background: rgba(darken($primary, 10%), .9);
  height: 100%;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  transform: translateY(101%);
  transition: $ease;
  button {
    &:hover {
      transition: $ease;
      color: $secondary;
      transform: scale(1.05);
    }
  }
}

//project popup overlay

.overlay {
  position: fixed;
  background: rgba($dark, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  z-index: 3;
}
.overlay.open {
  display: grid;
  align-items: center;
  justify-items: center;
}

.overlay__inner {
  background: $white;
  width: 700px;
  padding: 20px;
  position: relative;
  opacity: 1;
}

.close {
  position: absolute;
  top: 3px;
  right: 10px;
  background: none;
  outline: 0;
  color: $dark;
  border: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  &:hover {
    color: $secondary;
  }
}

.project__image {
 // margin-left: -50%;
}
/*.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other *
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}

/* Responsive layout - makes a two column-layout instead of four columns *
@media screen and (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other *
@media screen and (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}*/

//script for 
</style>

