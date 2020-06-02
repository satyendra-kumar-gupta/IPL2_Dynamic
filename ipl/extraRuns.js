function extraRuns(deliveries, matches) {
    let result3 = {};
   // let k=2016;
   // if(k==2016){
    for (let k = 2008; k <= 2019; k++) {
        let id = matches.filter(match => (match.season) == Number(k)).map(match => match.id);

        let team;
        team = (deliveries.filter(delivery => (delivery.match_id) >= Number(id[0]) && (delivery.match_id) <= Number(id[id.length - 1]) && (delivery.extra_runs) > 0)
            .map(delivery => delivery.bowling_team)); // bowling_team name store
        let extrarun = (deliveries.filter(delivery => (delivery.match_id) >= Number(id[0]) && (delivery.match_id) <= Number(id[id.length - 1]) && (delivery.extra_runs) > 0)
            .map(delivery => delivery.extra_runs)); // only get extra run per year
        var uniqueArray = [...new Set(team)] //Get all unique values in a JavaScript array (remove duplicates)

        let r = {}; // object 
        for (let j = 0; j < uniqueArray.length; j++) {
            let t = uniqueArray[j].split(" "); // break team name bcoz (name is long)

            let c = 0;
            for (let i = 0; i < team.length; i++) {
                let h = team[i].split(" ");
                if (t[0] === h[0]) {
                    c = c + Number(extrarun[i]);
                }
            }
            r[uniqueArray[j]] = c; // {"Rising Pune Supergiants": 108,}
        }
        result3[k] = r; //"extraRuns": 2008: {"Rising Pune Supergiants": 108,}
    }

    return result3;
}
//}
module.exports = extraRuns;

