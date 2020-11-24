<template>
    <div class="tasks">
        <b-table :data="data" :columns="columns"></b-table>
        <router-view></router-view>
    </div>
</template>

<script>

export default{
    name = 'App',
    mounted(){
        fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => this.data = data)
    },
    data(){
        return{
            data:[],        
            columns:[
                {
                    field: 'id',
                    label:'ID',
                    width: '40',
                    numeric: true
                },
                {
                    field: 'completed',
                    label: 'Completed'

                }
            ]
        }
    }
}
</script>