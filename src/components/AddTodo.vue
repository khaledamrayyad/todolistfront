<template>
    <div class="addItem">
        <form class="form">
            <div>
                <div class="input-parent">
                    <input type="text" name="title" v-model="todo.name" placeholder="Add Todo...">
                </div>
                <div class="plus-button">
                    <font-awesome-icon 
                    class="plus-circle"
                    icon="plus-circle"
                    :class="[todo.name ?'active' :'inactive','plus']"
                    @click="addItem()"
                    />
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "AddTodo",
    data: function(){
        return{
            todo:{
                name:""
            }
        }
    },
    methods:{
        addItem(){
            if (this.todo.name=="")
            {
                return;
            }
            axios.post('http://127.0.0.1:8001/api/items/store',{
                item: this.todo
            })
            .then( response=>{
                if(response.status==201)
                {
                    this.todo.name="";
                    this.$emit('reloadList')
                }
            }
            )
            .catch(error=>{
                console.log(error);
            })
        }
    }
}
</script>

<style scoped>
.addItem{
    display: flex;
    justify-content: center;
    align-items: center;
}
.form {
    width: 100%
}
.input-parent {
    width: 85%;
    float:left;
    margin-right: 20px;
}
.plus-circle {
    width: 25px;
    height: 30px;

}
.plus {
    font-size: 20px;
    color: #000;
}
.active {
    color: #00ce25;
}
.inactive {
    color: #999999;
}
</style>