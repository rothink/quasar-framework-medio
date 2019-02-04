<template>
    <q-layout view="lHh lpr lFf"> <!-- Be sure to play with the Layout demo on docs -->

        <!-- (Optional) The Header -->
        <q-layout-header>
            <q-toolbar
                    color="dark"
            >
                <q-btn
                        color="blue"
                        flat
                        round
                        dense
                        icon="menu"
                        @click="leftDrawer = !leftDrawer"
                />
                <q-toolbar-title>
                    Header
                    <span slot="subtitle">Subtile</span>
                </q-toolbar-title>
            </q-toolbar>
            <q-tabs>
                <q-route-tab
                        slot="title"
                        icon="map"
                        to="/your/route"
                        replace
                        label="One Tab"
                />
                <q-route-tab
                        slot="title"
                        icon="assignment"
                        to="/some/other/route"
                        replace
                        label="Other Tab"
                />
            </q-tabs>
        </q-layout-header>

        <!-- (Optional) The Footer -->
        <q-layout-footer>
            <q-toolbar color="dark">
                <q-btn
                        flat
                        round
                        dense
                        icon="menu"
                        @click="leftDrawer = !leftDrawer"
                />
                <q-toolbar-title>
                    <span slot="subtitle">rothink.com.br</span>
                </q-toolbar-title>
            </q-toolbar>
        </q-layout-footer>

        <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
        <q-layout-drawer
                content-class="bg-lime-2"
                side="left"
                v-model="leftDrawer"
        >
            <!-- QScrollArea is optional -->
            <q-scroll-area class="fit q-pa-sm">
                <!-- Content here -->
                <q-list>
                    <q-list-header>Menu</q-list-header>
                    <q-item to="/">
                        <q-item-main label="Pome" sublabel="exibe a home"/>
                    </q-item>
                    <q-item to="products">
                        <q-item-main label="Products" sublabel="exibe produtos"/>
                    </q-item>
                </q-list>
            </q-scroll-area>
        </q-layout-drawer>

        <q-page-container>
            <!-- This is where pages get injected -->
            <router-view/>
        </q-page-container>

    </q-layout>
</template>

<script>
    export default {
        // name: 'LayoutName',
        data() {
            return {
                leftDrawer: true
            }
        }
    }
</script>

<style>
</style>
