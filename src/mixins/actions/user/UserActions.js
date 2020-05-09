export default {
  methods: {
    async getUser(user) {
      return await this.axios.get(`/users/${user}`)
    }
  }
}