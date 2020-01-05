function solution(n, arr1, arr2) {
  var answer = [];
  var or = 0;
  for(var i = 0; i<n; i++){
    var s1 = '';
    var s2 = '';
    or = arr1[i] | arr2[i];
    s1 = or.toString(2);
    if(s1.length != n){
      var t = (n - s1.length);
      for (var k = 0; k < t; k++){
        s1 = 0 + s1;
      }
    }
    for(var j = 0; j<s1.length; j++){
      if(s1[j] == 1){
        s2 += "#";
      }else{
          s2 += " ";
      }
    }
    answer.push(s2);
  }
  return answer;
}

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
console.log(solution(5, [0,0,0,0,0], [30, 1, 21, 17, 28]));

/*
  https://programmers.co.kr/learn/courses/30/lessons/17681
  카카오 공채 2018년도 문제
  [1차] 비밀지도
*/