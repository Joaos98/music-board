<template>
	<div class="wrapper">
		<div class="header">
			<h1>
				{{user}}'s Music Board
			</h1>
			<router-link to="/">
				Voltar
			</router-link>
		</div>
		<div v-if="!loading" class="board">
			<AlbumCard v-for="album of albums.slice(0, 15)" :album="album" :mostListens="mostListens"/>
		</div>
		<div v-else>
			Carregando
		</div>
	</div>

</template>

<script>
	import {apiService} from "../../services/api.js";
	import AlbumCard from "../../components/AlbumCard.vue";

	export default {
		name: 'Home',
		components: {
			AlbumCard
		},
		data: () => ({
			albums: [],
			user: '',
			loading: true
		}),
		async mounted() {
			this.user = this.$route.params.username.capitalize();
			let data = await apiService.getTopAlbums(this.user);
			this.loading = false;
			this.albums = data.album;
		},
		computed: {
			mostListens() {
				return parseInt(this.albums[0].playcount);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;

		.header {
			min-height: 100px;
		}

		.board {
			width: 70%;
			display: flex;
			flex-wrap: wrap;
		}
	}

</style>
