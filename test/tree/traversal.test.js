import { BNode } from "../../src/tree/BNode";
import {
  preorderTraversal,
  preorderT,
  inorderTraversal,
  inorderT,
  postorderTraversal,
  postorderT,
} from '../../src/tree/traversal';

describe('test pre order traversal', () => {
  const createVisitor = () => {
    const s = [], visitor = n => s.push(n.v);
    visitor.getS = () => s;
    visitor.toString = () => s.join(', ');
    return visitor;
  };

  it('should travel preorder', async () => {
    // create tree
    const tree = new BNode(1)
      .setLeft(
        new BNode(2)
          .setLeft(new BNode(3))
          .setRight(
            new BNode(4)
              .setLeft(new BNode(5))
              .setRight(new BNode(6))
          )
      )
      .setRight(new BNode(7));

    const visitor1 = createVisitor();
    preorderTraversal(tree, visitor1);

    const visitor2 = createVisitor();
    preorderT(tree, visitor2);

    expect(visitor1.toString()).toBe(visitor2.toString());
    console.log('preorder traversal:', visitor1.toString());
  });
  
  it('should travel inorder', async () => {
    // create tree
    const tree = new BNode(1)
      .setLeft(
        new BNode(2)
          .setLeft(new BNode(3))
          .setRight(
            new BNode(4)
              .setLeft(new BNode(5))
              .setRight(new BNode(6))
          )
      )
      .setRight(new BNode(7));

    const visitor1 = createVisitor();
    inorderTraversal(tree, visitor1);

    const visitor2 = createVisitor();
    inorderT(tree, visitor2);

    expect(visitor1.toString()).toBe(visitor2.toString());
    console.log('inorder traversal:', visitor1.toString());
  });
  
  it('should travel postorder', async () => {
    // create tree
    const tree = new BNode(1)
      .setLeft(
        new BNode(2)
          .setLeft(new BNode(3))
          .setRight(
            new BNode(4)
              .setLeft(new BNode(5))
              .setRight(new BNode(6))
          )
      )
      .setRight(new BNode(7));

    const visitor1 = createVisitor();
    postorderTraversal(tree, visitor1);

    const visitor2 = createVisitor();
    postorderT(tree, visitor2);

    expect(visitor1.toString()).toBe(visitor2.toString());
    console.log('postorder traversal:', visitor1.toString());
  });
});
