function solution(x) {
  var xs = (x + '').split('')
  var hap = 0;
  xs.filter(v => hap += v * 1);
  return x % hap === 0 ? true : false;
}

console.log(solution(10));
/*
  https://programmers.co.kr/learn/courses/30/lessons/12947
  하샤드 수
*/