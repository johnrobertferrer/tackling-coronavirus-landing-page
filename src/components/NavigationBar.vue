<template>
    <div>
        <b-navbar fixed-top spaced type="is-primary" shadow :is-active="true">
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/#home' }" href="#home" class="has-background-light" v-smooth-scroll>
                    <img
                        src="../assets/img/coronavirus-icon.svg"
                        alt="Novel Coronavirus"
                        width="100%"
                    />
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item href="#home" class="c-ml-3" v-smooth-scroll>
                    Home
                </b-navbar-item>
                <b-navbar-item href="#section-1" class="c-ml-2" v-smooth-scroll>
                    Section 1
                </b-navbar-item>
                <b-navbar-item href="#section-2" class="c-ml-2" v-smooth-scroll>
                    Section 2
                </b-navbar-item>
                <b-navbar-item href="#section-3" class="c-ml-2" v-smooth-scroll>
                    Section 3
                </b-navbar-item>
            </template>
        </b-navbar>
    </div>
</template>

<script>
	export default {
        name: 'NavigationBar',
    }
</script>

<style>
    /* .navbar-burger {
        left: 0 !important;
        padding-left: 10vw;
    } */
</style>