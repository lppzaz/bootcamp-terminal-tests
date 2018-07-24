module.exports = function(){
var countAllFromTown = function(Reg, location){
	var regNumber = Reg.split(',');
	var eReg = [];

  for (var i=0;i<regNumber.length;i++){
    	var regg = regNumber[i];

        //check if the current reg starts with 'CJ'
    		if (regg.startsWith('CL')){
            // add reg starting with 'CJ' to the list
    		eReg.push(regg);

    	}
   			}
  return eReg.length;
}
}
// should print [CJ License plates]
//console.log(eReg);

