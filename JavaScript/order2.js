function solution(strings, n) {
  return strings.sort((a,b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}

console.log(solution(['sun', 'bed', 'car'], 1));
console.log(solution(['abce', 'abcd', 'cdx'], 2));


/*
  https://programmers.co.kr/learn/courses/30/lessons/12915
  문자열 내맘대로 정렬하기
  이 문제는 풀면서 localeCompare를 알게되어 활용하게 되었습니다.
 */