<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <vjezba></vjezba>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import vjezba from "./components/vjezba.vue";

export default {
  name: "App",
  components: {
    Header: Header,
    Footer: Footer,
    vjezba: vjezba,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style>
* {
  margin: auto;
}
.left {
  float: left;
  width: 35%;
  font-size: 22px;
  color: rgb(124, 63, 209);
}
.right {
  float: right;
  width: 37%;
}
.left h1 {
  font-size: 45px;
  font-family: Indie flower;
}
.fridge-list {
  border: 2px solid black;
  text-align: center;
  height: 500px;
  width: 250px;
}
img.resize {
  width: 250px;
}
button.button.add-button.is-primary {
  width: 100%;
}
.navbar-item.has-dropdown {
  color: rgb(124, 63, 209);
  font-weight: bold;
}

a.navbar-item {
  color: rgb(124, 63, 209);
  font-weight: bold;
}
.navbar-menu {
  background-color: rgba(121, 87, 213, 0.25);
}
.footer {
  text-align: center;
  color: rgb(124, 63, 209);
  font-weight: bold;
  text-transform: uppercase;
  padding: 5rem 0rem !important;
}
@font-face {
  font-family: "Indie Flower";
  src: local("Indie_Flower"),
    url(./fonts/Indie_Flower/IndieFlower-Regular.ttf) format("truetype");
}
@media only screen and (max-width: 800px) {
  .left,
  .right {
    width: 100%;
    float: none;
    padding: 20px;
    text-align: center;
  }
}
</style>
