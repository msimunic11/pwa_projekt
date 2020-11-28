import axios from 'axios';

const apiKey = "e2cc2a228caa4ab59852f65e193ff042";

const apiService = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getRecipes(ingredients) {
    const ingredientsString = ingredients.join(",");
    return apiService.get(`/findByIngredients`, {
      params: {
        ingredients: ingredientsString,
        apiKey
      }
    });
  }
}