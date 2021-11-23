import { library } from '@fortawesome/fontawesome-svg-core'

import {
    faTimes,
	faSearch
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faTimes,
	faSearch
);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import FaIcon from '../components/FaIcon.vue';

export default function (app) {
	app.component('font-awesome-icon', FontAwesomeIcon);
	app.component('FaIcon', FaIcon);
}