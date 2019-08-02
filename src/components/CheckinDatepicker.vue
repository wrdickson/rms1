<template>
  <div>
    <v-snackbar
      v-model="snackbar"
      :timeout=2000
      :top='true'
      color='info'
    >
      {{ snackbarText }}
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <v-flex >
      <v-menu
        v-model="pickerShown"
        :close-on-content-click="true"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="localCheckin"
            label="Checkin"
            prepend-icon="mdi-calendar-month-outline"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker 
          v-model="localCheckin" 
          event-color="success"
          header-color="#222"
        ></v-date-picker>
      </v-menu>
    </v-flex>
  </div>
</template>

<script>
  import api from './../api/api.js'
  export default{
    computed: {
      localCheckin: {
        get: function(){
          return this.checkin
        },
        set: function(val){
          console.log("localCheckin set()", val);
          // check the value here for availability
          api.headerTest().then( function( response ){

          });
          let available = false;
          if( available == true){
            this.$emit('change-checkin', val);
          } else {
            this.snackbarText = "Not available";
            this.snackbar = true;
          }          
        }
      }
    },
    data: function(){
      return {
        pickerShown: false,
        snackbar: false,
        snackbarText: ''
      }
    },
    methods: {
      handleCheckinInput(){

      }
    },
    props: {
      checkin: String
    }

  }

</script>