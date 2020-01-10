function solution(heights) {
  var answer = [];
  for(var i = 0; i<heights.length; i++){
    answer.push(0);
  }
  for(var i = heights.length; i>0; i--){
    for(var j = i-1; j >= 0; j--){
      if(heights[j] > heights[i]){
        answer[i] = j+1;
        break;
      }
    }
  }
  return answer;
}

console.log(solution([6, 9, 5, 7, 4]));
console.log(solution([3, 9, 9, 3, 5, 7, 2]));

/*
  https://programmers.co.kr/learn/courses/30/lessons/42588
  탑
*/