<template>
     

       <div>
<div class="background">
<div class="ani">

<div class="ani3"></div>
<ul style="list-style-type: bullet">
          <li :data="data" v-for="(todo, i) in existingToDo" v-bind:key="i">
            <span>{{ i + 1 }} {{ todo.text }}</span>
            <b-button type="is-primary" class="delete-button" @click="deleteToDo(i)">x</b-button>
          </li>
        </ul>
</div>

<div class="ani2"><ul style="list-style-type: bullet">
          <li v-for="(todo, i) in existingToDo2" v-bind:key="i">
            <span>{{ i + 1 }} {{ todo.text }}</span>
            <b-button type="is-primary" class="delete-button" @click="deleteToDo2(i)">X</b-button>
          </li>
        </ul>
</div>


     <div class="input1">
    <form>
        <input type="text" class="input" placeholder="Add into the fridge:" v-model="newToDo"/>
        <b-button type="is-primary" class="add-button" v-on:click="add()">ADD</b-button>

        <input type="text" class="input" placeholder="Add into the freezer:" v-model="newToDo2"/>
        <b-button type="is-primary" class="add-button2" v-on:click="add2()">ADD</b-button>
       
        
        
      </form>
       </div>


     
    </div>
    </div>
 </template>
<script>
export default {
  name: "app",
  
  data() {
    return {
      newToDo: "",
      existingToDo: [
        { text: "Milk", id: 0 },
        { text: "WhiteBread", id: 1 },
        { text: "Eggs", id: 2 },
      ],
      existingToDo2: [
        { text: "Fish", id: 0 },
        { text: "Beans", id: 1 },
        { text: "Watter", id: 2 },
      ],
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
  },
};
</script>

<style>

  *{
    font-size:15px;
  }


  input{display:none}
.ani
    {
     width: 250px;
    height: 400px;
    
    display: block;
    
    margin: auto;
    
    text-align: center;
    
    border-radius: 2%;
    background: white;
    border: 2px solid rgba(124, 63, 209, 1);
    }


.ani2
    {
     width: 250px;
    height: 150px;
    
    
    display: block;
    
    margin: auto;
    
    text-align: center;
    
    border-radius: 5%;
    background: white;
    border: 2px solid rgba(124, 63, 209, 1);
    }
.add-button2{
  width:100%;
}
.background{
  background:rgb(228 218 255 / 25%);;
}
.input1{border: 1px solid rgba(121, 87, 213, 0.25);}
</style>