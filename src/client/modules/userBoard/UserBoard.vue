<template>
	<div class="wrapper">
		<div class="header">
			<h1>
				{{user}}'s Music Board
			</h1>
			<div>
				<select v-model="period" name="period">
					<option value="1">1 Mês</option>
					<option value="3" selected>3 Mêses</option>
					<option value="6">6 Mêses</option>
					<option value="12">12 Mêses</option>
				</select>
				<select v-model="limit" name="limit">
					<option value="5">5 Albums</option>
					<option value="10" selected>10 Albums</option>
					<option value="15">15 Albums</option>
				</select>
			</div>
			<router-link to="/">
				Voltar
			</router-link>
		</div>
		<div v-if="!loading" class="board">
			<AlbumCard v-for="album of AlbumList" :album="album" :mostListens="mostListens"/>
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
			period: 3,
			limit: 10
			,
			loading: true
		}),
		async mounted() {
			this.user = this.$route.params.username.capitalize();
			await this.getAlbums(this.user, this.period);
		},
		computed: {
			mostListens() {
				return parseInt(this.albums[0].playcount);
			},
			updateAlbums() {
				this.getAlbums(this.user, this.period);
			},
			AlbumList() {
				return this.albums.slice(0, this.limit);
			}
		},
		methods: {
			async getAlbums(user, period) {
				this.loading = true;
				let data = await apiService.getTopAlbums(user, period);
				this.loading = false;
				this.albums = data.album;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;

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
