module.exports = function(){
var findItemsOver20 = function(list){
  var listIt =[]
  for(var i=0;i<list.length; i++){
 		if (list[i].qty > 20){
		listIt.push(list[i])
        }

        }
return listIt;
}}
