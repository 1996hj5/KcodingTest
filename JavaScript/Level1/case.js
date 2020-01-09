function solution(s) {
  var arr = s.split(' ');
  var answer = arr.map(v => {
    var copy = v;
    v = '';
    for(var i = 0; i<copy.length; i++){
      i % 2 === 0 ? v+= copy[i].toUpperCase() : v+= copy[i].toLowerCase()
    }
    return v;
  }).join(' ');
  return answer;
}

console.log(solution("try hello world"));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12930
  이상한 문자 만들기
*/