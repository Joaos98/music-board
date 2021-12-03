import axios from 'axios';

const api = axios.create({
	baseURL: '/api/'
});

export const apiService = {
	async getTopAlbums(user, period) {
		let { data } = await api.get(`/topAlbums?user=${user}&period=${period}`);

		return data ? data : [];
	}
};
