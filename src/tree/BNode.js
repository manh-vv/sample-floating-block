export class BNode {
  constructor(v) {
    this.v = v;
    this.visited = false;
  }
  setLeft(n) {
    this.l = n;
    return this;
  }

  setRight(n) {
    this.r = n;
    return this;
  }
}
