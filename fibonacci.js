export function fibs(num) {
  if (num === 0) return [];
  if (num === 1) return [0];

  const array = [0, 1];

  for (let i = 0; i < num - 2; i++) {
    let nextFib = array[array.length - 1] + array[array.length - 2];
    array.push(nextFib);
  }

  return array;
}

export function fibsRec(num) {
  // base case
  if (num === 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  // recursion
  const array = fibsRec(num - 1);
  const nextFib = array[array.length - 1] + array[array.length - 2];
  array.push(nextFib);

  return array;
}
