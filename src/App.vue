<template>
  <div id="app" class="todolistContaniner">
    <div class="heading">
      <img class="img" alt="Vue logo" src="../todo.png">
      <Header msg="Khaled's ToDoList "/>
      <AddTodo v-on:reloadList="getList()"/>
    </div>
    <Todos v-bind:todos="todos" v-on:reloadList="getList()"/>
    
  </div>
</template>

<script>
import Header from './components/layouts/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    Header,
    AddTodo,
    Todos
  },
  data:function() {
    return{
      todos: []
    }
  },
methods:{
      deleteTask(id){
        this.todos =this.todos.filter(todo =>todo.id !== id);
        },
      getList(){
          axios.get('http://127.0.0.1:8001/api/items')
          .then(Response=>{
            this.todos = Response.data
          })
          .catch(error=>{
            console.log(error);
          })
      }
},
created(){
  this.getList();
}

}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.todolistContaniner{
  width: 450px;
  margin: auto;
  align-items: center;
}
.heading{
  background: #e6e6e6;
  padding: 10px;
  margin: auto;
}
.img{
  width: 430px;
  align-self: auto;
}
input{
  background: #f7f7f7;
  border: 0;
  outline: none;
  padding: 8px;
  margin-right: 12px;
  width: 100%;
}

</style>
