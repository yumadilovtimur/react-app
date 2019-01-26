export const SAVE_PERSONAL_DATA = 'SAVE_PERSONAL_DATA';

export const savePersonalData = (owner, cardNumber, dateOfEnd, cardCvv) => ({
  type: SAVE_PERSONAL_DATA,
  payload: {
    owner,
    cardNumber,
    dateOfEnd,
    cardCvv
  }
});
