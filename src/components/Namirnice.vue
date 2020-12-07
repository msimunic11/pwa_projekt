<template>
  <div>
    <div class="background py-6">
      <div class="columns is-multiline is-centered">
        <div class="column is-full">
          <div>
            <div class="fridge-top" v-if="fridgeOpen">
              <div @click="fridgeOpen = !fridgeOpen" class="fridge-door">
                <span> x </span>
              </div>
              <div class="columns is-multiline pl-3">
                <div
                  class="column is-full py-1"
                  v-for="(ingredient, i) in fridgeIngredients"
                  :key="i"
                >
                  <b-tag
                    size="is-medium"
                    type="is-primary"
                    style="width: 100%"
                    closable
                    aria-close-label="Close tag"
                    @close="deleteFridgeIngredient(i)"
                  >
                    {{ ingredient }}
                  </b-tag>
                </div>
                <div class="column is-full">
                  <b-field>
                    <b-input
                      placeholder="Add into the fridge:"
                      v-model="fridgeIngredient"
                      icon-right="plus-circle"
                      icon-right-clickable
                      @icon-right-click="addFridgeIngredient"
                    >
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>

            <div class="fridge-top closed-fridge" v-else>
              <div @mouseover="upHere = true" @mouseleave="upHere = false" @click="fridgeOpen = !fridgeOpen" class="fridge-handle" >
                <some-component v-show="upHere">Open fridge</some-component>
              </div>
            </div>
            <div class="fridge-bottom" v-if="fridgeOpen2">
              <div @click="fridgeOpen2 = !fridgeOpen2" class="fridge-door2">
                <span> x </span>
              </div>
              <div class="columns is-multiline pl-3">
                <div
                  class="column is-full py-1"
                  v-for="(ingredient, i) in freezerIngredients"
                  :key="i"
                >
                  <b-tag
                    size="is-medium"
                    type="is-primary"
                    style="width: 100%"
                    closable
                    aria-close-label="Close tag"
                    @close="deleteFreezerIngredient(i)"
                  >
                    {{ ingredient }}
                  </b-tag>
                </div>
                <div class="column is-full">
                  <b-field>
                    <b-input
                      placeholder="Add into the freezer:"
                      v-model="freezerIngredient"
                      icon="magnify"
                      icon-right="plus-circle"
                      icon-right-clickable
                      @icon-right-click="addFreezerIngredient"
                    >
                    </b-input>
                  </b-field>
                </div>
              </div>
            </div>
            <div class="fridge-bottom closed-fridge" v-else>
              <div @mouseover="upHere2 = true" @mouseleave="upHere2 = false" @click="fridgeOpen2 = !fridgeOpen2" class="fridge-handle2" >
                <some-component2 v-show="upHere2">Open freezer</some-component2>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-full">
          <div class="columns is-multiline has-text-centered">
            <div class="column is-full">
              <span class="recipe-text">RECIPES TO MAKE:</span>
            </div>
            <div class="column is-full" ref="recipes">
              <span v-if="recipes && recipes.length == 0"
                >Not a single recipe was found!</span
              >
              <div class="columns px-6 is-multiline" v-else>
                <div
                  class="column is-one-third-desktop is-full-tablet"
                  v-for="(recipe, i) in recipes"
                  :key="i"
                >
                  <b-message
                    :class="{
                      'is-success': recipe.missedIngredientCount == 0,
                      'is-danger': recipe.missedIngredientCount != 0,
                    }"
                  >
                    <div class="recipe-box">
                      <div class="recipe-image">
                        <b-image :src="recipe.image" />
                      </div>
                      <div class="recipe-description">
                        <span class="recipe-title has-text-weight-bold">{{
                          recipe.title
                        }}</span>
                        <span v-if="recipe.missedIngredientCount != 0"
                          >Missing
                          {{ recipe.missedIngredientCount }}
                          ingredients!</span
                        >
                        <span class="recipe-available-ingredients pt-2">
                          <b-tag
                            class="is-success"
                            v-if="recipe.missedIngredientCount == 0"
                            >You have all the ingredients!</b-tag
                          >
                          <b-tag
                            class="is-danger m-1"
                            v-else
                            v-for="(ingredient, i) in recipe.missedIngredients"
                            :key="i"
                            >{{
                              ingredient.name.charAt(0).toUpperCase() +
                              ingredient.name.slice(1)
                            }}</b-tag
                          >
                        </span>
                      </div>
                    </div>
                  </b-message>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RecipeService from "../services/RecipeService";

export default {
  name: "app",
  mounted() {
    this.getRecipes();
  },
  data() {
    return {
      upHere : false,
      upHere2 : false,
      fridgeOpen: false,
      fridgeOpen2: false,
      recipes: [],
      fridgeIngredient: "",
      freezerIngredient: "",
      fridgeIngredients: ["Milk", "Apples", "Eggs"],
      freezerIngredients: ["Beans"],
    };
  },
  methods: {
    getRecipes() {
      const loadingComponent = this.$buefy.loading.open({
        container: this.$refs.recipes.$el,
      });
      RecipeService.getRecipes([
        ...this.fridgeIngredients,
        ...this.freezerIngredients,
      ])
        .then((response) => {
          this.recipes = response.data;
        })
        .finally(() => {
          loadingComponent.close();
        });
    },
    addFridgeIngredient() {
      if (this.fridgeIngredient != "") {
        this.fridgeIngredients.push(this.fridgeIngredient);
        this.fridgeIngredient = "";
        this.getRecipes();
      }
    },
    addFreezerIngredient() {
      if (this.freezerIngredient != "") {
        this.freezerIngredients.push(this.freezerIngredient);
        this.freezerIngredient = "";
        this.getRecipes();
      }
    },
    deleteFridgeIngredient(i) {
      this.fridgeIngredients.splice(i, 1);
      this.getRecipes();
    },
    deleteFreezerIngredient(i) {
      this.freezerIngredients.splice(i, 1);
      this.getRecipes();
    },
    mouseEnter: function () {
      this.toShowOnHover = !this.toShowOnHover;
    },
    mouseLeave: function () {
      this.toShowOnHover = false;
    },
  },
};
</script>

<style>
.tag {
  border-radius: 12px !important;
}
.closed-fridge {
  background-color: #7c3fd1 !important;
}
.fridge-handle:hover {
  cursor: pointer;
}
.fridge-door:hover {
  cursor: pointer;
}
.fridge-handle2:hover {
  cursor: pointer;
}
.fridge-door2:hover {
  cursor: pointer;
}
.fridge-door {
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 15px;
  height: 400px;
  background-color: white;
  border-right: 1px solid rgba(124, 63, 209, 1);
}
.fridge-door2 {
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 15px;
  height: 145px;
  background-color: white;
  border-right: 1px solid rgba(124, 63, 209, 1);
}
.fridge-handle {
  position: absolute;
  right: 20px;
  width: 20px;
  height: 135px;
  background-color: white;
  border-radius: 10px;
  border-right: 2px solid rgb(148 119 228 / 90%);
}
.fridge-handle2 {
  position: absolute;
  bottom: 80px;
  right: 20px;
  width: 20px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  border-right: 2px solid rgb(148 119 228 / 90%);
}
.fridge-top {
  position: relative;
  max-height: 400px;
  height: 400px;
  overflow: auto;
  width: 250px;
  padding: 15px;
  text-align: center;
  border-radius: 2%;
  background: white;
  border: 2px solid rgba(124, 63, 209, 1);
}
.fridge-bottom {
  width: 250px;
  position: relative;
  height: 150px;
  padding: 15px;
  text-align: center;
  border-radius: 2%;
  background: white;
  border: 2px solid rgba(124, 63, 209, 1);
  margin-top: 2px;
}
.background {
  background: rgb(228 218 255 / 25%);
}
.recipe-text {
  font-size: 1.5em;
  color: rgba(124, 63, 209, 1);
  font-weight: 700;
}
.recipe-box {
  display: flex;
  flex-direction: row;
}
.recipe-description {
  display: flex;
  flex-direction: column;
}
.recipe-image img {
  width: 150px !important;
  height: 150px !important;
  border-radius: 24px;
}
.recipe-title {
  font-size: 1.2rem;
}
some-component{
    background-color: #7957d5;
    border-radius: 10px;
    margin-top: 100px;
    padding: 10px;
    float: right;
    color: white;
    width: 115px;
}
some-component2{
  background-color: #7957d5;
    border-radius: 10px;
    padding: 10px;
    color: white;
    width: 120px;
    float: left;

}
</style>
