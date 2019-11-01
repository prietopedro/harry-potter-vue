<template>
    <div class="container">
        <div class="singleItems" v-for="question in questions" v-bind:key="question.question">
            <Question v-bind:question="question" v-bind:updateSelection="updateSeletion"
            v-bind:questionData="questionData" />
        </div>
        <h3>{{errorMessage}}</h3> 
        {{log(error)}}
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
            let isCorrect = values.filter(value=>value === null)
            if(isCorrect.length === 0){
                this.error = false
                let total = values.reduce((total,current)=>{
                return total + Number(current)
            },0);
            this.getTotalPoints(total)
            this.$router.push('/House')
        } else{
            this.error = true
        }
        },
        log(message){
            console.log(message)
        },
        checkError(){
            this.error === true ? this.errorMessage="Answer All Questions Please" : this.errorMessage=""
        }
    },
    watch: {
        error: function (val, oldVal) {
            if(val !== oldVal){
                this.checkError()
            }
        }
    },
    data(){
        return{
        questionData : {
                0: null,
                1: null,
                2: null,
                3: null,
                4: null,
                5: null
        },
        error : false,
        errorMessage: null
        }
    },
}
</script>

<style scoped>
  .container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* align-items: center; */
        min-height: 100vh;
      width: 100%;
      margin: 0 auto;
      background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("https://images.unsplash.com/photo-1539103377911-4909a1eae382?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80") no-repeat center center /cover;
  }
  .singleItems{
      width: 40%;
      margin: 1rem auto;
  }
    button{
        margin: 1rem auto;
        width: 40%;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        border: none;
        color: #333;
        background: white;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 2px 2px #333;
    }
    h3{
        color: red;
        text-align: center;
    }
</style>