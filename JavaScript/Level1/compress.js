function solution(s) {
  var cnts;
  var lenarr = [];
  for(var i = 1; i<=s.length; i++){
    var arr = [];
    var tmparr = [];
    var cnt = 1;
    var sc = "";
    for(var j = 0; j<s.length; j+=i){
      arr.push(s.slice(j,j+i));
    }
    for(var k = 0; k<arr.length; k++){
      if(arr[k] == arr[k+1]){
        cnt++;
      }else {
        if(cnt == 1){
          tmparr.push(arr[k]);
        }else{
          cnts = cnt + arr[k]; tmparr.push(cnts);
        }
        cnt = 1;
      }
    }
    lenarr.push(sc.concat(tmparr).replace(/,/g, "").length);
  }
  lenarr.sort((a,b) => a-b);
  return lenarr[0];
}

console.log(solution("aaaabaaa"));


/*
  https://programmers.co.kr/learn/courses/30/lessons/60057
  2020년 카카오 공채 문자열 압축하기

*/