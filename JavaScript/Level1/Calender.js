function solution(a, b) {
  var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  var totalday = 0;
  var init = 5;
  for(var i = 1; i<a; i++){
    if(i <= 7) if(i % 2 === 1) totalday += 31; else if(i === 2) totalday += 29; else totalday += 30;
    if(i > 7 ) if(i % 2 === 0) totalday += 31; else totalday += 30;
  }
  totalday += b-1;
  var na = totalday % 7;
  var day = (init + na) % 7;
  return week[day];
}

console.log(solution(7, 21));
console.log(solution(5 ,24));
console.log(solution(4, 12));
console.log(solution(9, 16));
console.log(solution(1, 11));
console.log(solution(11, 15));

/*
  https://programmers.co.kr/learn/courses/30/lessons/12901
  2016년 날짜 구하기
  if문을 줄여 쓴이유는 (원래 길게쓰지만) 쓸때없는 공백같아서 압축해서 썼읍니다.
*/