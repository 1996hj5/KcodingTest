function solution(n) {
    var answer = (n+'').split('').reverse();
    return answer.map(v => parseInt(v))
}

console.log(solution(12345));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12932
  자연수 뒤집어 놓기
*/
