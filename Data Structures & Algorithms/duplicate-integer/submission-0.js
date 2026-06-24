class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // We iterate over the nums array and push every element in the set,
        // which contains the unique numbers, so if we push duplicate number
        // And if that is already present in the set that means we found our first
        // duplicate

        // TC - O(n)
        // SC - O(1)

        const seen = new Set()

        for(let i = 0; i < nums.length; i++) {
            if(seen.has(nums[i])) {
                return true
            }

            seen.add(nums[i])
        }

        return false
    }
}
