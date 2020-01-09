function solution(n, m) {
    var answer = [];
    var max,min;
    n > m ? (max = n,min=m) : (max=m,min=n);
    answer.push(gcd(max, min));
    answer.push(lcm(max, min));
    return answer;
}
function gcd(max,min){
  while (min != 0) {
    var least = max % min;
    max = min;
    min = least;
  }
  return max;
}

function lcm(max, min) {
  return max * min / gcd(max,min);
}

console.log(solution(3,12));
console.log(solution(1000000,999999));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12940
  최대공약수 : 유클리드 호제법 이용
  최소공배수 : 최대공약수 이용
*/