<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      mobile-break-point="600"
    >
      <v-list dense>
        <v-list-item  to='/home'>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to='/datepicker'>
          <v-list-item-action>
            <v-icon>mdi-curling</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Datepicker</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/page1">
          <v-list-item-action>
            <v-icon>mdi-cube-unfolded</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Page1</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/resTable">
          <v-list-item-action>
            <v-icon>mdi-cube-unfolded</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ResTable</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Lazy Lizard Reservations</v-toolbar-title>
    </v-app-bar>

    

    <v-content>
      <router-view></router-view>
      
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import api from './api/api.js'
  export default {
    created: function(){
      //load initial space information
      var self = this;
      api.getSpaces().then( function(response){
        self.$store.commit('setSpaces', response.data.spaces);
      });
      api.getSpaceTypes().then( function(response){
        self.$store.commit('setSpaceTypes', response.data.space_types);
      });
      api.getSelectGroups().then( function(response){
        self.$store.commit('setSelectGroups', response.data.selectGroups);
      });
      api.getReservations().then( function(response){
        self.$store.commit('setReservations', response.data);
      });
    },
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>