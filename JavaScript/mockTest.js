function solution(answers) {
  var answer = [];
  var cntarr = [0,0,0];
  var f1 = [1, 2, 3, 4, 5];
  var f2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var f3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var flen1 = f1.length;
  var flen2 = f2.length;
  var flen3 = f3.length;
  push(answers, f1, flen1);
  push(answers, f2, flen2);
  push(answers, f3, flen3);
  for(var i = 0; i<answers.length; i++){
    if(answers[i] === f1[i]){
      cntarr[0]++;
    }if(answers[i] === f2[i]){
      cntarr[1]++;
    }if(answers[i] === f3[i]){
      cntarr[2]++;
    }
  }
  var max = Math.max.apply(null,cntarr);
  cntarr.filter((v,index,arr) => {
    if(max === arr[index]){
      answer.push(index+1);
    }
  });
  answer.sort((a,b) => a-b);
  console.log("cntarr = " + cntarr);
  return answer;
}

function push(answers,f,flen){
  if (answers.length > flen) {
    var len = (answers.length - flen);
    var cnt = parseInt(len / flen);
    if (len % flen > 0) {
      cnt++;
    }
    for (var j = 0; j < cnt; j++) {
      for (var k = 0; k < flen; k++) {
        f.push(f[k]);
      }
    }
  }
}


console.log(solution([1, 2, 3, 4, 5, 5, 1, 4, 1, 2, 3]));
console.log(solution([1, 3, 2, 4, 2]));

/*
  https://programmers.co.kr/learn/courses/30/lessons/42840
  모의고사
  시간 20분넘게 걸린거같습니다.
*/