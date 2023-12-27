export default{
    namespaced: true,
    state: {
		items: []
	},
	getters: {
		all: state => state.items,
        oneProduct: state => id => state.items.find(item => item.id == id),
        title(state){
            return function (id){
                let findObj = state.items.find( item => item.id == id)

                return findObj ? findObj.title : 'none'
            }
        },
        price: state => id => {
            let findObj = state.items.find( item => item.id == id)
            return findObj.price
        }
	},
	mutations: {
		setItems(state, products){
            state.items = products
        }
	},
	actions: {
		async load({commit}){
            let prodList
            let res
            try{
                let response = await fetch('https://dummyjson.com/products/category/womens-jewellery');
                let products = await response.json();
    
                prodList = products.products;
    
                response = await fetch('https://dummyjson.com/products/category/womens-watches');
                products = await response.json();
    
                res = prodList.concat(products.products)
            }
            catch(e){
                console.log(e);
            }
            
            commit('setItems', res)
        }
	}
}