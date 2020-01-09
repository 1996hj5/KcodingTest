function solution(s) {
  var answer = '';
  var len = s.length / 2;
  if(s.length % 2 == 0){
    answer = s.slice(len-1,len+1);
  }else{
    answer = s.slice(len,len+1);
  }
  return answer;
}

console.log(solution("abcde"));
console.log(solution("qwer"));


/*
  https://programmers.co.kr/learn/courses/30/lessons/12903
  가운데 글자 가져오기
  1분 30초 걸림
*/