<template>
  <div class="hello">
	<p>{{ question.title }}</p>
	<div v-for="answer in question.answers" :key="answer">
		<input :type="question.type" :name="question.title" @click="question.type === 'radio' ? checkRadio(answer) : checkCheckbox(answer)">
		<p>{{ answer }}</p>
	</div>
	<button v-if="countIndex ===0" @click="emitClick" :disabled="result[0] === ''">Next</button>
	<button v-else @click="emitClick" :disabled="this.secondQuestionAnswer.length === 0">Next</button>
  </div>
</template>

<script>
export default {
  name: 'QuestionComponen',
  props: {
	question: {
		type: Object,
	},
	countIndex: {
		type: Number,
	},
	secondQuestionAnswer: {
		type:Array
	},
	result: {
		type:Array
	},
  },
  methods: {
	emitClick() {
		this.$emit('emitClick')
	},
	checkRadio(answer) {
		this.$emit('checkRadio', answer)
	},
	checkCheckbox(answer) {
		this.$emit('checkCheckbox', answer)
	},
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
