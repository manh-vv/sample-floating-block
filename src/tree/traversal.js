import { Stack } from '../Stack';
import { NODE_FN } from '../utils';

export function preorderT(tree, visitor = NODE_FN) {
  visitor(tree);
  if (tree.l) preorderT(tree.l, visitor);
  if (tree.r) preorderT(tree.r, visitor);
}

export function inorderT(tree, visitor = NODE_FN) {
  if (tree.l) inorderT(tree.l, visitor);
  visitor(tree);
  if (tree.r) inorderT(tree.r, visitor);
}

export function postorderT(tree, visitor = NODE_FN) {
  if (tree.l) postorderT(tree.l, visitor);
  if (tree.r) postorderT(tree.r, visitor);
  visitor(tree);
}

export function preorderTraversal(tree, visitor = NODE_FN) {
  const stack = new Stack();
  stack.push(tree);

  while(stack.length > 0) {
    const n = stack.peek();
    // visit n
    visitor(n);
    stack.pop();

    if (n.r && !n.r.visited) {
      stack.push(n.r);
      n.r.visited = true;
    }

    if (n.l && !n.l.visited) {
      stack.push(n.l);
      n.l.visited = true;
    }
  }
}

export function inorderTraversal(tree, visitor = NODE_FN) {
  const stack = new Stack();
  stack.push(tree);

  while(stack.length > 0) {
    const n = stack.peek();

    if (n.l && !n.l.visited) {
      stack.push(n.l);
      n.l.visited = true;
    } else {
      // visit n
      visitor(n);
      stack.pop();

      if (n.r && !n.r.visited) {
        stack.push(n.r);
        n.r.visited = true;
      }
    }
  }
}

export function postorderTraversal(tree, visitor = NODE_FN) {
  const stack = new Stack();
  stack.push(tree);

  while(stack.length > 0) {
    const n = stack.peek();

    if (n.l && !n.l.visited) {
      stack.push(n.l);
      n.l.visited = true;
    } else if (n.r && !n.r.visited) {
      stack.push(n.r);
      n.r.visited = true;
    } else {
      // visit n
      visitor(n);
      stack.pop();
    }
  }
}
