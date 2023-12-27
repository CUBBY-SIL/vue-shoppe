import products from "./products"

export default{
	namespaced: true,
    state: {
		items: [],
	},
	getters: {
		inCart: state => id => state.items.some( item => item.id == id),
		length(state){
			return state.items.length
		},
		itemsDetailed: (state, getters, rootState, rootGetters) =>{
			return state.items.map(item => {
				let product = rootGetters['products/oneProduct'](item.id)
				return { ...product, cnt: item.cnt}
			})
		},
		total: (state, getters) => getters.itemsDetailed.reduce((t, i) => t +i.price *i.cnt, 0)
	},
	mutations: {
		add(state, {id, count}){
			state.items.push({
				id,
				cnt: count
			})
		},
		remove(state, id){
			state.items = state.items.filter(item => item.id != id)
		},
		setCnt(state, {id, cnt}){
			let item = state.items.find(item => item.id == id)
			item.cnt = cnt
		}
	},
	actions: {
		add({commit, getters, state}, {id, count}){
			if(!getters.inCart(id)){
                if(!count){
                    count = 1
                }
				commit('add', {id, count})
			}
		},
		remove({commit, getters, state}, id){
			if(getters.inCart(id)){
				commit('remove', id)
			}
		},
		updateCnt({commit, getters}, {id, value}){
			if(getters.inCart(id)){
				let item = getters.itemsDetailed.find(item => item.id === id)
				let validCnt = Math.min(Math.max(value, 1), item.stock)
				commit('setCnt', {id, cnt: validCnt})
			}
		},
	}
}