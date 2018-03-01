module.exports = function getZerosCount(number) {

  
  var n = 5, end = 0;
  while (n < number){
        end += Math.floor(number/n);
          n *= 5;
  }
      return  end;
  }

