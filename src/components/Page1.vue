<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <h3>Page1</h3>
        <CheckinDatepicker
          :checkin="checkin"
          @change-checkin="changeCheckin"
        >

        </CheckinDatepicker>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  //import moment from 'moment'
  import CheckinDatepicker from './../components/CheckinDatepicker.vue'
  export default{
    components: {
      CheckinDatepicker
    },
    data: function(){
      return {
        checkin: '2019-08-27' 
      }
    },
    methods:{
      changeCheckin: function( newCheckin ){
        console.log("Parent component (Page1)", newCheckin);
        this.checkin = newCheckin;
      }
    }
  }
</script>