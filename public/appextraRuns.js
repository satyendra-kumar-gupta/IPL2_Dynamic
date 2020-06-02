function showData() {
    const season = Number(document.getElementById("seasons1").value);
    console.log(season);
    fetch("/extraRuns?year=" + season)
      .then(resp => resp.json())
      .then(response => {
          visualizeExtraRuns(response);
        function visualizeExtraRuns(response) {
          const seriesData = [];
          for (let team in response) {
            seriesData.push([team, response[team]]);
          }
          Highcharts.chart("extra-runs", {
            chart: {
              type: "column"
            },
            title: {
              text: `Extra Runs Conceded By Each Team in ${season}`
            },
            subtitle: {
              text:
                'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
            },
            xAxis: {
              title: {
                text: "Teams"
              },
              type: "category"
            },
            yAxis: {
              min: 0,
              title: {
                text: "Extra Runs"
              }
            },
            series: [
              {
                name: "Extra Runs",
                data: seriesData
              }
            ]
          });
        }
      }).catch(err => {
  console.error('Error: ', err);
});
}