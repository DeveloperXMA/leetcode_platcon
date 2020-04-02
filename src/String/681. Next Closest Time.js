/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
    let digits = [];
    for (let i = 0; i < time.length; i++) {
        if (time[i] !== ':') {
            digits.push(time[i]);
        }
    }
    
    let startTime = (parseInt(time.slice(0, 2)) * 60 + parseInt(time.slice(3)) + 1) % (24 * 60);
    while (true) {
        let curr = [
            Math.floor(Math.floor(startTime / 60) / 10),
            Math.floor(startTime / 60) % 10,
            Math.floor((startTime % 60) / 10),
            startTime % 60 % 10
        ];
        
        let i = 0;
        for (; i < curr.length; i++) {
            if (!digits.includes(curr[i] + '')) {
                startTime = (startTime + 1) % (24*60);
                break;
            }
        }
        
        if (i === curr.length) {
            let res = '';
            res = "" + curr[0] + curr[1] + ':' + curr[2] + curr[3];
            return res;
        }
    }
};
