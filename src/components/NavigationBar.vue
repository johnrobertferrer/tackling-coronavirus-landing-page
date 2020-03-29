<template>
    <div>
        <b-navbar fixed-top>
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                        src="../assets/img/coronavirus-icon.svg"
                        alt="Novel Coronavirus"
                        width="100%"
                    />
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item href="#home" v-smooth-scroll>
                    Home
                </b-navbar-item>
                <b-navbar-item href="#section-1" v-smooth-scroll>
                    Section 1
                </b-navbar-item>
                <b-navbar-item href="#section-2" v-smooth-scroll>
                    Section 2
                </b-navbar-item>
                <b-navbar-item href="#section-3" v-smooth-scroll>
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