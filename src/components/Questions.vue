<template>
    <div>
        <div v-for="question in questions" v-bind:key="question.question">
            <Question v-bind:question="question" v-bind:updateSelection="updateSeletion"
            v-bind:questionData="questionData" />
        </div>
        <button>Submit</button>
    </div>
</template>


<script>
import Question from "./Question"
export default {
    name: "Questions",
    props: ["questions"],
    components: {
        Question
    },
    methods: {
        updateSeletion(index,formTotal) {
            this.questionData = {...this.questionData, [index]: formTotal}
        }
    },
    data(){
        return{
        questionData : {
                0: "0",
                1: "0",
                2: "0",
                3: "0",
                4: "0",
                5: "0"
        }}
    },
}
</script>

<style scoped>
  
</style>