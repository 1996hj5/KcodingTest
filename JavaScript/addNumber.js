function solution(n) {
  var answer = 0;
  var s = n+'';
  for(var i = 0; i<s.length; i++){
    answer += s[i] * 1;
  }
  return answer;
}

console.log(solution(123));
console.log(solution(987));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12931
  자릿수 더하기
*/