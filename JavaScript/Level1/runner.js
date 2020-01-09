function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (var i = 0; i < participant.length; i++){
    if(completion[i] !== participant[i]){
      return participant[i]
    }
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));

/*
  https://programmers.co.kr/learn/courses/30/lessons/42576
  완주하지 못한 선수
  효울성이 안나와 힌트를 보았습니다.
*/