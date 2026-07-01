class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const targetIndex = k - 1;
        return this.quickSelect(points, 0, points.length - 1, targetIndex, k);
    }

    partition(points, start, end) {
        let i = start;
        let j = start;
        let pivot = points[end];

        while (i <= end) {
            if (points[i][0] ** 2 + points[i][1] ** 2 <= pivot[0] ** 2 + pivot[1] ** 2) {
                [points[i], points[j]] = [points[j], points[i]];
                i++;
                j++;
            } else {
                i++;
            }
        }

        return j - 1;
    }

    quickSelect(points, start, end, targetIndex, k) {
        if (start > end) return points[start];
        const pivotIndex = this.partition(points, start, end);

        if (pivotIndex > targetIndex) {
            return this.quickSelect(points, start, pivotIndex - 1, targetIndex, k);
        } else if (pivotIndex < targetIndex) {
            return this.quickSelect(points, pivotIndex + 1, end, targetIndex, k);
        } else {
            return points.slice(0, k);
        }
    }
}
