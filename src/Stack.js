export class Stack {
  constructor(l) {
    this.s = l ? new Array(l) : new Array();
  }
  
  [Symbol.iterator]() {
    return this.s.values();
  }

  push(n) {
    this.s.push(n);
    return this;
  }

  pop() {
    return this.s.pop();
  }

  peek() {
    return this.s[this.s.length - 1];
  }

  get length() {
    return this.s.length;
  }
}
