export default {
    setPublic(state, payload) {
        state.pubPrice = payload;
    },
    setForeign(state, payload) {
        state.forPrice = payload;
    },
    setInstitute(state, payload) {
        state.instPrice = payload;
    },
    setSenior(state, payload) {
        state.snrPrice = payload;
    },
    setTax(state, payload) {
        state.tax = payload;
    },
    setMobile(state, payload) {
        state.mobile = payload;
        sessionStorage.setItem('mobile', payload);
    },
    setSession(state, payload) {
        state.session = payload;
        sessionStorage.setItem('session', payload);
    },
    setCategory(state, payload) {
        state.category = payload;
        sessionStorage.setItem('category', payload);
    },
    setDate(state, payload) {
        state.date = payload;
    },
    setOrigDate(state, payload) {
        state.origDate = payload;
        sessionStorage.setItem('origDate', payload);
    },
    setBdate(state, payload) {
        state.bookDate = payload;
        sessionStorage.setItem('bookDate', payload);
    },
    setCapacity(state, payload) {
        state.capacity = payload;
        sessionStorage.setItem('capacity', payload);
    },
    setDetails(state, payload) {
        state.details = payload;
        sessionStorage.setItem('details', JSON.stringify(payload));
    },
    setRazor(state, payload) {
        state.razordetails = payload;
        sessionStorage.setItem('razordetails', JSON.stringify(payload))
    },
    setQR(state, payload) {
        state.qrDetails = payload;
        sessionStorage.setItem('qrDetails', JSON.stringify(payload));
    },
};