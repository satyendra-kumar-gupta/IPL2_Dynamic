function matchesWonByEachTeam(matches){
    const result22={};
    for(let i=2008; i<=2019; i++){
        let team=matches.filter(a=> (a.season)==Number(i));
        //console.log(team);
        //break;
    const result2 = {};
    for (let match of team) {
        
      const winner = match.winner;
      if (result2[winner]) {
        result2[winner] += 1;
      } else {
        result2[winner] = 1;
      }
    }
    result22[i]=result2;
    }
    return result22;
}
module.exports = matchesWonByEachTeam;