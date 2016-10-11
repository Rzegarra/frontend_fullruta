var clock;
$(document).ready(function() {
  var currentDate = new Date();
  var futureDate  = new Date("October 19, 2016 18:00:00");
  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
  clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
  });
});