<template>
  <div class="tasks">
    
    <b-table
      
      :data="data"
     
    >
        <b-table-column v-slot="props">{{ props.row.title }}</b-table-column>
        <b-table-column v-slot="props">{{ props.row.missedIngredientCount }}</b-table-column>

      
     
      
    </b-table>
   

    
  </div>
</template>

<script>
export default {
  name: 'Recipes',
  mounted() {
    fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=e2cc2a228caa4ab59852f65e193ff042')
      .then((response) => response.json())
      .then((data) => {
        this.data = data
        
      })
  },
  
  data() {
    return {
      title: true,
      missedIngredientCount: true,
      id: true,
      image: "https://spoonacular.com/recipeImages/&id-{312x231}.{jpg}",
      
       
      
      data: []
    }
  }
}
</script>

