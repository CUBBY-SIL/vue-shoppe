export default{
    namespaced: true,
    state:{
        userInfoOrder:[
            {
                title: 'First name',
                value: '',
                pattern: /^[a-zA-Z \-]{2,20}$/
            },
            {
                title: 'last name',
                value: '',
                pattern: /^[a-zA-Z \-]{2,20}$/
            },
            {
                title: 'Street Address',
                value: '',
                pattern: /^[a-zA-Z \-\.]{2,30}$/
            },
            {
                title: 'Postcode / ZIP',
                value: '',
                pattern: /^\d{6}$/
            },
            {
                title: 'Town / City',
                value: '',
                pattern: /^[a-zA-Z \-]{2,30}$/
            },
            {
                title: 'Phone',
                value: '',
                pattern: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
            },
            {
                title: 'Email',
                value: '',
                pattern: /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/
            },
        ],
    },
    getters:{
        getFields(state){
            return state.userInfoOrder.map(field => field.title);
        },
        getPattern: state => field => {
            let item = state.userInfoOrder.find(item => item.title === field)
            return item.pattern;
        },
        getOrderInfo: state => state.userInfoOrder
    },
    mutations:{
        addInformation(state, obj){
            state.userInfoOrder.forEach(item => {
                let property = obj.find(field => field.titleField === item.title)
                item.value = property.value;
            })
        }
    },
    actions:{
        add({commit}, obj){
            commit('addInformation', obj)
        }
    }
}