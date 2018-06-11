function showFearFreeGrowth(data) { //  callback when JSON loads.
  var myFFG = data.ffg;
  var myData = myFFG[0].data;
  const ctxt = document.getElementById('ff-chart');
  const myChart = new Chart(ctxt, {
    type: 'line',
    data: {
      labels: myData.labels,
      datasets: myData.datasets,
    },
    options: {
      title: {
        display: true,
        text: 'Growth of Fear-Free Vet Practices',
      },
    },
  });

  document.getElementById('ff-chart').innerHTML = myChart;
}

