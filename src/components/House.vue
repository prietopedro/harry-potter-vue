<template>
    <div class="outerContainer">
        <div class="text-container">
            <h1>Welcome to {{house.name}}</h1>
            <h3>{{house.about}}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "Houses",
    props: ["house"]
}
</script>

<style scoped>
    .outerContainer{
      background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("https://images.unsplash.com/photo-1498676077434-7540603d2dda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80") no-repeat center center /cover;  
      height: 100vh;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .text-container{
        width: 75%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
    h1{
        color: white;
        font-size: 5rem;
        text-transform: uppercase;
    }
    h3{
        color: white;
        font-size: 2rem;
    }
</style>