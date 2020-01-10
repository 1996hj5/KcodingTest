function solution(n) {
  var pre = 0;
  var cur = 1;
  var last = 0;
  for (var num = 1; num < n; num++) {
    last = pre + cur;
    pre = cur;
    cur = last % 1234567;
  }
  return last % 1234567;
}

/*
  https://programmers.co.kr/learn/courses/30/lessons/12945
  피보나치의 수
  흔히 알고있는 피보나치에서 한번 꼬은 문제다.
*/