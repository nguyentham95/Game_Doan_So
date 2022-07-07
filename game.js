function play() {
    let maxnumber = +prompt("Nhập vào số lớn nhất");
    let rndNumber = Math.round(Math.random()*maxnumber);
    let count = 0;
  
  
  let i = 1;
  while (i <= 3) 
  {
    let Number = +prompt("Nhập vào số bạn đoán: ");
    count ++;
    i++
  
    if (rndNumber == Number) {
      alert("Chúc mừng bạn đã đoán trúng");
      break;
    } else if (rndNumber > Number){
    alert("Số bạn đoán nhỏ hơn số bí mật, vui lòng nhập lại");

    } else if (rndNumber < Number) {
        alert("Số bạn đoán lớn hơn số bí mật, vui lòng nhập lại"); 
    }

    if (count == 3) {
      alert("Game Over! Bạn chỉ được nhập tối đa 3 lần");
      break;
    }
  } 

}
