function solution(x, n) {
  var answer = [];
  for(var i = 1; i<=n; i++){
    answer.push(x * i);
  }
  return answer;
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12954
  x만큼 간격이 있는 n개의 숫자
*/