function solution(n){
  var answer = '';
  var arr = ["9", "7"];
  var Remain = 0;
  while (n > 0) {
    Remain = n % 2;
    n = parseInt(n / 2);
    if (Remain === 0) {
      n--;
    }
    answer = arr[Remain] + answer;
  }
  return answer;
}
console.log(solution(5));

/*
  2013년 고2때 풀어봣던 문제입니다. 다시금 기억나서 해봅니다
  7와 9의 행운의수 구하기
  1   2   3   4    5   6    7 ....
  7 , 9 ,77, 79 , 97, 99, 777 ....
 */