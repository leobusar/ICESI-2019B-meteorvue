<template>
  <v-content>
      <v-subheader> Create User </v-subheader>
      <v-btn @click="addUser(false)">Agregar Usuario</v-btn>
      <v-btn @click="addUser(true)">Agregar Admin</v-btn>
  </v-content>
</template>

<script>
import Faker from 'faker/locale/es'

export default {
    data(){
        return {

        }
    }, 
    methods: {
        addUser(isAdmin) {
            let user={
                name: Faker.name.findName(), 
                email: Faker.internet.email(), 
                avatar: Faker.internet.avatar(), 
                admin: isAdmin
            }
            Meteor.call('user.add', user)
            console.log(user)
        }
    }

}
</script>

<style>

</style>