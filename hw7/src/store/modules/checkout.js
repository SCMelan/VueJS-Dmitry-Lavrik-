export default {
    namespaced: true,
    state: {
        userInformation: {
            name: {
                name: 'Name',
                value: '',
            },
            number: {
                name: 'Phone',
                value: '',
            },
            email: {
                name: 'Email',
                value: '',
            },
        }
    },
    getters: {
        userInformation(state){
			return state.userInformation;
		},
    },
    mutations: {
        changeProp(state, payload) {
            state.userInformation[payload.keyItem].value = payload.inputValue
        },
    },
    actions: {
        change(store, payload){
			store.commit('changeProp', payload);
		},
    }
};