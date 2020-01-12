function solution(n, t, m, p) {
  var answer = '';
  var tarr = [];
  for(var i = 0; i<t*m; i++){
    tarr.push(i.toString(n).toUpperCase());
  }
  var tarr = tarr.join('').split('');
  var j = 1;
  while(tarr.length > 1){
    if(j === p){
      if(answer.length === t){
        break;
      }else{
        answer += tarr[j-1];
        tarr.splice(j-1,m);
        j = 1;
        continue;
      }
    }else{
      j++;
    }
  }
  return answer;
}

console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));
console.log(solution(16, 16, 2, 2));

/*
  https://programmers.co.kr/learn/courses/30/lessons/17687
  2018 카카오 블라인드 공채
  [3차]n진수 게임

  머리속에서 나오는대로 해봣더니 되긴하였지만 10분정도 걸린것같다.
*/