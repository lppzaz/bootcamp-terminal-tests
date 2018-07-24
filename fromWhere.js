
module.exports = function(license){
    if (license === 'CY 1234'){
        return "Bellville"
    }
    else if (license === 'CJ 1234'){
        return "Paarl"
    }
  else if (license === 'CA 1234'){
        return "Cape Town"
    }
    else{
        return "Some other place!";
    }
};

