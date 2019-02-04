<template>
    <q-page padding>
        <h3>Produtos</h3>
        <pre>
            {{ products }}
        </pre>

    </q-page>
</template>

<script>
    export default {
        computed : {
          products() {
              return this.$store.state.products.data
          }
        },
        mounted() {
            return this.$store.dispatch('products/list')
        }
    }
</script>

<style>
</style>
