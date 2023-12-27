import { createStore } from 'vuex'

import  products from './products'

const store = {
	modules: {
		products,
	},

	strict: process.env.NODE_ENV !== 'production'
}

export default createStore(store);