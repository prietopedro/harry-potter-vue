<template>
    <div>
        <h1>{{house.name}}</h1>
        <h3>{{house.about}}</h3>
    </div>
</template>

<script>
export default {
    name: "Houses",
    props: ["house"]
}
</script>

<style lang="less" scoped>

</style>