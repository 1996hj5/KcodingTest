function solution(s, n) {
  var answer = '';
  var string = "abcdefghijklmnopqrstuvwxyz";
  var string2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var match = 0;
  for(var i = 0; i<s.length; i++){
    if(s[i] == " "){
      answer += s[i];
    }else{
      if(string.match(s[i]) != null){
        match = string.match(s[i]).index;
        match += n;
        if (match >= string2.length) {
          match -= string2.length;
        }
        answer += string[match];
      }else if(string2.match(s[i]) != null){
        match = string2.match(s[i]).index;
        match += n;
        if (match >= string2.length) {
          match -= string2.length;
        }
        answer += string2[match];
      }
    }
  }
  return answer;
}

console.log(solution("a B z", 4));
console.log(solution("AB", 1));
console.log(solution("z", 1));


/*
  https://programmers.co.kr/learn/courses/30/lessons/12926
  시저 암호
 */