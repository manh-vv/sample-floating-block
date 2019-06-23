const { r90 } = require('../src/r90');

describe('test rotate matrix 90 degree', () => {
  it('should rotate matrix 90 degree clockwise', async () => {
    const n = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const m = r90(n);
    console.log(m);
    expect(m[0][0]).toBe(n[2][0]);
    expect(m[0][1]).toBe(n[1][0]);
    expect(m[0][2]).toBe(n[0][0]);
  });
});
