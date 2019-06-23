exports.r90 = n => {
  let l = n.length, m = new Array(l).fill(0).map(() => new Array(l));

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      m[i][j] = n[l - 1 - j][i];
    }
  }

  return m;
}
