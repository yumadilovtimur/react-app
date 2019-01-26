import { SAVE_PERSONAL_DATA } from '../actions/personal';

const owner = localStorage.getItem('owner');
const cardNumber = localStorage.getItem('cardNumber');
const dateOfEnd = localStorage.getItem('dateOfEnd');
const cardCvv = localStorage.getItem('cardCvv');
const isSaved = localStorage.getItem('isSaved');

const initialState = {
  owner: owner || null,
  cardNumber: cardNumber || null,
  dateOfEnd: dateOfEnd || null,
  cardCvv: cardCvv || null,
  isSaved: isSaved || false
};

const personal = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PERSONAL_DATA:
      localStorage.setItem('owner', action.payload.owner);
      localStorage.setItem('cardNumber', action.payload.cardNumber);
      localStorage.setItem('dateOfEnd', action.payload.dateOfEnd);
      localStorage.setItem('cardCvv', action.payload.cardCvv);
      localStorage.setItem('isSaved', true);
      return {
        ...state,
        owner: action.payload.owner,
        cardNumber: action.payload.cardNumber,
        dateOfEnd: action.payload.dateOfEnd,
        cardCvv: action.payload.cardCvv,
        isSaved: true
      };

    default:
      return state;
  }
};

export default personal;
