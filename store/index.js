import axios from 'axios';

export const state = () => ({
    admins: {},
    isloading: false,
    token: localStorage.getItem('token') || "",
    categories: [],
    posts: [],
    slugCat: {},
    editPost: {},
    postsforweb: [],
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
  setcategories(state, categories) {
    state.categories = categories;
},
setSlugCategories(state, slugCat) {
    state.slugCat = slugCat;
},
setEditPost(state, editPost) {
    state.editPost = editPost;
},
setPosts(state, posts) {
    state.posts = posts;
},
setPostsForWeb(state, postsforweb) {
    state.postsforweb = postsforweb;
},
}

export const actions = {
  // Admins side
  // admin login
  async adminLogins({ commit }, data) {
      commit('setIsLoading', true);
      const admins = await axios.post(process.env.API_URL+'user/login', data);
      if (admins.data.success) {
        Toast.fire({
          icon: 'success',
          title: admins.data.success
        })

          commit('setToken', admins.data.access_token);
          localStorage.setItem('token', admins.data.access_token);
          this.$router.push('/admin/dashboard')
      } else {
          Toast.fire({
            icon: 'error',
            title: admins.data.data,
          })
      }
  },
  // admin logout
  async adminLogout({ commit },_) {

    const config = {
      'headers': {
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
      }
  }
  const admins = await axios.get(process.env.API_URL+'logout', config);

    if (admins.data.success) {
      commit('setAdmins', '')
      commit('setToken', '')
      localStorage.removeItem('token')
      this.$router.push('/admin')
      this.$toast.show(admins.data.data, {
          type: "success",
      });

  } else {
      this.$toast.show(admins.data.data, {
          type: "error",
      });
  }


},

 // get admins name and email
 async getAdmins({ commit }) {
  const config = {
      'headers': {
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
      }
  }
  const data = await axios.get(process.env.API_URL+'admins', config);
  commit('setAdmins', data.data[0])
},

   // create category
   async StoreCategory({ commit }, data) {
    commit("setIsLoading", true)
    const config = {
        'headers': {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
    }
    const res = await axios.post(process.env.API_URL+'admin/category/store', data, config);
    if (res.data.success) {
        Toast.fire({
          icon: 'success',
          title: res.data.data,
        })
        data.cat_name = ''
        commit("setIsLoading", false)
        this.$router.push('/admin/categories')

    } else {
      Toast.fire({
        icon: 'error',
        title: res.data.data['cat_name'][0],
      })
        commit("setIsLoading", false)
    }
},
    // get category
    async getCategory({ commit }) {
      commit('setIsLoading', true)
      const config = {
          'headers': {
              'Authorization': 'Bearer ' + localStorage.getItem('token'),
          }
      }
      const res = await axios.get(process.env.API_URL+`admin/categories`, config);
      if (res.data.success) {
          commit('setIsLoading', false)
          commit('setcategories', res.data.data)
      }
  },

      // delete category
      async deleteCategory(_, id) {
        const config = {
            'headers': {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        }
        const res = await axios.delete(process.env.API_URL+`admin/category/destroy/${id}`, config);
       if(res.data.success){
        Toast.fire({
          icon:'success',
          title: res.data.data,
        })
       }else{
        Toast.fire({
          icon:'error',
          title: res.data.data,
        })
       }

    },
      // Category Get By Slug
      async SlugCategory({ commit }, slug) {
      commit('setIsLoading', true)

        const config = {
            'headers': {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        }
        const res = await axios.get(process.env.API_URL+`admin/category/${slug}`, config);
        if (res.data.success) {
          commit('setIsLoading', false)
          commit('setSlugCategories', res.data.data)
      }

    },


        // update Category
        async updateCategory({ commit }, data) {
          commit('setIsLoading', true)
          const config = {
              'headers': {
                  'Authorization': 'Bearer ' + localStorage.getItem('token'),
              }
          }
          const res = await axios.post(process.env.API_URL+`admin/category/update`, data, config);
          if (res.data.success) {
              commit('setIsLoading', false)
              Toast.fire({
                icon:'success',
                title: res.data.data,
              })
              this.$router.push("/admin/categories")
          } else {
              commit('setIsLoading', false)
              Toast.fire({
                icon:'error',
                title: res.data.data,
              })
          }
      },

        // create Post
   async StorePost({ commit }, data) {
    commit("setIsLoading", true)
    const config = {
        'headers': {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
    }
    const res = await axios.post(process.env.API_URL+'admin/post/store', data, config);
    if (res.data.success) {
        Toast.fire({
          icon: 'success',
          title: res.data.data,
        })
        data.cat_name = ''
        commit("setIsLoading", false)
        this.$router.push('/admin/posts')

    } else {
      Toast.fire({
        icon: 'error',
        title: res.data.data,
      })
        commit("setIsLoading", false)
    }
},

    // get posts
    async getPosts({ commit }) {
      commit('setIsLoading', true)
      const config = {
          'headers': {
              'Authorization': 'Bearer ' + localStorage.getItem('token'),
          }
      }
      const res = await axios.get(process.env.API_URL+`admin/posts`, config);
      if (res.data.success) {
          commit('setIsLoading', false)
          commit('setPosts', res.data.data)
      }
  },

       // delete post
       async deletePost(_, id) {
        const config = {
            'headers': {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        }
        const res = await axios.delete(process.env.API_URL+`admin/post/destroy/${id}`, config);
       if(res.data.success){
        Toast.fire({
          icon:'success',
          title: res.data.data,
        })
       }else{
        Toast.fire({
          icon:'error',
          title: res.data.data,
        })
       }

    },

          // Edit Post or post get by slug
          async PostGetBySlug({ commit }, slug) {
            commit('setIsLoading', true)

              const config = {
                  'headers': {
                      'Authorization': 'Bearer ' + localStorage.getItem('token'),
                  }
              }
              const res = await axios.get(process.env.API_URL+`admin/post/${slug}`, config);
              if (res.data.success) {
                commit('setIsLoading', false)
                commit('setEditPost', res.data.data)
            }

          },

            // update Post
        async updatePost({ commit }, data) {
          commit('setIsLoading', true)
          const config = {
              'headers': {
                  'Authorization': 'Bearer ' + localStorage.getItem('token'),
              }
          }
          const res = await axios.post(process.env.API_URL+`admin/post/update`, data, config);
          if (res.data.success) {
              commit('setIsLoading', false)
              Toast.fire({
                icon:'success',
                title: res.data.data,
              })
              this.$router.push("/admin/posts")
          } else {
              commit('setIsLoading', false)
              Toast.fire({
                icon:'error',
                title: res.data.data,
              })
          }
      },

      //  post status changed
      async statuspost(_, id) {
      const config = {
          'headers': {
              'Authorization': 'Bearer ' + localStorage.getItem('token'),
          }
      }
      const res = await axios.get(process.env.API_URL+`admin/post/status/${id}`, config);
      if(res.data.success){
      Toast.fire({
        icon:'success',
        title: res.data.data,
      })
      }else{
      Toast.fire({
        icon:'error',
        title: res.data.data,
      })
      }

  },

  // for website
      // get posts for website
      async getPostsForWeb({ commit }) {
        commit('setIsLoading', true)
        const res = await axios.get(process.env.API_URL+`web/posts`);
        if (res.data.success) {
            commit('setIsLoading', false)
            commit('setPostsForWeb', res.data.data)
        }
    },

}
