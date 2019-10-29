<template>
    <div>
        <div v-for="question in questions" v-bind:key="question.question">
            <Question v-bind:question="question" v-bind:updateSelection="updateSeletion"
            v-bind:questionData="questionData" />
        </div>
        <button v-on:click="onSubmit">Submit</button>
    </div>
</template>


<script>
import Question from "./Question"
export default {
    name: "Questions",
    props: ["questions","getTotalPoints"],
    components: {
        Question
    },
    methods: {
        updateSeletion(index,formTotal) {
            this.questionData = {...this.questionData, [index]: formTotal}
        },
        onSubmit(e){
            e.preventDefault();
            let values = Object.values(this.questionData);
            let total = values.reduce((total,current)=>{
            return total + Number(current)
        },0);
        this.getTotalPoints(total)
        this.$router.push('/House')
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