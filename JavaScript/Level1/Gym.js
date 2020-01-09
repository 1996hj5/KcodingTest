function solution(n, lost, reserve) {
  var answer = n;
  lost.sort();
  reserve.sort();
  var arr = reserve.filter(v=> {
    if(lost.includes(v) == 1){
      lost.splice(lost.indexOf(v),1);
    }else{
      return v;
    }
  })
  arr.sort((a,b) => a - b);
  arr.filter(v => {
    for(var i = 0; i<lost.length; i++){
      if (v - 1 === lost[i] || v + 1 === lost[i]){
        lost.splice(i,1);
        break;
      }
    }
  })
  return answer - lost.length;
}

console.log(solution(24, [12, 13, 16, 17, 19, 20, 21, 22], [1, 22, 16, 18, 9, 10]));

/*
  https://programmers.co.kr/learn/courses/30/lessons/42862
  체육복
  이문제는 쉽게 풀수있었지만 전혀 다른 방향으로 풀어보고싶었습니다.
*/