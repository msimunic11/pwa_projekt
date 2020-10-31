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

   
<div class="input1">
  <section>
        <b-field label="Name">
            <b-input placeholder="Name&Surname"></b-input>
        </b-field>

        <b-field label="Email"
            type="is-danger"
            message="This email is invalid">
            <b-input type="email"
                placeholder="Email"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username"
            type="is-success"
            message="This username is available">
            <b-input placeholder="Username" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password"
            type="is-warning"
            :message="['Password is too short', 'Password must have at least 8 characters']">
            <b-input placeholder="Password" type="password" maxlength="30"></b-input>
        </b-field>

       
    </section>

  </div>
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
  border-radius: 2%;
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
.input1{
  
  width: 250px;
  margin: auto;
  border: 3px solid white;
  text-align: center;
  border-radius: 2%;
  
}
button.button.add-button.is-primary {
    width: 100%;
    
}
</style>
