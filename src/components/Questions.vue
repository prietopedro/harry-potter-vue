<template>
    <div>
        <div v-for="question in questions" v-bind:key="question.question">
            <Question v-bind:question="question"/>
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
    }
}
</script>

<style scoped>
  
</style>