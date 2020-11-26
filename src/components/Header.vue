<template>
  <b-navbar>
    <template slot="start">
      <img class="resize" src="../assets/logo.png" />

      <b-navbar-item href="#">
        <router-link to="/">HOME</router-link>
      </b-navbar-item>
      <b-navbar-item href="#">
        <router-link to="/namirnice">MY FRIDGE</router-link>
      </b-navbar-item>

      <b-navbar-dropdown label="INFO">
        <b-navbar-item href="#"> <router-link to="/vjezba">About</router-link> </b-navbar-item>
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
</template>

    <style>
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
</style>

    <script>
</script>