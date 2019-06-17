// find out if given two strings with the same length is differrent by one character
const d = (s, S) => {
  let i = 0, c = 0;
  while (i < s.length) if (s[i] !== S[i++] && ++c > 1) return false;
  return c > 0;
};

const logger = console;

const stringsRearrangement = a => {
  logger.debug('---- hello');

  for (let h = 0; h < a.length; h++) {
    let s = [], v = new Set(), c, t = new Array(a.length);

    s.push(h);
    t[h] = 1;
    v.add(s.join(', '));

    logger.debug('='.repeat(5), h, a[h], a);

    f1: while (s.length > 0) {
      c = s[s.length - 1];

      for (let i = 0; i < a.length; i++) {
        if (!t[i] && d(a[i], a[c])) {
          s.push(i); // visit
          t[i] = 1; // mark as visited

          logger.debug('-- [ %s ]', s.map(x => a[x]).join(' -> '));

          if (v.has(s.join(', '))) {
            s.pop(); // revert
            t[i] = 0; // revert mark

          } else {
            if (s.length === a.length) return true;
            v.add(s.join(', '));
            continue f1;

          }
        }
      }

      t[c] = 0;
      s.pop();
    }
  }

  return false;
};

module.exports = {
  diffString: d,
  stringsRearrangement,
};
