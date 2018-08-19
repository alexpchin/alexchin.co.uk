// Function to split array into chunks, r is array j is chunk size
export const chunk = (r, j) =>
  r.reduce((a, b, i, g) => (!(i % j) ? a.concat([g.slice(i, i + j)]) : a), []);
