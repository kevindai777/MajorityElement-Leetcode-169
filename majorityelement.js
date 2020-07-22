//Objective is to find the element in an array that has a frequency greater
//than ⌊ n/2 ⌋, where n is the length of the array

let nums = [2,2,1,1,1,2,2]


//O(n) solution that uses a hashmap to keep track of the frequencies of each element

let majority = Math.floor(nums.length / 2)
let map = {}

for (let num of nums) {
    if (!map[num]) {
        map[num] = 1
    } else {
        map[num]++
    }
}

return Object.keys(map).find(key => map[key] > majority)