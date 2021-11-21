<template>
	<div class="wrapper">
		<div class="header">
			{{user}}'s Music Board
		</div>
		<div class="board">
			<div v-for="album of albums.slice(0, 15)">
				<AlbumView :album="album"/>
			</div>
		</div>
	</div>

</template>

<script>
	import {apiService} from "../../services/api.js";
	import AlbumView from "../../components/AlbumView.vue";

	export default {
		name: 'Home',
		components: {
			AlbumView
		},
		data: () => ({
			albums: [],
			user: '',
		}),
		async mounted() {
			let data = await apiService.getTopAlbums('Joaos98');
			this.albums = data.album;
			this.user = data['@attr'].user;
		},
		computed: {
			mostListens() {
				return this.albums[0].playcount;
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
