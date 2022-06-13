import axios from 'axios';

export const state = () => ({
    admins: {},

    isloading: false,
    token: localStorage.getItem('token') || "",

})

export const mutations = {
  setAdmins(state, admins) {
      state.admins = admins;
  },
  setIsLoading(state, isloading) {
      state.isloading = isloading;
  },
  setToken(state, token) {
      state.token = token;
  },
}

export const actions = {
  // Admins side
  // admin login
  async adminLogins({ commit }, data) {
      commit('setIsLoading', true);
      const admins = await axios.post(process.env.API_URL+'user/login', data);
      if (admins.data.success) {
          this.$toast.show(admins.data.message, {
              type: "success",
          });
          commit('setToken', admins.data.access_token);
          localStorage.setItem('token', admins.data.access_token);
          this.$router.push('/admin/dashboard')
      } else {
          this.$toast.show(admins.data.message, {
              type: "error",
          });
      }
  },
  // admin logout
  async adminLogout({ commit }) {
    commit('setAdmins', '')
    commit('setToken', '')
    localStorage.removeItem('token')
    this.$router.push('/admin')
    this.$toast.show('Logout Successfully !', {
        type: "success",
    });
  //   const config = {
  //     'headers': {
  //         'Authorization': 'Bearer ' + localStorage.getItem('token'),
  //     }
  // }
  //   const admins = await axios.post(process.env.API_URL+'logout', config);
  //   if (admins.data.success) {
  //     commit('setAdmins', '')
  //     commit('setToken', '')
  //     localStorage.removeItem('token')
  //     this.$router.push('/admin')
  //     this.$toast.show(admins.data.data, {
  //         type: "success",
  //     });

  // } else {
  //     this.$toast.show(admins.data.data, {
  //         type: "error",
  //     });
  // }


},

}
