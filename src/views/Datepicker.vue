<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <h1>Datepicker</h1>
      </v-flex>
      <!--
      <v-flex xs12>
        <v-menu
          ref="resDate"
          v-model="resDatePicker"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="start"
          lazy
          transition="scale-transition"
          offset-y
          label='Calendar Start'
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="resStartFormatted"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker 
            v-model="start" 
            @input="resDateInput"
          />
        </v-menu>
      </v-flex>
      -->
    </v-layout>
    
    <v-layout row>
      <v-flex xs12>
        <div>date: {{ date }} </div>
        <div>computedDate: {{ computedDate }} </div>
      </v-flex>
      <v-flex xs4 sm4 md4>
        <v-menu
          v-model="menu2"
          :close-on-content-click="true"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="computedDate"
              label="Checkin"
              prepend-icon="mdi-calendar-month-outline"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-flex>
    </v-layout>

  </v-container>

</template>

<script>
  import moment from 'moment'
  export default{
    computed: {
      computedDate: function(){
        return moment(this.date).format('MMM D YYYY')
      }
    },
    data: function(){
      return{

        date: '2019-08-27',
        menu2: false

      }
    },
    name: "Datepicker",
    methods: {

    }

  }

</script>

<style>

</style>