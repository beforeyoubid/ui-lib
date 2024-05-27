/**
 * util function to prepare a list of possible permutations of the array presented
 * @param array the array to calculate permutations for
 * @returns an array with permutations
 */
export function permutations<T>(array: T[]) {
  const permutationLength = 1 << array.length; // this is a "shift-left" operator which calculations the amount of permutations
  return (
    new Array(permutationLength)
      .fill(undefined)
      .map((_, i) => array.filter((_, j) => i & (1 << j)))
      // this is bitmath to filter specific items in the array
      .filter(array => array.length > 0)
  );
}

export function permutationsOfProps(props: Record<string, unknown[]>): Record<string, unknown>[] {
  const options: Record<string, unknown>[] = [];
  for (const [key, values] of Object.entries(props)) {
    for (const value of values) {
      options.push({ [key]: value });
    }
  }
  const allPermutations = permutations(options);

  const deduplicatedPermutations = allPermutations.filter(
    arrayOfVariations =>
      arrayOfVariations
        .reduce((array, variation) => array.concat(variation), [] as Record<string, unknown>[])
        .map(Object.keys)
        .flat()
        .filter((key, index, array) => array.findIndex(j => j === key) !== index).length === 0 // filter out variations with more than one change to the same property
  );

  const permutationsIntoIntersections = deduplicatedPermutations.map(permutation =>
    permutation.reduce((obj, item) => ({ ...obj, ...item }), {})
  );

  return permutationsIntoIntersections;
}
