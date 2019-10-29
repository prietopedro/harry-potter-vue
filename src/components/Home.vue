<template>
    <div>
        <h1>Welcome Stranger</h1>
        <h3>Click Below To See Which House You Belong To!</h3>
        <button v-on:click="clickBtn">Sort Hat</button>
    </div>
</template>

<script>
export default {
    name: "Home",
    methods: {
        clickBtn(){
            this.$router.push('/Questions')
        }
    }
}
</script>

<style scoped>

</style>