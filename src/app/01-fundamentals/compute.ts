
export function compute(computeNumber: number) {
  if (computeNumber !== undefined && computeNumber !== null) {
    return computeNumber < 0 ? 0 : computeNumber + 1;
  } else {
    return computeNumber;
  }
}
