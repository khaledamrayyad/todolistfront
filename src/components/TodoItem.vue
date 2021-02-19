<template>
    <div class="todo-item" >
            <input type="checkbox" v-on:change="markComplete()" v-model="todo.completed" >
            <span :class="[todo.completed ?'is-completed' : 'itemText','itemText']"> {{todo.name}} </span>
            <button @click="removeTodo()" class="trashcan">
                <font-awesome-icon 
                icon="trash-alt"/>
            </button>
            <!-- <button class="del" @click="$emit('del-todo',todo.id)">x</button> -->
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "TodoItem",
    props: ["todo"],
    methods: {
        markComplete(){
            axios.put('http://127.0.0.1:8001/api/items/'+ this.todo.id ,{
                todo:this.todo
            })
            .then(responce=>{
                if(responce.status==200){
                    this.$emit('itemChanged')
                }
            })
            .catch(error => {
                console.log(error);
            })
        },
        removeTodo(){
            axios.delete('http://127.0.0.1:8001/api/items/'+ this.todo.id)
            .then(responce=>{
                if(responce.status==200){
                    this.$emit('itemChanged')
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
        
    }
    }
</script>

<style scoped>
.todo-item{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}
.is-completed{
    text-decoration: line-through;
    color: #999999;
}
.itemText{
    width: 100%;
    margin-left: 20px;
}

.trashcan{
    background: #e6e6e6;
    border: none;
    color: crimson;
    outline: none;
}
</style>