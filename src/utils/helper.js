/* eslint-disable import/prefer-default-export */
export function rupiahFormat(n) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(n);
}

export const capitalizeFirstLetter = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const isToday = (date) =>
  new Date(date).toISOString().split('T')[0] ===
  new Date().toISOString().split('T')[0];

export const getPrimaryPhone = (phones = []) => {
  let returnPhone = null;
  phones.forEach((phone) => {
    if (phone.isPrimary) {
      returnPhone = phone;
    }
  });
  return returnPhone?.phone;
};
