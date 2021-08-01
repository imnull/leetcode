/**
 * @param {number} label
 * @return {number[]}
 */
 var pathInZigZagTree = function(label) {
    let line = Math.log2(label) >> 0
    let head = Math.pow(2, line)
    let index = label - head
    if(line % 2) {
        index = head - index - 1
        head = head * 2 - 1
    }
    const result = []
    while(line >= 0) {
        if(line % 2) {
            result.unshift(head - index)
        } else {
            result.unshift(head + index)
        }
        line -= 1
        index = index / 2 >> 0
        head = Math.pow(2, line)
        if(line % 2) {
            head = head * 2 - 1
        }
    }
    return result
};