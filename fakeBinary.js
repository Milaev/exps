function fakeBin(x){
  let string = '';
  
  for (let i = 0; i < x.length; i++) {
    if (parseInt(x[i]) < 5) {
      string += '0';
    } else {
      string += '1';
    }
  }
  return string;
}


console.log(fakeBin('272636545234246233748959698578365321'));