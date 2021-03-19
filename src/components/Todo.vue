<template>
	<div>
		<div v-show="!isEditing" id="notEdit">
				<div id="titleTodo">{{ todo.title }}</div>
				<div id="projectTodo">{{ todo.project }}</div>
				<v-btn v-on:click="deleteTodo" id="delBtn"><v-icon left>{{ icons.mdiDelete }}</v-icon></v-btn>
				<v-btn v-on:click="showForm" id="editBtn"><v-icon left>{{ icons.mdiPencil }}</v-icon></v-btn>
				<v-btn v-show="todo.done" id="complete">Completed</v-btn>
				<v-btn v-show="!todo.done" id="pending" v-on:click="completeTask">Pending</v-btn>
		</div>

			<div v-show="isEditing" id="edit">
				<v-text-field
					label="Title"
					outlined
					dense
					v-model="todo.title"
					></v-text-field>
				<v-text-field
					label="Project"
					outlined
					dense
					v-model="todo.project"
				></v-text-field>
				<v-btn v-on:click="showForm" id="saveTodo">Save</v-btn>
			</div>

	</div>
</template>

<script type="text/javascript">
	import { mdiPencil, mdiDelete,} from '@mdi/js'
	import swal from 'sweetalert';

export default {
	props: ["todo"],
	data() {
		return {
			isEditing: false,
			icons: {
				mdiPencil,
				mdiDelete,
			},
		};
	},
	methods: {
		showForm() {
			this.isEditing = !this.isEditing;
		},
		completeTask() {
			swal("Complete!", "You have completed this Todo", "success");
			this.todo.done = true;
		},
		deleteTodo() {
			const todoIndex = this.$store.state.todos.indexOf(this.todo);
      this.$store.state.todos.splice(todoIndex, 1);
		},
	},
};
</script>

<style scoped>
	#complete {
		background-color: #b7e3e4;
		color: orangered;
		font-weight: bold;
	}
	
	#pending{
		background-color: #864bff;
		color: #0AF2C8;
		font-weight: bold;
	}

	#titleTodo{
		font-family: 'Courier New', Courier, monospace;
		font-size: 30px;
	}

	#projectTodo{
		font-size: 18px;
		font-family: 'Courier New', Courier, monospace;
	}

	#delBtn, #editBtn{
		background-color: #c6d7c7;
		color: orangered;
		margin-right: 11px;
	}

	#saveTodo{
		background-color: #cdff06;
		color: blue;
		font-weight: bold;
	}
	#notEdit{
	margin: 30px 40px;
	border: solid 2px orangered;
	border-radius: 20px;
	padding: 15px;
	}
	#edit{
		margin: 30px 40px;
	}
</style>