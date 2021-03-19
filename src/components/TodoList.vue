<template>
  <div>
    <p id="TodoList">TO DO LIST</p>
    <p class="task">Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p class="task">Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <Todo v-for="todo in todos" :key="todo.index" :todo="todo"></Todo>
  </div>
</template>

<script type = "text/javascript">
import Todo from './Todo'
// import swal from 'sweetalert';

export default {
  props: ['todos'],
  components: {
    Todo,
  },
};
</script>
<style scoped>
#TodoList{
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;
  font-size: 55px;
  color: orangered;
}
.task{
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 22px;
  color: orangered;
}
</style>