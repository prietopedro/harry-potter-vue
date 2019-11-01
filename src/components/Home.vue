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
    div{
       min-height: 100vh;
       width: 100vw;
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-content: center;
       text-align: center;
       background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1411&q=80") no-repeat center center /cover;
    }
    h1{
        font-size: 5rem;
        color: white;
        text-transform: uppercase;
        text-shadow: 3px 3px #333
    }

    h3{
        font-size: 3rem;
        color: white;
        text-transform: uppercase;
        text-shadow: 3px 3px #333
    }

    button{
        margin: 1rem auto;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        border: none;
        color: white;
        background: #333;
        border: 1px white solid;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 2px 2px #333;
    }

</style>