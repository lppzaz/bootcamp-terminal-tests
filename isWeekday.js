module.exports = function(){
var isWeekday = function(day){
var isWeekend = day.startsWith('S');
if(isWeekend){return false;
}
else{return true;}
};
}
