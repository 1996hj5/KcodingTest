function solution(n) {
  var answer = '';
  var arr = ["4", "1", "2"];
  var Remain = 0;
  while(n > 0){
    Remain = n % 3;
    n = parseInt(n / 3);
    if(Remain === 0){
      n--;
    }
    answer = arr[Remain] + answer;
  }
  return answer;
}

console.log(solution(10));
console.log(solution(9));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12899
  Level2 124 나라의 숫자
*/