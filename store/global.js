export const state = () => ({
    modal: '',
    activeFilter: '',
    filterLink: '',
    loading: false
});

export const getters = {};
export const mutations = {
    modal(state, payload) {
        state.modal = payload
    },
    closeModal(state) {
        state.modal = ''
    },
    activeFilter(state, payload) {
        state.activeFilter = payload
    },
    filterLink(state, payload) {
        state.filterLink = payload
    },
    loadHandler(state, payload) {
        state.loading = payload
    }
};
export const actions = {};
