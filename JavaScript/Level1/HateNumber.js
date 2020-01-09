function solution(arr) {
  var answer = [];
  for(var i = 0; i < arr.length; i++){
    if (!answer.includes(arr[i]) || answer[answer.length - 1] != arr[i]){
      answer.push(arr[i]);
    }
  };
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12906
  같은숫자는싫어
*/