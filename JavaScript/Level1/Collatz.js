function solution(num) {
    var answer = 0;
    while(true){
      if (num == 1) {
        break;
      }
      num % 2 === 0 ? num = parseInt(num / 2) : num = parseInt((num * 3) + 1)
      console.log("num = " + num);
      answer++;
      if (answer >= 500) {
        answer = -1;
        break;
      }
    }
    return answer;
}

console.log(solution(30));


/*
  https://programmers.co.kr/learn/courses/30/lessons/12943
  콜라츠 추측
*/