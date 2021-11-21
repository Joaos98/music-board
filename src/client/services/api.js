import axios from 'axios';

const api = axios.create({
	baseURL: '/api/'
});

export const apiService = {
	async getTopAlbums(user) {
		let { data } = await api.get(`/topAlbums/${user}`);

		return data ? data : [];
	}
};
