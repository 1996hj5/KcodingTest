function solution(n) {
  var b1 = n.toString(2).match(/1/g);
  var index = 1;
  while(true){
    var b2 = (n+index).toString(2).match(/1/g);
    if(b1.length === b2.length){
      return n+index;
    }else{
      index++;
    }
  }
}

console.log(solution(78));
console.log(solution(15));


/*
  https://programmers.co.kr/learn/courses/30/lessons/12911
  생각한대로 해봣더니 되었다. match를 통한 정규식을 쓰니 자연스럽게 Array형태로 1만 들어오게되었고
  그것을 비교하면서 더하고 서로 같을때 리턴하였다.
  다음 큰 숫자
*/