function solution(n) {
  var answer = (n + '').split('');
  return parseInt(answer.sort((a, b) => (b + a) - (a + b)).join(''))
}
console.log(118732);
/*
  https://programmers.co.kr/learn/courses/30/lessons/12933
  정수 내림차순 만들기
*/