import { VOCAB_WORDS } from '../actionTypes';
import { createAction } from '../createAction';
import { API } from "aws-amplify";



/**
 * @name fetchWordById
 * @param {*} wordId - id of the word to be queried and fetched from words table
 * @description actionCreator for fetching a word from words table by word id
 */
export const fetchWordById = (wordId) => {
    return async (dispatch) => {
        dispatch(createAction(VOCAB_WORDS.GET_BY_ID.IN_PROGRESS));
        try {
            const word = await API.get('vocab_words', `/words/${wordId}`);
            dispatch (createAction(VOCAB_WORDS.GET_BY_ID.SUCCESS, word));
        } catch(err) {
            dispatch (createAction(VOCAB_WORDS.GET_BY_ID.ERROR, {error:'Error fetching word.'}));
        }
    }
};

/**
 * @name addWordToVocab
 * @param {*} word - word object to be posted to words table
 * @description actionCreator for adding a word to words table
 */
export const addWordToVocab = (word) => {
    return async (dispatch) => {
        dispatch(createAction(VOCAB_WORDS.ADD.IN_PROGRESS));
        try {
            const result = await API.post('vocab_words', '/words', {
                body: word
            });
            console.log(`response from API post=${JSON.stringify(result)}`);
            setTimeout(() => {
                console.log('now dispatching success');
                dispatch (createAction(VOCAB_WORDS.ADD.SUCCESS, result));
            }, 4000);
            
        } catch(err) {
            dispatch (createAction(VOCAB_WORDS.ADD.ERROR, {error:'Error adding word to vocabulary'}));
        }
    }
};
