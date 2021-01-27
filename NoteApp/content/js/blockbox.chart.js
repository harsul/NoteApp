
'use strict';

//////////////////////////////////////////// CHART JS ///////////////////////////////////////////////

var ctx1 = document.getElementById("chartjs1").getContext('2d');
var myChart1 = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(54, 162, 235, 0.85)'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});

var ctx2 = document.getElementById("chartjs2").getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 15, 5, 13, 8,12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.85)',
        'rgba(54, 162, 235, 0.85)',
        'rgba(255, 206, 86, 0.85)',
        'rgba(75, 192, 192, 0.85)',
        'rgba(153, 102, 255, 0.85)',
        'rgba(255, 159, 64, 0.85)',
        'rgba(255, 99, 132, 0.85)',
        'rgba(54, 162, 235, 0.85)',
        'rgba(255, 206, 86, 0.85)',
        'rgba(75, 192, 192, 0.85)',
        'rgba(153, 102, 255, 0.85)',
        'rgba(255, 159, 64, 0.85)'
      ]
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});

var ctx3 = document.getElementById("chartjs3");
var myChart3 = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: '# of Votes',
      data: [6, 10, 8, 12, 8, 13, 10, 19, 10, 5, 8, 15],
      backgroundColor: 'rgba(54, 162, 235, 0.85)'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});

var ctx4 = document.getElementById("chartjs4");
var myChart4 = new Chart(ctx4, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: '# of Votes',
      data: [6, 10, 8, 12, 8, 13, 10, 19, 10, 5, 8, 15],
      borderColor: 'rgba(54, 162, 235, 0.85)',
      fill: false
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});

var ctx5 = document.getElementById('chartjs5');
var myChart5 = new Chart(ctx5, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: '# of Votes',
      data: [6, 3, 4, 1, 5, 3, 8, 5, 10, 5, 8, 16],
      borderColor: 'rgba(22, 149, 245, 1)',
      backgroundColor: 'rgba(22, 149, 245, 0.2)',
      borderWidth: 1
    },{
      label: '# of Votes',
      data: [2, 4, 5, 3, 6, 4, 6, 8, 7, 9, 6, 10],
      borderColor: 'rgba(179, 22, 245, 1)',
      backgroundColor: 'rgba(179, 22, 245, 0.2)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});


var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};

var datapie = {
  datasets: [{
    data: [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
    ],
    backgroundColor: [
      '#FF4136',
      '#FF851B',
      '#FFDC00',
      '#23BF08',
      '#0074D9'
    ],
    label: 'Dataset 1'
  }],
  labels: [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue'
  ]
};

var optionpie = {
  responsive: true,
  legend: {
    position: 'top',
  },
  animation: {
    animateScale: true,
    animateRotate: true
  }
};

// For a doughnut chart
var ctx6 = document.getElementById('chartjs6');
var myPieChart6 = new Chart(ctx6, {
  type: 'doughnut',
  data: datapie,
  options: optionpie
});

// For a pie chart
var ctx7 = document.getElementById('chartjs7');
var myPieChart7 = new Chart(ctx7, {
  type: 'pie',
  data: datapie,
  options: optionpie
});



///////////////////////////////////////// MORRIS CHART /////////////////////////////////////////

new Morris.Bar({
  element: 'morrischart1',
  data: [
    { y: '2006', a: 100, b: 90 },
    { y: '2007', a: 75,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 75,  b: 65 },
    { y: '2010', a: 50,  b: 40 },
    { y: '2011', a: 75,  b: 65 },
    { y: '2012', a: 100, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
  barColors: ['#1695f5', '#ac10ed'],
  resize: true
});

new Morris.Line({
  element: 'morrischart2',
  data: [
    { y: '2006', a: 0, b: 90 },
    { y: '2007', a: 20,  b: 65 },
    { y: '2008', a: 50,  b: 40 },
    { y: '2009', a: 15,  b: 65 },
    { y: '2010', a: 70,  b: 40 },
    { y: '2011', a: 45,  b: 65 },
    { y: '2012', a: 10, b: 90 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
  ymax: 'auto 300',
  resize: true
});

new Morris.Area({
  element: 'morrischart3',
  data: [
    { y: '2006', a: 0, b: 0 },
    { y: '2007', a: 20,  b: 65 },
    { y: '2008', a: 50,  b: 20 },
    { y: '2009', a: 15,  b: 65 },
    { y: '2010', a: 70,  b: 10 },
    { y: '2011', a: 45,  b: 65 },
    { y: '2012', a: 0, b: 0 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Series A', 'Series B'],
  lineColors: ['#1695f5', '#ac10ed'],
  ymax: 'auto 300',
  resize: true
});

new Morris.Donut({
  element: 'morrischart4',
  data: [
    {label: "Download Sales", value: 12},
    {label: "In-Store Sales", value: 30},
    {label: "Mail-Order Sales", value: 20}
  ],
  resize: true
});

new Morris.Donut({
  element: 'morrischart5',
  data: [
    {label: "Download Sales", value: 12},
    {label: "In-Store Sales", value: 30},
    {label: "Mail-Order Sales", value: 20},
    {label: "Online Sales", value: 25}
  ],
  colors: ['#FC5503','#AC10ED','#23BF08','#1695F5'],
  resize: true
});
