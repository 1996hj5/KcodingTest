function solution(skill, skill_trees) {
  var answer = 0;
  var origin = skill.split('');

  for(var i = 0; i<skill_trees.length; i++){
    var trees = skill_trees[i].split('');
    var skp = 0;
    var isBoolean = true;
    for(var j = 0; j<trees.length; j++){
      if(origin.indexOf(trees[j]) !== -1){
        if(origin.indexOf(trees[j]) != skp){
          isBoolean = false;
          break;
        }else{
          skp++;
        }
      }
    }
    if(isBoolean){
      answer++;
    }
  }
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));


/*
  https://programmers.co.kr/learn/courses/30/lessons/49993
  스킬트리
  서머코딩 / 윈터코딩
*/