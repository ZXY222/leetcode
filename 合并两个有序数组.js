

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, Infinity, ...nums2)
    return nums1.sort((a,b) => a-b)
};