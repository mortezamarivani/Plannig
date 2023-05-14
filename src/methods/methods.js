function GetCurrency(currencyNum){
    if(currencyNum == 0 || currencyNum == '')  return null;
    if(currencyNum == 1)   return 'USD';
    else if(currencyNum == 2) return 'EUR';
    else if(currencyNum == 3) return 'CAD';
  }