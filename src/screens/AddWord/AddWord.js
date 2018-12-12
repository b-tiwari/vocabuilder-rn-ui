import React, { Component } from 'react';
import AppHeader from '../../components/AppHeader/AppHeaderConnected';
import { Container, Content, Form, Item, Label, Input, 
            Text, Textarea, Button, Segment, Icon, Spinner } from 'native-base';
import { styles } from './styles';

export default class AddWordScreen extends Component {
    state = {
        word: '',
        meaning: '',
        example: '',
        comments: ''
    }
    
    constructor(props){
        super(props);
    }

    render() {
       return ( 
            <Container>
                <AppHeader title="My Vocabulary" navigation={this.props.navigation}/>
                <Content padder contentContainerStyle={styles.contentContainer}>
                    <Segment style={styles.segment}>
                        <Button first>
                            <Text>Add a word</Text>
                        </Button>
                    </Segment>
                    <Form style={styles.form}>
                        <Item floatingLabel style={[styles.rowSpan1]}>
                            <Label>word</Label>
                            <Input value = {this.state.word} onChangeText={txt => this.onTextChange('word', txt)}/>
                        </Item>
                        { 
                            ['meaning', 'example', 'comments']
                                .map(field => this.renderTextArea(field) )
                        }

            
                        <Button iconLeft block style={[styles.rowSpan1, styles.button]}
                            disabled = {this.props.loading} 
                            onPress = {this.postWord}>
                            {
                                this.props.loading ?
                                    <Spinner color="red" /> :
                                    <Icon name='add'/>
                            }
                            
                            <Text>Add word to my vocabulary</Text>
                        </Button>
                    </Form>

                    
                </Content>
            </Container> 
        );
    }

    /**
     * @name postWord
     * @description function to call onPress of Add Word button of the form
     */
    postWord = () => {
        const word = {
            word: this.state.word,
            meaning: this.state.meaning,
            example: this.state.example,
            comments: this.state.comments
        };
        this.props.addWordToVocab(word);
    };

    /**
     * @name onTextChange
     * @description function to call onChangeText event of text inputs
     *              to update the corresponding state value
     * @param fieldName name of the input whose text value has been changed
     * @param value value of the input field
     */
    onTextChange = (fieldName, value) => {
        this.setState({
            [fieldName]: value
        });
    };

    /**
     * @name renderTextArea
     * @description returns TextArea element for the specified field
     * @param fieldName name for the textarea field
     */
    renderTextArea = (fieldName) => {
        return (<Textarea 
                    rowSpan={3} 
                    bordered 
                    placeholder={fieldName}
                    key={fieldName}
                    style={styles.rowSpan3}
                    value = {this.state[fieldName]} 
                    onChangeText={txt => this.onTextChange(fieldName, txt)} />);
    }
}
