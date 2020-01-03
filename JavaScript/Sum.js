function solution(a, b) {
  var start = 0;
  var end = 0;
  var answer = 0;
  a > b ? (start = b , end = a) : (start = a, end = b);
  for(var i = start; i<=end; i++){
    answer+=i;
  }
  return answer;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12912
  두 정수의 합
  3항으로 변수값을 조정하는게 효울성이 좋다 생각하여 하였음.
*/