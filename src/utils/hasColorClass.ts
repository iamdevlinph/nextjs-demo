export const hasColorClass = (className: string): boolean => {
  return /-black|-white|-[0-9][0-9][0-9]/.test(className);
};
