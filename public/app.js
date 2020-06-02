function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  //question number 1 start...
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear); //question 1
  // question 2 start...
  var a = formater((data.matchesWonByEachTeam), n = []);
  for (team in a) { (l = {}).name = team, l.data = a[team], n.push(l) }
  visualizeMatchesWonByEachTeam(data.matchesWonByEachTeam, n);  //question 2 end...
 
 // visualizeExtraRuns(data.extraRuns); //question 3
  visualizeEconomicalBowlers(data.economicalBowlers); //question 4
  // question 5 start...
  var a1 = formater1((data.storyTossWinner), m = []);
  for (team in a1) { (l = {}).name = team, l.data = a1[team], m.push(l) }
  visualizeStoryTossWinner(data.storyTossWinner, m);  //question 5 end...
  return;
}
//remaining part question number 2
function formater(e) {
  var t = {}, a = -1; for (var n in e) {
    for (var i in a++, e[n]) {
      if (console.log(i), !t.hasOwnProperty(i)) {
        t[i] = []; for (var o = 0; o < a; o++)t[i].push(0)
      }
      t[i].push(e[n][i]);
    }
    for (i in t) t[i].length < a + 1 && t[i].push(0)
  }
  return t;
} //end
//reaming art question number 5
function formater1(e) {
  var t = {}, a = -1; for (var n in e) {
    for (var i in a++, e[n]) {
      if (console.log(i), !t.hasOwnProperty(i)) {
        t[i] = []; for (var o = 0; o < a; o++)t[i].push(0)
      }
      t[i].push(e[n][i]);
    }
    for (i in t) t[i].length < a + 1 && t[i].push(0)
  }
  return t;
} //end

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}

//question number 2
function visualizeMatchesWonByEachTeam(e, t) {

  Highcharts.chart('matches-won-by-over-year', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Matches Won By Each Team Over All Year'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: Object.keys(e),
      crosshair: !0
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Won Each Year'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: t

  });

}

//question 3

// function visualizeExtraRuns(extraRuns) {
//   const seriesData3 = [];
//   for (let team in extraRuns) {
//     seriesData3.push([team, extraRuns[team]]);
//   }
 

//   Highcharts.chart('extra-runs', {
//    /* chart: {
//       type: "column"
//   },
//   title: {
//       text: "In 2016 Year, Extra Runs Conceded By Each Team."
//   },
//   subtitle: {
//       text: 'Source: <a href="http://ipl.com">ipl</a>'
//   },
//   xAxis: {
//       type: "category",
//       labels: {
//           rotation: -45,
//           style: {
//               fontSize: "13px",
//               fontFamily: "Verdana, sans-serif"
//           }
//       }
//   },
//   yAxis: {
//       min: 0,
//       title: {
//           text: "Extra Runs"
//       }
//   },
//   legend: {
//       enabled: !1
//   },
//   tooltip: {
//       pointFormat: "Extra runs: <b>{point.y:0.0f} </b>"
//   },
//   series: [{
//       name: "Bowlers",
//       data: seriesData3,
//       dataLabels: {
//           enabled: !0,
//           rotation: 0,
//           color: "#FFFFFF",
//           align: "center",
//           y: 25,
//           style: {
//               fontSize: "13px",
//               fontFamily: "Verdana, sans-serif"
//           }
//       }
//   }]
// }); */
// chart: {
//   type: 'column'
// },
// title: {
//   text: 'In 2016 Year, Extra Runs Conceded By Each Team.'
// },
// subtitle: {
//   text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
// },
// xAxis: {
//   type: 'category',
//   labels: {
//       rotation: -45,
//       style: {
//           fontSize: '13px',
//           fontFamily: 'Verdana, sans-serif'
//       }
//   }
// },
// yAxis: {
//   min: 0,
//   title: {
//       text: 'Extra Runs'
//   }
// },
// legend: {
//   enabled: false
// },
// tooltip: {
//   pointFormat: 'Extra Run in 2016: <b>{point.y:.1f} Runs</b>'
// },
// series: [{
//   name: 'Extra Run',
//   data:seriesData3,
//   dataLabels: {
//       enabled: true,
//       rotation: -90,
//       color: '#FFFFFF',
//       align: 'right',
//       format: '{point.y:.1f}', // one decimal
//       y: 10, // 10 pixels down from the top
//       style: {
//           fontSize: '13px',
//           fontFamily: 'Verdana, sans-serif'
//       }
//   }
// }]
// });
// }

//question number 4
function visualizeEconomicalBowlers(economicalBowlers){
  const seriesData4 = [];
  for (let bowlers in economicalBowlers) {
    seriesData4.push([bowlers, economicalBowlers[bowlers]]);
  }
  Highcharts.chart('economical-bowlers', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Top 10 Economical Bowlers In 2015'
    },
    subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Economical (rate)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Economical bowlers in 2015: <b>{point.y:.1f} rate</b>'
    },
    series: [{
        name: 'Economical',
        data: seriesData4,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
}

//question number 5
function visualizeStoryTossWinner(e,t){
  Highcharts.chart('story-toss-winner', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Story : Toss Winner Each Year'
    },
    xAxis: {
        categories: Object.keys(e)
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total toss winner'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: t
});

}