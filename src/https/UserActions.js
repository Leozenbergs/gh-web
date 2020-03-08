export default {
  methods: {
    getUserByName(name) {
      return this.axios.get(`/users/${name}`)
    }
  },  
}