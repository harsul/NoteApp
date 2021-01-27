$(function(){

  'use strict'

  $('.peity-donut').peity('donut');
  $('.peity-line').peity('line');
  $('.peity-bar').peity('bar');

  var options = {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true,
          fontSize: 8,
          fontFamily: 'Roboto'
        }
      }],
      xAxes: [{
        ticks: {
          fontSize: 9,
          fontFamily: 'Roboto'
        }
      }]
    }
  };

  var ctx1 = document.getElementById('chartjs1');
  if(ctx1) {
    var myChart1 = new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: '# of Votes',
          data: [6, 10, 8, 12, 8, 13, 10, 19, 10, 5, 8, 15],
          borderColor: 'rgba(54, 162, 235, 0.85)',
          fill: false
        }]
      },
      options: options
    });
  }

  var ctx2 = document.getElementById('chartjs2');
  if(ctx2) {
    var myChart2 = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: '# of Votes',
          data: [6, 10, 8, 12, 8, 13],
          borderColor: '#AC10ED',
          fill: false
        }]
      },
      options: options
    });
  }

})
