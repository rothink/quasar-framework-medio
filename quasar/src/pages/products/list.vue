<template>
    <q-page padding>
        <h3>Produtos</h3>
        <q-table
                title="Produtos"
                :columns="columns"
                :data="products"
                no-data-label="Sem nenhum registro"
                rows-per-page-label="Quantidade por página"
                :pagination-label="paginationLabel"
        >
            <q-tr slot="body"
                  slot-scope="props"
                  :props="props"
                  @click.native="openProduct(props.row)"
                  class="cursor-pointer"
            >
                <q-td v-for="col in props.cols"
                      :key="col.name"
                      :props="props"
                >
                    {{col.value}}
                </q-td>
            </q-tr>
        </q-table>
        <hr>
        <q-btn
            color="primary"
            to="/products/create">
            Novo
        </q-btn>
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
        methods: {
            openProduct(data) {
                this.$router.push('/products/' + data.id)
            },
            paginationLabel(start, end, total) {
                return start + ' até '+ end + ' de' + total;
            }
        },
        computed: {
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
