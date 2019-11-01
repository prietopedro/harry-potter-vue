<template>
    <form>
        <label for="select"> {{question.question}}</label>
            <select type="name" v-on:change="changeHandler">
                <option value="">Please Select One</option>
                <option value="1">{{question.a}}</option>
                <option value="2">{{question.b}}</option>
                <option value="3">{{question.c}}</option>
                <option value="4">{{question.d}}</option>
            </select>
    </form>
   
</template>

<script>
export default {
    name: "Question",
    props: ["question","questionData","updateSelection","error"],
    data(){
        return{
            formValue : 0,
        }
    },
    watch: {
        formValue: function (val, oldVal) {
            if(oldVal !== val){
                this.updateSelection(this.question.id,this.formValue)
            }
        }
    },
    methods: {
        changeHandler(e){
            this.formValue = e.target.value;
        }

    }
}
</script>

<style scoped>
    form{
        display: flex;
        flex-direction: column;
        margin: 1rem auto;
        font-size: 1.6rem;
        width: 100%;
        text-align: left;
    }
    label{
        text-align: left;
        color: white;
    }
    select{
        width: 50%;
        padding: 0.6rem 
    }

</style>