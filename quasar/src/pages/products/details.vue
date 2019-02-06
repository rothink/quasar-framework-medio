<template>
    <q-page padding>
        <h3>Detalhes do produto</h3>
    </q-page>
</template>

<script>
    export default {
        mounted() {
            console.info(this.$route.params.id)
        }
    }
</script>

<style>
</style>
