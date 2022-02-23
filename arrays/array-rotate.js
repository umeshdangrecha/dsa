// Method 1
// function rotateArray(arr, d) {
//   let length = arr.length;

//   d = d % length;
//   const temp = [];
//   for (let i = d; i < length; i++) {
//     if (i - d < d) temp.push(arr[i - d]);
//     arr[i - d] = arr[i];
//   }

//   for (let i = length - d; i < length; i++) {
//     arr[i] = temp[i + d - length];
//   }
// }

// Method Second

function gcd(a, b) {
  if (b == 0) return a;

  return gcd(b, a % b);
}

function rotateArray(arr, d) {
  const length = arr.length;

  d = d % length;

  const _gcd = gcd(length, d);

  for (let i = 0; i < _gcd; i++) {
    let temp = arr[i];
    let j = i;

    while (true) {
      let k = j + d;

      if (k >= length) {
        k -= length;
      }

      if (k === i) {
        break;
      }

      arr[j] = arr[k];
      j = k;
    }
    arr[j] = temp;
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const d = 2;

rotateArray(arr, d);

console.table(arr);
