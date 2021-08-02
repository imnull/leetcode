/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var networkDelayTime = function(times, n, k) {
    let t = 0
    const ns = times.filter(([_k]) => _k === k)
    if(ns.length < 1) {
        return -1
    } else if(ns.length === 1) {
        if(ns[0][1] === n) {
            return t
        } else {
            t += ns[0][2]
            const _t = networkDelayTime(times, n, ns[0][1])
            if(_t === -1) {
                return -1
            }
            return t + _t
        }
    } else {
        const ts = ns.map(_n => networkDelayTime(times, n, _n[0][0]))
        console.log(ts, n)
        const ds = ts.filter(v => v !== -1)
        if(ds.length < 1) {
            return -1
        }
        return t + Math.max(...ds)
    }
};