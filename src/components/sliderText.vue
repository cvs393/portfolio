<template>
    <div>
      <div class="row">
      <div class="content-slider col-4">
        <div class="slider">
          <div class="mask">
            <ul>
              <li class="anim1">
                <div class="quote">Hello, this is a quote from a person. This person recommends Courtney highly.</div>
                <div class="source">- Person</div>
              </li>
              <li class="anim2">
                <div class="quote">I loved working with Courtney on all my projects.</div>
                <div class="source">- Another person</div>
              </li>
              <li class="anim3">
                <div class="quote">Courtney works so hard she doesn't even know what Netflix is!</div>
                <div class="source">- Animal</div>
              </li>
              <li class="anim4">
                <div class="quote">Hello, this is a quote from a plant.</div>
                <div class="source">- Plant</div>
              </li>
              <li class="anim5">
                <div class="quote">Please hire her. Please.</div>
                <div class="source">- Courtney</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="content-slider offset-4 col-4">
        <div class="slider">
          <div class="mask">
            <ul>
              <li class="anim1">
                <div class="quote">Courtney is the best!</div>
                <div class="source-right">- Person</div>
              </li>
              <li class="anim2">
                <div class="quote">I would hire Courtney in a heartbeat.</div>
                <div class="source-right">- Another person</div>
              </li>
              <li class="anim3">
                <div class="quote">You can trust this review, I'm 100% legit. Believe me. Courtney is awesome!!</div>
                <div class="source-right">- Animal</div>
              </li>
              <li class="anim4">
                <div class="quote">Hello, this is a quote from a plant.</div>
                <div class="source-right">- Plant</div>
              </li>
              <li class="anim5">
                <div class="quote">How do ya like that.</div>
                <div class="source-right">- Cassidy</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<style lang="css" scoped>

h1 {
  font-size: 60px;
  text-align: center;
}

.content-slider {
  width: 100%;
  height: 100px;
}

.slider {
  height: 100%;
  width: 100%;
  overflow: visible;
  position: relative;
}

.mask {
  overflow: hidden;
  height: 100%;
}

.slider ul {
  margin: 0;
  padding: 0;
  position: relative;
  height:100%;
}

.slider li {
  width: 100%;
  height: 100%;
  position: absolute;
  top: -325px;
  list-style: none;
  display:flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
}

.slider .quote {
  font-size: 20px;
  font-style: italic;
  font-family: 'made-mirage';
  text-align: center;
}

.slider .source {
  font-size: 16px;
  text-align: right;
  font-family: 'made-mirage';
}
.slider .source-right {
  font-size: 16px;
  text-align: left;
  font-family: 'made-mirage';
}

.slider li.anim1 {
  animation: cycle 15s linear infinite;
}

.slider li.anim2 {
  animation: cycle2 15s linear infinite;
}

.slider li.anim3 {
  animation: cycle3 15s linear infinite;
}

.slider li.anim4 {
  animation: cycle4 15s linear infinite;
}

.slider li.anim5 {
  animation: cycle5 15s linear infinite;
}

.slider:hover li {
 /* animation-play-state: paused;*/
}

@keyframes cycle {
  0% {
    top: 0px;
  }
  4% {
    top: 0px;
  }
  16% {
    top: 0px;
    opacity: 1;
    z-index: 0;
  }
  20% {
    top: 325px;
    opacity: 0;
    z-index: 0;
  }
  21% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
  50% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
  92% {
    top: -325px;
    opacity: 0;
    z-index: 0;
  }
  96% {
    top: -325px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}

@keyframes cycle2 {
  0% {
    top: -325px;
    opacity: 0;
  }
  16% {
    top: -325px;
    opacity: 0;
  }
  20% {
    top: 0px;
    opacity: 1;
  }
  24% {
    top: 0px;
    opacity: 1;
  }
  36% {
    top: 0px;
    opacity: 1;
    z-index: 0;
  }
  40% {
    top: 325px;
    opacity: 0;
    z-index: 0;
  }
  41% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
  100% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
}

@keyframes cycle3 {
  0% {
    top: -325px;
    opacity: 0;
  }
  36% {
    top: -325px;
    opacity: 0;
  }
  40% {
    top: 0px;
    opacity: 1;
  }
  44% {
    top: 0px;
    opacity: 1;
  }
  56% {
    top: 0px;
    opacity: 1;
    z-index: 0;
  }
  60% {
    top: 325px;
    opacity: 0;
    z-index: 0;
  }
  61% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
  100% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
}

@keyframes cycle4 {
  0% {
    top: -325px;
    opacity: 0;
  }
  56% {
    top: -325px;
    opacity: 0;
  }
  60% {
    top: 0px;
    opacity: 1;
  }
  64% {
    top: 0px;
    opacity: 1;
  }
  76% {
    top: 0px;
    opacity: 1;
    z-index: 0;
  }
  80% {
    top: 325px;
    opacity: 0;
    z-index: 0;
  }
  81% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
  100% {
    top: -325px;
    opacity: 0;
    z-index: -1;
  }
}

@keyframes cycle5 {
  0% {
    top: -325px;
    opacity: 0;
  }
  76% {
    top: -325px;
    opacity: 0;
  }
  80% {
    top: 0px;
    opacity: 1;
  }
  84% {
    top: 0px;
    opacity: 1;
  }
  96% {
    top: 0px;
    opacity: 1;
    z-index: 0;
  }
  100% {
    top: 325px;
    opacity: 0;
    z-index: 0;
  }
}


</style>