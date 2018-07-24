module.exports = function(){
var countAllPaarl = function(reg){

	var regNumber = reg.split(', ');

	var eReg = [];
	for (var i=0;i<regNumber.length;i++){
    	var regg = regNumber[i];
   //check if the current reg starts with 'CJ'
    		if (regg.startsWith('CJ')){
            // add reg starting with 'CJ' to the list
    			eReg.push(regg);

            }
  }
  console.log(eReg);
  return eReg.length;
    	}}
