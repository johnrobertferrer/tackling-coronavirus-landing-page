<template>
	<div id="app">
		<b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="false"></b-loading>
		<navigation-bar />
		<router-view/>
	</div>
</template>

<script>
	import NavigationBar from './components/NavigationBar';

	export default {
		name: 'App',
		components: {
			'navigation-bar' : NavigationBar
		},
		created() {
			this.isLoading = true;
		},
		mounted() {
			this.openLoading();
		},
		data() {
            return {
                isLoading: true,
                isFullPage: true
            }
        },
        methods: {
            openLoading() {
				this.isLoading = true;

                setTimeout(() => {
                    this.isLoading = false;
                }, 2000)
            }
        }
	}
</script>

<style>
	.loading-background {
		background: #7957d5 !important;
		background: rgba(121, 87, 213, 1) !important;
	}
</style>