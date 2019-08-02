<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <SlotDiv>
          SlotContent
        </SlotDiv>

      </v-flex>
      <v-flex xs12>
        <h1>Datepicker</h1>
        <v-btn @click="getReservations">Get Reservations</v-btn>
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
      <v-form class="compactForm">
        <v-flex >
          <v-text-field
            small
            v-model="textVal"
            :rules="nameRules"
            :counter="20"
            label="First Name"
            required
          ></v-text-field>

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
            <v-date-picker 
              v-model="date" 
              event-color="success"
              header-color="#ff0000"
              @input="handleCheckinInput"
            ></v-date-picker>
          </v-menu>
        </v-flex>
      </v-form>
    </v-layout>

  </v-container>

</template>

<script>
  import moment from 'moment'
  import api from './../api/api.js'
  import SlotDiv from './../components/SlotDiv.vue'
  export default{
    computed: {
      computedDate: function(){
        return moment(this.date).format('MMM D YYYY')
      }
    },
    components: {
      SlotDiv
    },
    data: function(){
      return{

        date: '2019-08-27',
        menu2: false,
        nameRules: [
          v => !!v || 'Name is required',
          v => v.length <= 20 || 'FirstName must be less than 20 characters'
        ],
        textVal: "someVal"

      }
    },
    name: "Datepicker",
    methods: {
      getReservations: function(){
        api.getReservations().then( function( response ){
          console.log( "response", response );
        });

      },
      handleCheckinInput: function(){
        console.log("handleCheckinInput() fires . . .");
        console.log("this.date", this.date);
        this.menu2 = false;
      }
    }

  }

</script>

<style>

</style>