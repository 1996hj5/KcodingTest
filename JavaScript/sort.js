function solution(s) {
  var answer = '';
  var arr = s.split("");
  var arr2 = [];
  arr.filter(v => {
    arr2.push(v.charCodeAt());
  });
  arr2.sort((a,b) => b-a);
  arr = [];
  arr2.filter(v => {
    arr.push(String.fromCharCode(v));
  });
  answer = answer.concat(arr).replace(/,/g, "");
  return answer;
}

console.log(solution("Zbcdefg"));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12917
  문자열 내림차순으로 배치
*/