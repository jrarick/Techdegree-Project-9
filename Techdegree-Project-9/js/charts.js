const trafficChart = $('#trafficChart');
const dailyChart = $('#dailyChart');
const mobileChart = $('#mobileChart');

const trafficXAxis = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-7', '18-24', '25-31'];
const trafficYAxis = ['500', '1000', '1500', '2000', '2500'];

const dailyXAxis = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const dailyYAxis = [50, 100, 150, 200, 250];

const myLineChart = new Chart(trafficChart, {
  type: 'line',
  data: {
    labels: trafficXAxis,
    datasets: [{
      data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
      borderWidth: 1,
      borderColor: '#7477bf',
      backgroundColor: '#e2e3f6',
      pointBackgroundColor: '#ffffff',
      pointRadius: 7,
      pointHoverBorderWidth: 7,
      pointHoverBorderColor: "#7477bf",
      lineTension: 0,
    }],
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true,
          stepValue: 500,
          max: 2500,
        },
      }],
    },
    legend: {
      display: false,
    },
  },
});

const myBarChart = new Chart(dailyChart, {
  type: 'bar',
  data: {
    labels: dailyXAxis,
    datasets: [{
      data: [75, 100, 175, 125, 225, 200, 100],
      backgroundColor: '#7477bf',
      hoverBackgroundColor: '#4d4c72',
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          beginAtZero: true,
          stepValue: 50,
          max: 250,
        },
      }],
    },
    legend: {
      display: false,
    },
  },
});

const myDoughnutChart = new Chart(mobileChart, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [20, 15, 65],
      backgroundColor: [
        '#81c98f',
        '#74b1bf',
        '#7477bf',
      ],
    }],
    labels: [
      'Phones',
      'Tablets',
      'Desktops',
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      position: 'right',
      display: true,
      labels: {
        fontColor: '#666666',
        fontSize: 16,
        boxWidth: 15,
        padding: 20,
      },
      layout: {
        margin: {
          left: 0,
          right: 0,
          top: 350,
          bottom: 0
        },
      },
    },
  },
});
