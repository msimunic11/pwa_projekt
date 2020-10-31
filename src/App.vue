<template>
  <div id="app">
    <b-navbar>
      <template slot="start">
        <img class="resize" src="./assets/logo.png" />

        <b-navbar-item href="#"> HOME </b-navbar-item>
        <b-navbar-item href="#"> DOCUMENTATION </b-navbar-item>
        <b-navbar-dropdown label="INFO">
          <b-navbar-item href="#"> About </b-navbar-item>
          <b-navbar-item href="#"> Contact </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>SIGN UP</strong>
            </a>

            <b-button type="is-primary" outlined>LOG IN</b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="container">
      <div class="left">
        <hr />
        <h1>
          Welcome to <b><i>What's in my fridge?</i></b>
        </h1>
        <p>
          The best way to reduce food waste and save money? Check what you
          already have in your fridge. Don't buy the same thing twice. See what
          you have anytime & anywhere on your mobilephone in the tram or in the
          comfort of your home.
        </p>
        <hr />
        <p>
          Open the fridge. Type and add all the food you posses and don't waste
          time and money for the recipe you already have the food for.
        </p>
      </div>

      <div class="right">
        <img src="./assets/food.png" alt="food" class="food" />
      </div>
      <div class="fridge-top">
        <div class="catch"></div>
      </div>

      <div class="fridge-bottom">
        <div class="catch2"></div>
      </div>
      <div class="input1">
        <input
          class="input"
          placeholder="Type your groceries here:"
          v-model="newToDo"
        />
        <b-button type="is-primary" class="add-button" v-on:click="add()"
          >ADD</b-button
        >
      </div>
    </div>
    <footer>
      <div class="footer">
        <p>Powered by: Marija | TVZ | PWA | What's in my fridge?</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {};
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
  background-color: rgb(124, 63, 209);
}

.fridge-bottom {
  width: 250px;
  margin: auto;
  border: 3px solid white;
  text-align: center;
  height: 150px;
  border-radius: 5%;
  background-color: rgb(124, 63, 209);
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

  width: 40px;
  height: 10px;
  margin-top: 350px;
  margin-left: 15px;
}

.catch2 {
  background-color: white;

  width: 40px;
  height: 10px;
  margin-top: 40px;
  margin-left: 15px;
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