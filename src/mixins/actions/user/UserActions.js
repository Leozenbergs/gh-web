export default {
  methods: {
    getUser(user) {
      return this.axios.get(`localhost:3000/users/${user}`).then(response => console.log(response))
    }
  }
}