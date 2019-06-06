import { Stack } from '../src/Stack';

describe('test stack class', () => {
  it('should create new stack', async () => {
    expect(new Stack()).toBeTruthy();
    expect(new Stack(5)).toBeTruthy();
  });

  it('should push', async () => {
    let s = new Stack();
    s.push(1);
    expect(s.s.indexOf(1)).toBe(0);
  });

  it('should return length', async () => {
    let s = new Stack();
    s.push(1);
    s.push(1);
    expect(s.length).toBe(2);
  });

  it('should pop', async () => {
    let s = new Stack(), p;
    s.push(1);
    p = s.pop();
    expect(p).toBe(1);
    expect(s.s.indexOf(1)).toBe(-1);
  });

  it('should peek', async () => {
    let s = new Stack(), p;
    s.push(1);
    p = s.peek();
    expect(p).toBe(1);
    expect(s.s.indexOf(1)).toBe(0);
  });

  it('should be itrable', async () => {
    let s = new Stack();
    s.push(1);
    s.push(2);
    
    for (const v of s) {
      expect(v).toBeTruthy();
    }
  });
});
