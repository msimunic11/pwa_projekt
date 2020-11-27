
<template>
  <div id="app">
    <Header></Header>
    <router-view />
    
    <vjezba></vjezba>
    <Footer></Footer>
    <axios></axios>
   
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
input.input {
  width: 250px;
  text-align: center;
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
  font-size: 30px;
  font-family: Indie flower;
}

.fridge-top {
  width: 250px;
  margin: auto;
  border: 3px solid white;
  border-radius: 2%;
  text-align: center;
  height: 400px;
  background: linear-gradient(
    90deg,
    rgba(124, 63, 209, 1) 0%,
    rgba(202, 176, 238, 0.83) 100%
  );
  border: 2px solid rgba(124, 63, 209, 1);
}

.fridge-bottom {
  width: 250px;
  margin: auto;
  border: 3px solid white;
  text-align: center;
  height: 150px;
  border-radius: 5%;
  background: linear-gradient(
    90deg,
    rgba(124, 63, 209, 1) 0%,
    rgba(202, 176, 238, 0.83) 100%
  );
  border: 2px solid rgba(124, 63, 209, 1);
}
button.add-button {
  height: 40px;
  width: 80px;
}

.fridge-list {
  border: 2px solid black;
  text-align: center;
  height: 500px;
  width: 250px;
}

.catch {
  background-color: white;
  width: 50px;
  height: 10px;
  margin-top: 350px;
  margin-left: 15px;
  border-radius: 5px;
}

.catch2 {
  background-color: white;
  width: 50px;
  height: 10px;
  margin-top: 40px;
  margin-left: 15px;
  border-radius: 5px;
}
img.resize {
  width: 250px;
}
.input1 {
  width: 250px;
  margin: auto;
  border: 3px solid white;
  text-align: center;
  border-radius: 5%;
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
}

@media only screen and (max-width: 800px) {
  /* For mobile phones: */
  .left,
  .right {
    width: 100%;
    float: none;
    padding: 20px;
    text-align: center;
  }
 
}
</style>

