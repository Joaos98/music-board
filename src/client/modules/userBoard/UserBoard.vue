<template>
	<div class="wrapper">
		<div class="header">
			<h1>
				{{user}}'s Music Board
			</h1>
		</div>
		<div class="content">
			<div v-if="!loading" class="board">
				<AlbumCard v-for="album of AlbumList" :album="album" :mostListens="mostListens"/>
			</div>
			<div class="board" v-else>
				Carregando
			</div>

			<div class="settings">
				<div class="select">
					<p>Time Period</p>
					<select v-model="period" name="period">
						<option value="1">1 Month</option>
						<option value="3" selected>3 Months</option>
						<option value="6">6 Months</option>
						<option value="12">12 Months</option>
					</select>
				</div>
				<div class="select">
					<p>Quantity</p>
					<select v-model="limit" name="limit">
						<option value="5">5 Albums</option>
						<option value="10" selected>10 Albums</option>
						<option value="15">15 Albums</option>
					</select>
				</div>
				<router-link to="/">
					Return
				</router-link>
			</div>
		</div>
	</div>

</template>

<script>
	import {apiService} from "../../services/api.js";
	import AlbumCard from "../../components/AlbumCard.vue";

	export default {
		name: 'Home',
		components: {
			AlbumCard,
		},
		data: () => ({
			albums: [],
			user: '',
			period: 3,
			limit: 10,
			value: null,
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
		width: 100%;

		.header {
			min-height: 100px;
		}

		.content {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;

			.board {
				width: 70%;
				display: flex;
				flex-wrap: wrap;
			}

			.settings {
				height: 70%;
				width: 15%;
				background-color: rgba(black, 40%);
				display: flex;
				flex-direction: column;
				padding: 10px;
				align-items: center;
				justify-content: space-around;

				.select {
					width: 50%;
					display: flex;
					flex-direction: column;
					align-items: center;

					p {
						font-size: 1em;
						margin: 0 0 5px 0;
					}
				}
			}
		}
	}

</style>
