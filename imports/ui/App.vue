<template>
  <v-content>
    <v-toolbar>
        <v-toolbar-title>Usuarios</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn text to="/add">Add User</v-btn>
            <v-btn text to="/list">List</v-btn>
        </v-toolbar-items>
    </v-toolbar>      
      <router-view></router-view>
  </v-content>
</template>

<script>
export default {

}
</script>

<style>

</style>