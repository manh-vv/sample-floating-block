import { Stack } from '../Stack';
import { NODE_FN } from '../utils';

export function preOrderTraversal(tree, visitor = NODE_FN) {
  const stack = new Stack();
  stack.push(tree);

  while(stack.length > 0) {
    const n = stack.pop();
    // visit n
    visitor(n);
    n.visited = true;

    if (n.r && !n.r.visited) stack.push(n.r);
    if (n.l && !n.l.visited) stack.push(n.l);
  }
}
