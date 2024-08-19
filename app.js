function duplicates(nums) {
    const duplicates = nums.reduce((acc, num) => {
        if (num in acc) {
            acc[num]++;
        } else {
            acc[num] = 1;
        }
        return acc;
    }, {});

    const duplicateCount = Object.values(duplicates).filter(count => count > 1).length;
    console.log(duplicateCount);

    return duplicateCount;
}

duplicates([1, 2, 2, 3, 4, 4, 4, 5]); // imprime 2