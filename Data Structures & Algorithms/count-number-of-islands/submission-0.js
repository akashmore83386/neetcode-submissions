class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows = grid.length;
        let cols = grid[0].length;

        let visited = Array.from({ length: rows }, () => Array(cols).fill(false));
        // I need to check where my first land is
        let islands = 0;

        function dfs(i, j) {
            visited[i][j] = true;

            const x = [-1, 1, 0, 0];
            const y = [0, 0, -1, 1];

            // look in all four directions
            for (let k = 0; k < 4; k++) {
                let newX = i + x[k]; // 0 + (-1) = -1
                let newY = j + y[k]; // 1 + 0 = 1

                if (
                    newX >= 0 &&
                    newX < rows &&
                    newY >= 0 &&
                    newY < cols &&
                    grid[newX][newY] === "1" &&
                    visited[newX][newY] === false
                ) {
                    dfs(newX, newY);
                }
            }
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === "1" && !visited[i][j]) {
                    islands++;
                    dfs(i, j, visited);
                }
            }
        }

        return islands;
    }
}
