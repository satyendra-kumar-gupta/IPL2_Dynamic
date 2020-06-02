const fs = require("fs");
const csv = require("csvtojson");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear"); //matchesPlayedPerYear() for this function
const matchesWonByEachTeam = require("./ipl/matchesWonByEachTeam"); //matchesWonByEachTeam() for this function
const extraRuns = require("./ipl/extraRuns"); //extraRuns() for this function
const economicalBowlers = require("./ipl/economicalBowlers"); //economicalBowlers() for this function
const storyTossWinner = require("./ipl/storyTossWinner"); //storyTossWinner() for this function
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH3 = "./public/data1.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      // ****** deliveries start here ******* 
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {

          //console.log(deliveries.slice(0,12),"deliveries");
          //console.log(matches.slice(0,5),"matches");
          let result = matchesPlayedPerYear(matches); //console.log(result);
          let result22 = matchesWonByEachTeam(matches);  // console.log(result22);
          let result3 = extraRuns(deliveries, matches); //console.log(result3);
          let result4 = economicalBowlers(deliveries, matches);//console.log(result4); 
          let result5 = storyTossWinner(matches); //console.log(result5);
          
          //saveMatchesPlayedPerYear(result, result22, result3,result4,result5);
          saveMatchesPlayedPerYear(result, result22,result4,result5);
          saveMatchesPlayedPerYear3(result3);
        });
      // ****** deliveries end here *******
    });
}
function saveMatchesPlayedPerYear(result, result22, result4,result5) {
  const jsonData = {
    matchesPlayedPerYear: result,
    matchesWonByEachTeam: result22,
   // extraRuns: result3,
    economicalBowlers: result4,
    storyTossWinner: result5
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });

}
function saveMatchesPlayedPerYear3(result3) {
  const jsonData = {
    // matchesPlayedPerYear: result,
    // matchesWonByEachTeam: result22,
     extraRuns: result3
    // economicalBowlers: result4,
    // storyTossWinner: result5
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH3, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });

}
main();