const baseUrl = 'http://localhost:8080/api';

export const getAllTables = `${baseUrl}/tables`;
export const postCreateTable = `${baseUrl}/tables`;
export const getAvailableTables = (date: string) => `${baseUrl}/tables/available?${date}`;