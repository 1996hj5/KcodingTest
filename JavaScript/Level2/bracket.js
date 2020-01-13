function solution(s) {
  var count = 0;
  for(var i = 0; i<s.length; i++){
    s[i] === '(' ? count++ : count--;
    if(count < 0) return false;
  }
  return count !== 0 ? false : true;
}

console.log(solution("(())()"));
console.log(solution("(())())"));
/*
  https://programmers.co.kr/learn/courses/30/lessons/12909
  올바른 괄호
  단순한 알고리즘으로 생각해서 해보았다 그런데 되네?!...
*/