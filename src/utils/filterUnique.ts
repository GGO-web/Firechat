export const filterUnique = (array: string[] | undefined): string[] => {
   const unique = Array.from(new Set(array));

   return unique.filter((item) => {
      return typeof item === 'string' && item.length > 0;
   });
};
