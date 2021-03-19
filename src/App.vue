<template>
<div>
<todo-list v-bind:todos="this.$store.state.todos"></todo-list>
<create-todo v-bind:todos="this.$store.state.todos"></create-todo>
</div>

</template>

<script>
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

export default {
  name: 'app',

  components: {
    TodoList,
    CreateTodo,
  },
}
</script>
