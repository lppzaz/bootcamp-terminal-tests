module.exports = function(){
var mostProfitableDepartment = function(what){
var depMap = {};
for (var i = 0; i < what.length; i++) {
    var currentDept = what[i].department;
    if (depMap[currentDept] === undefined){
        depMap[currentDept] = 0;
    }

    depMap[currentDept] = depMap[currentDept] + what[i].sales

}
  	var max = 0
    var profDept = ''
   for(var key in depMap){
   if (depMap[key]>max){
     max = depMap[key]
     profDept = key;
   	}
console.log(depMap);
}
  return profDept
}}
