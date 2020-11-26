import axios from 'axios';

const apiService = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes',
    headers:{
        Accept:"application/json",
        "Content-TYpe:": "application/json"
    }
});
const recipeOne = apiService.get( '/search?findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=e2cc2a228caa4ab59852f65e193ff042')

export default{
    getCourseType(){
        return([recipeOne])
    }
}