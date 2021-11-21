import express from 'express';
import axios from "axios";

let router = express.Router({});

router.get('/', async function (req, res, next) {
	res.send("Hello world");
});

router.get('/topAlbums/:user', async function (req, res, next) {
	let response = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&period=3month&user=${req.params.user}&api_key=8b6ae64aef5657e4be51b1c27790e85b&format=json`);
	res.send(response.data.topalbums);
});

export default {
	path: '/',
	router
}