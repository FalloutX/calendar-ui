const vm = new Vue({
  el: '#app',
  data: {
    heading: 'Calendar UI',
    today: new Date(),
    date: undefined,
    month: undefined,
    year: undefined,
    monthNames : {
      0: 'January', 1: 'February', 2: 'March', 3: 'April',
      4: 'May', 5: 'June', 6: 'July', 7: 'August',
      8: 'September', 9:'October', 10: 'November',
      11: 'December'
    }
  },
  computed: {
    monthName: function(){
      return this.monthNames[this.month];
    },

    monthDays: function () {

      var days = [],
          daysIntheMonth = new Date(this.year, this.month + 1, 0).getDate(),
          leaveStart = new Date(this.year, this.month, 1).getDay(),
          i, j, currentDay, day;
      for(j = 0; j < leaveStart; j++){
        days.push({
          date: 0
        });
      }
      for(i = 1; i < daysIntheMonth + 1; i++){
        currentDay = new Date(this.year, this.month, i);
        day = {
          date: currentDay.getDate(),
          year: currentDay.getFullYear(),
          day: currentDay.getDay(),
          month: currentDay.getMonth()
        }
        days.push(day);
      }

      return days;
    }
  },
  methods: {
    doInit: function(){
      console.log("doInit");

      var today = new Date();
      console.log(today);
      this.date = today.getDate();
      this.year = today.getFullYear();
      this.month = today.getMonth();
      this.today = today;



      // var that = this;
      // setInterval(function() {
      //   that.$set('today', new Date());
      // }, 1000);
    },
    isToday: function (date){
      return (date.year === this.today.getFullYear() & date.month === this.today.getMonth() & date.date === this.today.getDate())
    },
    changeMonth: function(direction) {
      if(direction > 0 ) {
        if (this.month + 1 < 12) this.month = this.month + 1;
        else {
          this.month = (this.month + 1) % 12;
          this.year = this.year + 1;
        }
      } else if (direction < 0) {
        if (this.month - 1 > -1) this.month = this.month - 1;
        else {
            this.month = 12 - 1;
            this.year = this.year - 1;
        }
      } else {
        this.month;
      }
    },
    changeYear: function(direction) {
      if (direction > 0) {
        this.year = this.year + 1;
      } else if (direction < 0 ){
        this.year = this.year - 1;
      } else {
        this.year;
      }
    }
  },
  mounted: function (){
    this.doInit();
  }
})
