function solution(n) {
  var answer = '';
  for(var i = 0; i<n; i++){
    if(i % 2 === 0){
      answer += "수";
    }else{
      answer += "박";
    }
  }
  return answer;
}

console.log(solution(3));
console.log(solution(4));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12922
  수박수박수.... 구하기

*/