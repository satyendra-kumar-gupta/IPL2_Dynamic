function storyTossWinner(matches) {
    const result5={};
    for(let i=2008; i<=2019; i++){
        let team=matches.filter(a=> (a.season)==Number(i));
       //var abc=team;
      // break;
    const result55 = {};
    for (let match of team) {
        
      const toss_winner = match.toss_winner;
      if (result55[toss_winner]) {
        result55[toss_winner] += 1;
      } else {
        result55[toss_winner] = 1;
      }
    }
    result5[i]=result55;
    }
    return result5;
}

module.exports = storyTossWinner;