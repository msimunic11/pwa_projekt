<template>
  <div>
    <div class="background">
      
          

      <div class="ani">
        <div class="ani3"></div>
        <div class="index container">
          <ul style="list-style-type: bullet">
            <li :data="data" v-for="(todo, i) in existingToDo" v-bind:key="i">
              <span class="chip">
                {{ todo.text }}
                <b-button
                  type="is-primary"
                  class="delete-button"
                  @click="deleteToDo(i)"
                  >X</b-button
                >
              </span>
            </li>
          </ul>
          <form>
            <input
              type="text"
              class="input"
              placeholder="Add into the fridge:"
              v-model="newToDo"
            />
            <b-button type="is-primary" class="add-button" v-on:click="add()"
              >ADD</b-button
            >
          </form>
        </div>
      </div>

      <div class="ani2">
        <div class="index container">
          <ul style="list-style-type: bullet">
            <li v-for="(todo, i) in existingToDo2" v-bind:key="i">
              <span class="chip">
                {{ todo.text }}
                <b-button
                  type="is-primary"
                  class="delete-button"
                  @click="deleteToDo2(i)"
                >
                  X
                </b-button></span
              >
            </li>
          </ul>
          <form>
            <input
              type="text"
              class="input"
              placeholder="Add into the freezer:"
              v-model="newToDo2"
            />
            <b-button type="is-primary" class="add-button2" v-on:click="add2()"
              >ADD</b-button
            >
          </form>
        </div>
      </div>
      <div class="tasks">
        <b-table :data="data">
         <!-- Comment <b-table-column field="title" label="Recipe" v-slot="props">
            {{ props.row.title }}
          </b-table-column>
          <b-table-column
            field="ingredients"
            label="Missed Ingredients"
            v-slot="props"
          >
            {{ props.row.missedIngredientCount }}
          </b-table-column>-->

          <b-table-column label="RECIPES TO MAKE!" v-slot="props">{{ props.row.title }}</b-table-column>
          <b-table-column label="MISSED INGREDIENTS..." v-slot="props">{{ props.row.missedIngredientCount }}</b-table-column>
        </b-table>
<!--
        <section>
        
          <b-image
            v-bind:key="id"
            src="https://spoonacular.com/recipeImages/${id}-90x90.jpg"
            src-fallback="https://picsum.photos/id/237/600/400"
            ratio="3by2"
            @load="onLoad"
            @error="onError"
        ></b-image>
        <pre style="max-height: 400px"><b>Events:</b>{{ events }}</pre>
    </section> -->
      </div>
    </div>
  </div>
</template>
<script>
import getCourseType from "../services/RecipeService";
import axios from "axios";
export default {
  name: "app",
  created() {
    getCourseType.getCourseType().then(
      axios.spread((...res) => {
        this.recipes = res;
        console.log("RESPONSE", res);
      })
    );
  },
  mounted() {
    fetch(
      "https://api.spoonacular.com/recipes/findByIngredients?ingredients=(data) existingToDo: {text: string}&number=4&apiKey=e2cc2a228caa4ab59852f65e193ff042"
    )
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
      });
  },

  data() {
    return {
      recipes: [],
      newToDo: "",
      existingToDo: [
        { text: "Milk", id: 0 },
        { text: "Apples", id: 1 },
        { text: "Eggs", id: 2 },
      ],
      existingToDo2: [
        { text: "Fish", id: 0 },
        { text: "Beans", id: 1 },
        { text: "Water", id: 2 },
      ],
      title: true,
      missedIngredientCount: true,
      id: true,
      events: [],
    };
  },
  methods: {
    add() {
      this.existingToDo.push({
        text: this.newToDo,
        id: new Date().valueOf(),
      }),
        (this.newToDo = "");
    },
    add2() {
      this.existingToDo2.push({
        text: this.newToDo2,
        id: new Date().valueOf(),
      }),
        (this.newToDo2 = "");
    },
    deleteToDo(i) {
      this.existingToDo.splice(i, 1);
    },
    deleteToDo2(i) {
      this.existingToDo2.splice(i, 1);
    },
    onLoad(event, src) {
      this.events.push(`${src} loaded`);
    },
    onError(event, src) {
      this.events.push(`${src} fails to load`);
    },
  },
};
</script>

<style>
.chip {
  font-size: 12px;
  border-radius: 50px;
  background: rgba(121, 87, 213, 0.25);
  padding: 5px;
  float: left;
  color: #552fbc;
}

input {
  display: none;
}
.ani {
  width: 250px;
  height: 400px;
  padding: 5px;
  display: block;

  margin: auto;

  text-align: center;

  border-radius: 2%;
  background: white;
  border: 2px solid rgba(124, 63, 209, 1);
}

.ani2 {
  width: 250px;
  height: 150px;
  padding: 5px;

  display: block;

  margin: auto;

  text-align: center;

  border-radius: 5%;
  background: white;
  border: 2px solid rgba(124, 63, 209, 1);
}
.ani5 {
  width: 400px;
  height: 400px;
  padding: 5px;

  display: block;

  margin: auto;

  text-align: center;

  border-radius: 1%;
  background: white;
  border: 2px solid rgba(124, 63, 209, 1);
  float:right;
}
.add-button2 {
  width: 100%;
}
.background {
  background: rgb(228 218 255 / 25%);
}
ul .button.is-primary {
  background-color: rgba(121, 87, 213, 0.25);

  color: #fff;
  float: right;
  border-radius: 28px;
  font-size: 10px;
}

input.input {
  border: white;
  border-bottom: 1px solid rgba(121, 87, 213, 0.8);
  width: 125px;
  text-align: center;
  border-radius: 20px;
  margin: auto;
  float: left;
  height: 37px;
  font-size: 12px;
}
button.button.add-button2.is-primary {
  font-size: 12px;
  float: left;
  width: 47px;
  height: 37px;
  border-radius: 20px;
}
button.button.add-button.is-primary {
  font-size: 12px;
  float: left;
  width: 47px;
  height: 37px;
  border-radius: 20px;
}

.b-table .table {
    
    background-color: transparent;
    text-align: center;
    width:200px;

}
tr {
   
    color: #7957d5;
    font-weight: 350;
}


</style>

