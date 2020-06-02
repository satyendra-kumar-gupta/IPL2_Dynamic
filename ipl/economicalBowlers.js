function economicalBowlers(deliveries, matches) {

    let result4 = {};
    let result44 = {};
    let year = 2015;
    let id = matches.filter(match => (match.season) == Number(year)).map(match => match.id);

    let bowler_name = (deliveries.filter(a => (a.match_id) >= Number(id[0]) && (a.match_id) <= Number(id[id.length - 1]))
        .map(a => a.bowler));

    let wide_runs = (deliveries.filter(a => (a.match_id) >= Number(id[0]) && (a.match_id) <= Number(id[id.length - 1]))
        .map(a => a.wide_runs));


    let noball_runs = (deliveries.filter(a => (a.match_id) >= Number(id[0]) && (a.match_id) <= Number(id[id.length - 1]))
        .map(a => a.noball_runs));

    let total_runs = (deliveries.filter(a => (a.match_id) >= Number(id[0]) && (a.match_id) <= Number(id[id.length - 1]))
        .map(a => a.total_runs));

    var uniqueArray = [...new Set(bowler_name)]


    //let r = {};
    for (let j = 0; j < uniqueArray.length; j++) {

        let run = 0;
        let ball = 0;
        for (let i = 0; i < bowler_name.length; i++) {
            if (uniqueArray[j] === bowler_name[i]) {
                if (noball_runs[i] == "0" && wide_runs[i] == "0") {
                    ball++;
                }
                run = run + Number(total_runs[i]);

            }
        }
        let economy = Number((6 * (run / ball)).toFixed(2));
        result4[uniqueArray[j]] = economy;
    }
    const objectArray = Object.entries(result4);
    objectArray.sort(sortFunction);

    function sortFunction(a, b) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] < b[1]) ? -1 : 1;
        }
    }
    const objectArray1=objectArray.slice(0,10);
    for (var i = 0; i < objectArray1.length; ++i){
        for(var j=0; j<objectArray1[i].length-1; j++){
           //console.log(arr[i][j]);
           result44[objectArray1[i][j]]=objectArray1[i][j+1]
        }
       }

    //result3[year] = r;
    return result44;

}



module.exports = economicalBowlers;
