<template>
  <v-content>
      <v-subheader> User List </v-subheader>
       <v-card
           max-width="500"
           class="mx-auto"
           >
        <v-list>
        <v-list-item
            v-for="item in user"
            :key="item.email"
        >
            <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
        </v-list-item>
        </v-list>
       </v-card>
      


  </v-content>

</template>

<script>
import User from  '../api/User'

export default {
    data(){
        return {
            user: [
                // { "_id" : "y7waieBg5iKKPoPYs", "name" : "Homero Adame", "email" : "Laura_Palacios92@gmail.com", "avatar" : "https://s3.amazonaws.com/uifaces/faces/twitter/tweetubhai/128.jpg", "admin" : false, "date" : "2019-11-06T00:16:48.314Z" },
                // { "_id" : "9e847kKw3fLctbSmn", "name" : "Sta. Rubén Chávez", "email" : "Luis5@hotmail.com", "avatar" : "https://s3.amazonaws.com/uifaces/faces/twitter/johnsmithagency/128.jpg", "admin" : false, "date" : "2019-11-06T00:18:19.915Z" },
                // { "_id" : "iv7zSuNgcB34eGqar", "name" : "David Gracia", "email" : "Manuela.Alonzo72@gmail.com", "avatar" : "https://s3.amazonaws.com/uifaces/faces/twitter/patrickcoombe/128.jpg", "admin" : true, "date" : "2019-11-06T00:18:22.104Z" }           
            ]
        }
    },


    meteor: {
         $subscribe: 
         {
             'user': [], 
         },

         user() {
             return User.find({isAdmin: true}, {sort: {date: -1}})
         } 
    }

}
</script>

<style>

</style>