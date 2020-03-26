/**
 * @param {number[][]} grid
 * @return {number}
 */
// 我们做bfs的时候，我们可以用一个帮助的数组, 表示右，左，下，上
let rowDir = [0, 0, 1, -1];
let colDir = [1, -1, 0, 0];

let isValid = function (grid, rr, cc, visited) {
    if (rr < 0 || rr > grid.length - 1 || cc < 0 || cc > grid[0].length - 1) {
        return false;
    }
    if (visited[rr][cc]) return false;
    if (grid[rr][cc] !== 0) return false;
    return true;
}
    

var bfs = function (grid, row, col, canReach, distance) {
        let queue = [];
        let rows = grid.length;
        let cols = grid[0].length;
        
        let visited = [...Array(rows)].map(() => new Array(cols).fill(false));
        let level = 0;
        
        queue.unshift([row, col]);
        visited[row][col] = true;
        while (queue.length > 0) {
            level++;
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let curr = queue.pop();
                for (let k = 0; k < 4; k++) {
                    let rr = rowDir[k] + curr[0];
                    let cc = colDir[k] + curr[1];
                    
                    if (!isValid(grid,rr, cc, visited)) continue;
                    
                    visited[rr][cc] = true;
                    queue.unshift([rr, cc]);
                    distance[rr][cc] += level;
                    canReach[rr][cc]++;
                } 
            }
        }
    }

var shortestDistance = function(grid) {
    if (grid === null || grid.length === 0) return -1;
    let rows = grid.length;
    let cols = grid[0].length;
    // 我们记录两个东西，一个是canReach数组,canReach[i][j]代表的是，从i，j这个位置上，有多少个building
    // 能够访问到
    let canReach = [...Array(rows)].map(() => new Array(cols).fill(0));
    
    // 我们还需要一个distance数组，就是记录从当前空地走到所有能访问到的building所需要的步数。
    let distance = [...Array(rows)].map(() => new Array(cols).fill(0));
    
    // 我们需要知道一共有多少个building
    let totalBuildings = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // 如果我们遇到了一个房子，那么我们去添加这个distance数组
            if (grid[i][j] === 1) {
                totalBuildings++;
                bfs(grid, i, j, canReach, distance);
            }
        }
    }
    let minDistance = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (canReach[i][j] === totalBuildings && minDistance > distance[i][j]) {
                minDistance = distance[i][j];
            }
        }
    }

    return minDistance === Number.MAX_SAFE_INTEGER ? -1 : minDistance;
};
