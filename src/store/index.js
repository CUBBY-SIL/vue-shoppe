import { createStore } from 'vuex'

import  products from './products'
import  cart from './cart'
import  order from './order'

const store = {
	modules: {
		products,
		cart,
		order
	},

	strict: process.env.NODE_ENV !== 'production'
}

export default createStore(store);