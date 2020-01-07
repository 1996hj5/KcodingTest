function solution(arr1, arr2) {
  var answer = [[]];
  console.log(answer.length);
  if(arr1.length != answer.length){
    var len = arr1.length - answer.length;
    for(var i = 0 ; i<len; i++){
      answer.push([]);
    }
  }
  for(var i = 0; i<arr1.length; i++){
    for(var j = 0; j<arr1[i].length; j++){
      var s = arr1[i][j] + arr2[i][j];
      answer[i].push(s);
    }
  }
  return answer;
}

console.log(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]	));


/*
  https://programmers.co.kr/learn/courses/30/lessons/12950
  행렬의 덧셈
*/