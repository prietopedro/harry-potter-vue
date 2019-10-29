<template>
    <form>
        <label> {{question.question}}
            <select v-on:change="changeHandler">
                <option value="">Please Select One</option>
                <option value="1">{{question.a}}</option>
                <option value="2">{{question.b}}</option>
                <option value="3">{{question.c}}</option>
                <option value="4">{{question.d}}</option>
            </select>
        </label>
    </form>
</template>

<script>
export default {
    name: "Question",
    props: ["question","questionData","updateSelection"],
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

<style lang="stylus" scoped>

</style>