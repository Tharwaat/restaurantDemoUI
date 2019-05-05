const baseUrl = 'http://localhost:8080/api';

export const getAllReservations = `${baseUrl}/reservations`;
export const postCreateReservation = `${baseUrl}/reservations`;
export const getReservationsByDate = (date: string) => `${baseUrl}/reservations/available?${date}`;