import { BNode } from "../../src/tree/BNode";
import { preOrderTraversal } from '../../src/tree/preOrderTraversal';

describe('test pre order traversal', () => {
  it('should travel pre order', async () => {
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

    let s = '';
    preOrderTraversal(tree, n => s += n.v);
    expect(s).toBe('1234567');
  });
});
