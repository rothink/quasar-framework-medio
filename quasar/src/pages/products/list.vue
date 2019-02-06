<template>
    <q-page padding>
        <h3>Produtos</h3>
        <q-table
            title="Produtos"
            :columns="columns"
            :data="products"
        />
    </q-page>
</template>

<script>
    export default {
        data() {
          return {
              columns: [
                  {
                      name: 'id',
                      field: 'id',
                      align: 'left',
                      label: '#',
                      sortable: true
                  },
                  {
                      name: 'title',
                      field: 'title',
                      align: 'left',
                      label: 'Título',
                      sortable: true
                  },
                  {
                      name: 'stock',
                      field: 'stock',
                      align: 'left',
                      label: 'Stock',
                      sortable: true
                  },
              ]
          }
        },
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
