<template>
    <form>
        <label> {{question.question}}
        <select>
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
    props: ["question"],
}
</script>

<style lang="stylus" scoped>

</style>