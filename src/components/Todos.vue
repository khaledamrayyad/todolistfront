<template>
<div>
    <div  v-for="(todo,index) in todos" :key="index">
        <TodoItem v-bind:todo="todo"  class="item" v-on:itemChanged="$emit('reloadList')"/>
    </div>
</div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
    name: "Todos",
    components: {
        TodoItem
    },
    props:["todos"]
}
</script>

<style scoped>
.item{
    background: #e6e6e6;
    padding: 5px;
    margin-top: 5px;
}
</style>