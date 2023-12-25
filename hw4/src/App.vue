<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <QuestionComponen 
    v-if="!this.showResult"
      :question="questions[this.countIndex]"
      :key="questions[this.countIndex].title"
      @emitClick="emitClick"
      @checkRadio="checkRadio"
      @checkCheckbox="checkCheckbox"
      :countIndex="countIndex"
      :result="this.result"
      :secondQuestionAnswer="secondQuestionAnswer"
    />
    <ResultComponent
    v-else
      :result="this.result"
    />
  </div>
</template>

<script>
import QuestionComponen from './components/QuestionComponen.vue'
import ResultComponent from './components/ResultComponent.vue'

export default {
  name: 'App',
  components: {
    QuestionComponen,
    ResultComponent,
  },
  data() {
	return {
		questions:[
      {type: 'radio',	title: 'Какой тег задаёт ссылку?',answers: ['a','div','span','img']},
      {type: 'checkbox',title: 'Какие из  этих тегов строчные?',answers: ['a','div','span','img']}
    ],
    result:['',[]],
    countIndex:0,
    showResult: false,
    secondQuestionAnswer:[],
	}
  },
  methods: {
    emitClick() {
      this.countIndex++
      if (this.countIndex ===2) {
        this.$set(this.result,1,this.secondQuestionAnswer)
        this.showResult = true
      }
	},
  checkRadio(answer) {
    this.$set(this.result,0,answer)
  },
  checkCheckbox(answer) {
    if (!this.secondQuestionAnswer.includes(answer)) {
      this.$set(this.secondQuestionAnswer,this.secondQuestionAnswer.length,answer)
    } else {
      const index = this.secondQuestionAnswer.findIndex(item=>item===answer)
      this.$delete(this.secondQuestionAnswer,index)
    }
  }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
