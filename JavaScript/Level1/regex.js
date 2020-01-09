function solution(s) {
  var answer = true;
  if(s.length === 4 || s.length === 6){
    var tmps = s.replace(/[^0-9]/g, "");
    if (s !== tmps){
      answer = false;
    }
      return answer;
  }else{
    return false;
  }
}

console.log(solution("1234"));
console.log(solution("1234e"));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12918
  문자열 다루기 기본
  문제를 잘읽어봐야 한다.
*/