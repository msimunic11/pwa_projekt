<template>
  <div class="container py-6">
    <div class="left">
      <hr />
      <h1>Welcome to</h1>
      <h1>
        <b>What's in my fridge?</b>
      </h1>
      <p>
        The best way to reduce food waste and save money? Check what you already
        have in your fridge. Don't buy the same thing twice. See what you have
        anytime & anywhere on your mobilephone in the tram or in the comfort of
        your home.
      </p>
      <hr />
      <p>
        Go to <b>MY FRIDGE</b>. Type and add all the food you posses and don't
        waste time and money for the recipe you already have the food for.
      </p>
    </div>
    <div class="right">
      <img src="../assets/food.png" alt="food" class="food" />
    </div>
    <div class="fridge-top-home">
      <div class="catch"></div>
    </div>
    <div class="fridge-bottom-home">
      <div class="catch2"></div>
    </div>
  </div>
</template>

<style>
.fridge-top-home {
  width: 250px;
  height: 400px;
  padding: 15px;
  text-align: center;
  border-radius: 2%;
  background: rgba(124, 63, 209, 1);
  border: 2px solid #7c3fd1;
}
.fridge-bottom-home {
  width: 250px;
  height: 150px;
  padding: 15px;
  text-align: center;
  border-radius: 2%;
  background: rgba(124, 63, 209, 1);
  margin-top: 3px;
}

.catch {
  background-color: white;
  width: 20px;
  height: 135px;
  margin-right: 5px;
  border-radius: 10px;
  border-right: 2px solid rgb(189 165 255 / 90%);
}
.catch2 {
  background-color: white;
  width: 20px;
  height: 50px;
  margin-top: 5px;
  margin-right: 6px;
  border-radius: 10px;
  border-right: 2px solid #bea8f7;
}
</style>