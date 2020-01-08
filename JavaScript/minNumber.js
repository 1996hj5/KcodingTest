function solution(arr) {
  arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
  var answer = arr;
  return answer.length === 0 ? [-1] : answer;
}

console.log(solution([4,3,2,1]));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12935
  제일 작은 수 제거하기
*/
