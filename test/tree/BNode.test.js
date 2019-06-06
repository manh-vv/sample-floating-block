import { BNode } from '../../src/tree/BNode';

describe('test Binary node', () => {
  it('should create node', async () => {
    let n = new BNode(1);
    expect(n).toBeTruthy();
    expect(n.v).toBe(1);
  });

  it('should set left to node', async () => {
    let n = new BNode(1), l;
    n.setLeft(l = new BNode(2));
    expect(n.l).toBe(l);
    expect(n.r).not.toBeTruthy();
  });

  it('should set right to node', async () => {
    let n = new BNode(1), r;
    n.setRight(r = new BNode(2));
    expect(n.r).toBe(r);
    expect(n.l).not.toBeTruthy();
  });

  it('should set left & right in chain call to node', async () => {
    let n = new BNode(1), l, r;
    n.setLeft(l = new BNode(2)).setRight(r = new BNode(3));
    expect(n.l).toBe(l);
    expect(n.r).toBe(r);

    n.setRight(r = new BNode(2)).setLeft(l = new BNode(3));
    expect(n.l).toBe(l);
    expect(n.r).toBe(r);
  });
});
