import {createStore} from 'vuex';
const store = createStore({
  state() {
    return{ 
      mobile: null,
      // details: null,
      details: {},
      razordetails: null,
      pubPrice: [],
      forPrice: [],
      instPrice: [],
      snrPrice: [],
      tax: [],
      category: null,
      date: null,
      qrDetails:{},
      session: null
    };
  },
  mutations: {
    setMobile(state, payload) {
       state.mobile = payload; 
    }, 
    setDetails(state, payload){
    state.details = payload;
    },
    setCategory(state, payload) {
    state.category = payload;
    },
    setDate(state, payload) {
      state.date = payload;
    },
    setRazor(state, payload) {
      state.razordetails = payload;
    },
    setPublic(state, payload) {
      state.pubPrice = payload;
    },
    setForeign(state, payload) {
      state.forPrice = payload;
    },
    setInstitute(state, payload) {
      state.instPrice = payload;
    },
    setQR(state, payload) {
      state.qrDetails = payload;
    },
    setSession(state, payload) {
      state.session = payload;
    },
    setSenior(state, payload) {
      state.snrPrice = payload;
    },
    setTax(state, payload) {
      state.tax = payload;
    }
  },
  getters: {
    getMobile(state) {
      return state.mobile;
    },
    getDetails(state) {
      return state.details
    },
    getCategory(state) {
      return state.category;
    },
    getDate(state) {
      return state.date;
    },
    getRazor(state) {
      return state.razordetails;
    },
    getPublic(state) {
      return state.pubPrice 
    },
    getForeign(state) {
      return state.forPrice
    },
    getInstitute(state) {
      return state.instPrice 
    },
    getQR(state) {
      return state.qrDetails 
    },
    getsession(state) {
      return state.session 
    },
    getSenior(state) {
      return state.snrPrice;
    },
    getTax(state) {
      return state.tax;
    }
  },
});
export default store;
