import { connect } from 'react-redux';
import AddWordScreen from './AddWord';
import { addWordToVocab } from '../../redux/actions/wordsActions/wordsActions';


const mapStateToProps = state => ({
    loading: state.wordsReducer.loading,
    postWordError: state.wordsReducer.error,
    addedWord: state.wordsReducer.selectedWord
});

const mapDispatchToProps = dispatch => ({
    addWordToVocab: (data) => {
        dispatch(addWordToVocab(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWordScreen);
