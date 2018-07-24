module.exports = function(){
var totalPhoneBill = function(bills){
	var data = bills.split(', ');//creates an array
	var totalbill = 0;

	for (var i=0;i<data.length;i++){
    	if (data[i]=="call"){
          totalbill= totalbill + 2.75;
        }else if (data[i]=="sms"){
          totalbill= totalbill +0.65;
        }

    }

  return "R"+totalbill.toFixed(2);
};
}
