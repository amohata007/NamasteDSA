function constructMaximumBinaryTree(nums) {
    if (nums.length === 0) return null;

    // Find index of max value
    let maxIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i;
        }
    }

    // Create root node
    const root = {
        val: nums[maxIndex],
        left: null,
        right: null
    };

    // Recursively build left and right subtrees
    root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));

    return root;
}