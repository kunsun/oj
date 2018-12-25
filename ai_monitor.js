// id
// start_time
// end_time
// score
// output: total_score
// 输入：多个空格分割的整数，四个为一组
// 输出一个整数，表示total_score的最大值
const line = '1 6 10 4 2 3 8 3 3 7 9 1 4 5 6 2';
function solution(line) {
  const arr = line.split(' ');
  const startTimeArr = [];
  const endTimeArr = [];
  const scoreArr = [];
  for (let i=0; i<arr.length; ++i) {
    if ((i+1)/2 == 0) {
      
    }
  }
  // const scoreArr = arr.filter((element, i) => {
  //   if ((i+1)%4 == 0) {
  //     return true;
  //   }
  // })
  console.log(scoreArr)
}