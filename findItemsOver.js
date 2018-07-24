
module.exports =  function(list,threshold){
  var listIt =[]
  for(var i=0;i<list.length; i++){
 		if (list[i].qty > threshold){
		listIt.push(list[i])
        }

        }
return listIt;

}
