export const state = () => ({
    services: [],
    meta: {},
    per_page: 16,
    loading: false
  });
  // export const getters = {
  //   services(state) {
  //     return state.leads;
  //   },
  //   meta(state) {
  //     return state.meta;
  //   }
  // };
  export const mutations = {
    SET_ITEMS(state, items) {
      state.services = items;
    },
    SET_PAGINATION(state, meta) {
      state.meta = meta;
    },
    perPage(state, payload) {
      state.per_page = payload;
    },
    SET_LOADER(state, payload) {
      state.loading = payload;
    },
    APPEND_ITEMS(state, items) {
      state.services = state.services.concat(items);
    },
  };
  const includes = "clinic";
  export const actions = {
    async getItems({ commit, state, rootState }, page = 1) {
      const filterLink = rootState.global.filterLink
        ? "&" + rootState.global.filterLink
        : "";
        
      commit("SET_LOADER", true);
      const { data: services, meta } = await this.$axios.$get(
        `/offers?sort=-offer_new_price&filter[offer_status]=1&per_page=${state.per_page}&include=${includes}&page=${page}${filterLink}`
      );
      
      if (page !== 1) {
        commit("APPEND_ITEMS", services);
      } else {
        commit("SET_ITEMS", services);
      }
      commit("SET_PAGINATION", meta);
      commit("SET_LOADER", false);
  
    },
  };
  