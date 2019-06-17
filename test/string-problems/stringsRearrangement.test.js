const { diffString, stringsRearrangement } = require('../../src/string-problems/stringsRearrangement');

describe('test test string rearrangement', () => {
  it('should check if 2 string is difference by only one char', async () => {
    expect(diffString('ab', 'ac')).toBe(true);
    expect(diffString('aab', 'aac')).toBe(true);
    expect(diffString('cab', 'cac')).toBe(true);
    expect(diffString('cab', 'eab')).toBe(true);

    expect(diffString('a', 'a')).toBe(false);
    expect(diffString('aaa', 'aaa')).toBe(false);
    expect(diffString('cab', 'aac')).toBe(false);
  });

  it('should test string arrangement 1', async () => {
    let a = ['aaa', 'aab', 'bab'];
    expect(stringsRearrangement(a)).toBe(true);
  });

  it('should test string arrangement 2', async () => {
    let a = ['aaae', 'aabe', 'babe'];
    expect(stringsRearrangement(a)).toBe(true);
  });

  it('should test string arrangement 3', async () => {
    let a = ['aabe', 'babe', 'aaae'];
    expect(stringsRearrangement(a)).toBe(true);
  });

  it('should test string arrangement 4', async () => {
    let a = ['babe', 'aaae', 'aabe'];
    expect(stringsRearrangement(a)).toBe(true);
  });

  it('should test string arrangement 5', async () => {
    let a = ['aaae', 'babe', 'aabe'];
    expect(stringsRearrangement(a)).toBe(true);
  });

  it('should test string arrangement 6', async () => {
    let a = ['babe', 'aabe', 'aaae'];
    expect(stringsRearrangement(a)).toBe(true);
  });

  it('should test string arrangement 7', async () => {
    let a = ['aabe', 'aaae', 'babe'];
    expect(stringsRearrangement(a)).toBe(true);
  });

  it('should test string arrangement 8', async () => {
    let a = ['aaac', 'aabe', 'babe'];
    expect(stringsRearrangement(a)).toBe(false);
  });

  it('should test string arrangement 9', async () => {
    let a = ['aabe', 'babe', 'aaac'];
    expect(stringsRearrangement(a)).toBe(false);
  });

  it('should t2', async () => {
    let a = ["abc", "abx", "axx", "abx", "abc"];
    expect(stringsRearrangement(a)).toBe(true);

    a = ["abc", "abx", "axx", "abc"];
    expect(stringsRearrangement(a)).toBe(false);
  });

  it('should test string arrangement f1', async () => {
    let a = ["abc", "bef", "bcc", "bec", "bbc", "bdc"];
    expect(stringsRearrangement(a)).toBe(true);
  });
});
