<template>
<div id="createTodo">
  <v-btn v-on:click="openForm" v-show="!isCreating" id="createBtn">Create</v-btn>
  <div v-show="isCreating">
    <v-text-field
			label="Title"
			outlined
			dense
      v-model="newTitle"
			></v-text-field>
		<v-text-field
			label="Project"
			outlined
			dense
      v-model="newProject"
		></v-text-field>
    <v-btn v-on:click="createNew" id="yesCreate">Create</v-btn>
    <v-btn v-on:click="openForm" id="noCreate">Cancel</v-btn>
  </div>
</div>
</template>

<script>
export default {
  data() {
	return {
    isCreating: false,
    newTitle: '',
    newProject: '',
  }},
  methods: {
    openForm(){
    this.isCreating = !this.isCreating;
  },
    createNew(){
    const title = this.newTitle;
    const project = this.newProject;
    this.$store.state.todos.push({
      title,
      project,
      done: false,
    });
    this.newTitle = '';
    this.newProject = '';
    this.isCreating = false;
    }
  }
};
</script>

<style scoped>
#createTodo{
  margin: 30px 40px;
}
#createBtn, #yesCreate, #noCreate{
  font-weight: bold;
	background-color: #c6d7c7;
	color: orangered;
  margin-right: 11px;
}
</style>