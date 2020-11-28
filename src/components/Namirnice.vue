<template>
  <div>
    <div class="background py-6">
      <div class="columns is-multiline is-centered">
        <div class="column is-full">
          <div>
            <div class="fridge-top" v-if="fridgeOpen">
              <div @click="fridgeOpen = !fridgeOpen" class="fridge-door" />
              <div class="columns is-multiline pl-3">
                <div class="column is-full">Fridge</div>
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
                      placeholder="Ingredient name"
                      v-model="fridgeIngredient"
                      icon="magnify"
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
              <div @click="fridgeOpen = !fridgeOpen" class="fridge-handle" />
            </div>
            <div class="fridge-bottom mt-3">
              <div class="columns is-multiline">
                <div class="column is-full">Freezer</div>
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
                      placeholder="Ingredient name"
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
          </div>
        </div>
        <div class="column is-full">
          <div class="columns is-multiline has-text-centered">
            <div class="column is-full">
              <span class="recipe-text">List of found recipes:</span>
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
      fridgeOpen: false,
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
  },
};
</script>

<style>
.tag {
  border-radius: 12px !important;
}
.closed-fridge {
  background-color: rgb(75, 28, 75) !important;
}
.fridge-handle:hover {
  cursor: pointer;
}
.fridge-door:hover {
  cursor: pointer;
}
.fridge-door {
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 15px;
  height: 450px;
  background-color: white;
  border-right: 1px solid black;
}
.fridge-handle {
  position: absolute;
  bottom: 25px;
  right: 25px;
  width: 30px;
  height: 65px;
  background-color: white;
  border: 1px solid black;
}
.fridge-top {
  position: relative;
  max-height: 450px;
  height: 450px;
  overflow: auto;
  width: 600px;
  padding: 15px;
  text-align: center;
  border-radius: 5%;
  background: white;
  border: 2px solid rgba(124, 63, 209, 1);
}
.fridge-bottom {
  width: 600px;
  padding: 15px;
  text-align: center;
  border-radius: 5%;
  background: white;
  border: 2px solid rgba(124, 63, 209, 1);
}
.background {
  background: rgb(228 218 255 / 25%);
}
.recipe-text {
  font-size: 1.5em;
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
</style>
