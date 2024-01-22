import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isValidForm: false,
        formInformation: [
            {
              name: 'name',
              value: '',
              pattern: /^[a-zA-Z ]{2,30}$/,
              isValid: false,
            },
            {
              name: 'phone',
              value: '',
              pattern: /^[0-9]{7,14}$/,
              isValid: false,
            },
            {
              name: 'email',
              value: '',
              pattern: /.+/,
              isValid: false,
            },
            {
              name: 'sf1',
              value: '',
              pattern: /.+/,
              isValid: false,
            },
            {
              name: 'sf2',
              value: '',
              pattern: /.+/,
              isValid: false,
            }
          ],
    },
    mutations: {
        changeValid(state) {
            state.isValidForm = true
        },
        checkValid(state, payload) {
            state.formInformation[payload.index].isValid = payload.bool
        },
        changeProp(state, payload) {
            state.formInformation[payload.idx].value = payload.newValue
        },
    }
})
