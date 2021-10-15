<template>
  <div id="app">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Header from "./components/Header.vue";

export default {
  name: 'app',
  components: {
    Main,
    Header
  }
}
</script>

<style>
:root{
    --main-color: #eee;
    --primary-color: #333;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
body,
html {
  margin: 0;
  padding: 0;
  min-height: 100%;
  display: flex;
}

body::-webkit-scrollbar {
  width: 0.5em;
}
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
body::-webkit-scrollbar-thumb {
  outline: 1px solid #fff;
  background-color: #fff;
}

mark {
  color: #232121;
  padding: 0 5px;
  background-color: #ccb82d;
  border-radius: 2px;
  box-shadow: 2px 3px 1px #00000045;
}

#app {
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  background-color: var(--main-color);
  transition: all 0.5s ease-in-out;
  font-family: Inter, system-ui, -apple-system, "Roboto Regular", "Segoe UI";
}
</style>
