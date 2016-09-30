const vm = new Vue({
  el: '#app',
  data: {
    heading: 'Calendar UI',
    today: new Date(),
  },
  computed: {
    todaymap: function (){
      var today = this.today;
      var monthNames = {
        0: 'January', 1: 'February', 2: 'March', 3: 'April',
        4: 'May', 5: 'June', 6: 'July', 7: 'August',
        8: 'September', 9:'October', 10: 'November',
        11: 'December'
      }

      return {
        month: today.getMonth(),
        year: today.getFullYear(),
        date: today.getDate(),
        daysIntheMonth: new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(),
        leaveStart: new Date(today.getFullYear(), today.getMonth(), 1).getDay(),
        monthName: monthNames[today.getMonth()]
      };
    },
    monthDays: function () {
      var days = [],
          i, j, currentDay, day;
      for(j = 0; j < this.todaymap.leaveStart; j++){
        days.push({
          date: 0
        });
      }
      console.log(days.length);
      for(i = 1; i < this.todaymap.daysIntheMonth + 1; i++){
        currentDay = new Date(this.todaymap.year, this.todaymap.month, i);
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
      // var that = this;
      // setInterval(function() {
      //   that.$set('today', new Date());
      // }, 1000);
    }
  },
  ready: function() {
    this.doInit();
  }
})
