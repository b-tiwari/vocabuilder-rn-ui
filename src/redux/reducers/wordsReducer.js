import { VOCAB_WORDS } from '../actions/actionTypes';

const defaultState = {
    vocab_words: [],
    selectedWord: {},
    loading: false,
    error: ''
};

export default function wordsReducer(state = defaultState, action) {
  switch (action.type) {
    case VOCAB_WORDS.ADD.IN_PROGRESS:
        return {
            ...state,
            loading: true
        };
    case VOCAB_WORDS.ADD.SUCCESS:
        return {
            ...state,
            loading: false,
            error: '',
            selectedWord: action.payload
        };
    case VOCAB_WORDS.ADD.ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload.error
        };
    case VOCAB_WORDS.GET_BY_ID.IN_PROGRESS:
        return {
            ...state,
            loading: true
        }
    case VOCAB_WORDS.GET_BY_ID.SUCCESS:
        return {
            ...state,
            loading: false,
            error: '',
            selectedWord: action.payload
        };
    case VOCAB_WORDS.GET_BY_ID.ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload.error
        };
    default:
      return state;
  }
}
