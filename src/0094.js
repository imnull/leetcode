/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    const ns = [], res = []
    let n = root
    while(n || ns.length) {
        while(n) {
            ns.push(n)
            n = n.left
        }
        n = ns.pop()
        res.push(n.val)
        n = n.right
    }
    return res
}