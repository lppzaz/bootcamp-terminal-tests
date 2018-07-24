
module.exports = function(day){
var isWeekend = day.startsWith('S');
if(isWeekend){return false;
}
else{return true;}
};

