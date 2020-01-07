process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  var answer = "";
  var n = data.split(" ");
  var a = n[0], b = n[1];
  for (var i = 0; i < b; i++) {
    for (var j = 0; j < a; j++) {
      answer += "*";
    }
    answer += '\n';
  }
  console.log(answer);
});

/*
  https://programmers.co.kr/learn/courses/30/lessons/12969
  직사각형 별찍기
*/