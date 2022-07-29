export const isValidMessage = (message: string): boolean => {
   return message.trim().replace(/\n\r\t\f/g, '').length > 0;
};
