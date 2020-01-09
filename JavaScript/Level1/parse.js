function solution(s) {
  var answer = true;
  var p = 0;
  var y = 0;
  for(var i = 0; i<s.length; i++){
    if(s[i] == 'p' || s[i] == 'P') p++; else if(s[i] == 'y' || s[i] == 'Y') y++;
  }
  if(p != y) answer = false;
  return answer;
}

console.log(solution("pPoooyY"));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12916
  문자 p와 y 구별
*/