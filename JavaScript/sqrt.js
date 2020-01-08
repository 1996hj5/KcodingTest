function solution(n) {
  var answer = parseInt(Math.sqrt(n));
  return n != Math.pow(answer, 2) ? answer = -1 : answer = Math.pow(answer + 1, 2);
}

console.log(3);
console.log(121);

/*
  https://programmers.co.kr/learn/courses/30/lessons/12934
  정수 제곱근 판별
*/