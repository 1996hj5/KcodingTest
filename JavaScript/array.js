function solution(arr, divisor) {
  var answer = arr.filter(v => {
    if(v % divisor === 0){
      return v;
    }
  })
  if(answer.length == 0){
    answer.push(-1);
  }
  answer.sort((a,b) => a-b);
  return answer;
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));


/*
  https://programmers.co.kr/learn/courses/30/lessons/12910
  나누어 떨어지는 숫자 배열
*/