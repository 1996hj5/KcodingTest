function solution(n) {
  var answer = 0;
  for(var i = 0; i<=n; i++){
    if(n % i === 0) answer += i;
  }
  return answer;
}

console.log(solution(12));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12928
  약수의 합
*/
