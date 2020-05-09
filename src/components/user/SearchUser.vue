<template lang="pug">
  v-container
    v-row.text-center
      v-col
        .title {{ message }}
    v-row(justify="center")
      v-col(cols="4")
        v-card
          v-card-text
            v-form
              .subtitle Please enter your search
              v-text-field(
                v-model="search"
                label="Search"
                filled
                @input="searchByName"
              )
      

</template>

<script>
  import { UserActions } from '@/mixins/actions/index'
  export default {
    mixins: [UserActions],
    data() {
      return {
        search: undefined,
        message: 'Welcome'
      }
    },
    methods: {
      searchByName(user) {
        this.getUser(user)
      },
    }
  }
</script>
