function solution(phone_number) {
  var answer = '';
  for(var i = 0; i<phone_number.length-4; i++){
    answer += "*";
  }
  for(var i = phone_number.length-4; i<phone_number.length; i++){
    answer += phone_number[i];
  }
  return answer;
}

console.log(solution("01033334444"));
console.log(solution("027778888"));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12948
  핸드폰 번호 가리기
*/