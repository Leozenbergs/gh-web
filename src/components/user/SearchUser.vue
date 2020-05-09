<template lang="pug">
  v-container
    v-row.text-center
      v-col
        .title {{ message }}
    v-row(justify="center")
      v-col(cols="6")
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
    v-row(v-if="result" justify="center")
      v-col(cols="6")
        v-card
          v-toolbar(flat)
            v-avatar
              img(:src="result.avatar_url")
            .ml-4 {{ result.login }}
            v-spacer
            v-menu
              template(v-slot:activator="{ on }")
                v-btn(v-on="on" icon)
                  v-icon mdi-dots-vertical
          v-card-text
            | {{ result }}

</template>

<script>
  import { UserActions } from '@/mixins/actions/index'

  export default {
    mixins: [UserActions],
    data() {
      return {
        search: undefined,
        message: 'Welcome',
        result: undefined
      }
    },
    methods: {
      async searchByName(user) {
        let response = await this.getUser(user)
        console.table(response)
      },
    }
  }
</script>
