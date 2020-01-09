function solution(n) {
  var answer = [];
  for(var i = 0; i <= n; i++){
    answer.push(true);
  }
  for(var i = 2; i*i <= n; i++){
    if (answer[i]){
      for(var j = i*i; j <= n; j+=i){
        answer[j] = false;
      }
    }
  }
  answer.splice(0,2,false,false);
  var result = answer.filter(v => v !== false);
  return result.length;
}

console.log(solution(6201239));
console.log(solution(5));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12921
  소수 구하기
  효율성을 위하여 (에라토스테네스의 체) 를 이용
*/
