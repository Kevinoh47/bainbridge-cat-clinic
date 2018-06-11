showFearFreeGrowth({
  ffg: [
    {
      // type: 'line',
      data: {
        labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        datasets: [
          {
            data: [0, 2, 5, 15, 25, 73, 79, 82, 91, 110],
            label: 'Fear-Free Vets',
            borderColor: '#3e95cd',
            fill: false,
          },
          {
            data: [19, 32, 55, 75, 125, 143, 179, 232, 291, 310],
            label: 'Cats-Only Vets',
            borderColor: '#ffb87a',
            fill: false,
          },
        ],
      },
      // options: {
      //   title: {
      //     display: true,
      //     text: 'Growth of Fear-Free Vet Practices',
      //   },
      // },
    },
  ],
});
