function solution(s) {
  var answer = '';
  var tarr = s.split(' ');
  var ts = [];
  ts.push(Math.min.apply(null,tarr));
  ts.push(Math.max.apply(null,tarr));
  answer = ts.join(' ');
  return answer;
}
console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 1"));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12939
  최대값과 최소값

*/