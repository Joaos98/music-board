<template>
	<div class="board">
		<div v-for="album of albums">
			<AlbumView :album="album" />
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
		}),
		async mounted() {
			this.albums = await apiService.getTopAlbums('Joaos98');
		},
	}
</script>

<style lang="scss" scoped>
	.board {
		display: flex;
		flex-wrap: wrap;
	}
</style>
