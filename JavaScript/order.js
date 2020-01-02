function solution(array, commands) {
    var artemp = [];
    commands.filter((el, i, arr) => {
      var arr1 = array.slice(arr[i][0] - 1, arr[i][1]).sort((a,b) => a-b);
      return artemp.push(arr1[arr[i][2]-1]);
    });
    return artemp;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));