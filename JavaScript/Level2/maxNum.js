function solution(numbers) {
  var answer = numbers.map(v => v + '')
                .sort((a,b) => (b+a) * 1 - (a+b) * 1)
                .join('');
  return answer[0] === '0' ? '0' : answer;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));

/*
https://programmers.co.kr/learn/courses/30/lessons/42746
가장 큰수
힌트를 보고 풀었으며, 많은것을 배웟습니다.
자동 string 변환 , number변환을 꼭 함수가아니여도되는점,
sort에서 무궁무진하게 할수 있다는점
*/