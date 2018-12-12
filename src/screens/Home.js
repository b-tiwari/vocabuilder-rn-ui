import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Content, Fab, Icon, 
          List, ListItem, Text, Left, Body, Title, Right } from 'native-base';
import AppHeader from '../components/AppHeader/AppHeaderConnected';

export default class HomeScreen extends Component {

  state = {
    active: false
  }

  constructor(props){
      super(props);
  }

  render() {
    return (
      <Container>
        <AppHeader title="My Vocabulary" navigation={this.props.navigation}/>
        <Content  contentContainerStyle={styles.contentContainer}>
          <List>
            <ListItem>
              <Text>go for the jugular</Text>
            </ListItem>
            <ListItem>
              <Text>whole ball of wax</Text>
            </ListItem>
            <ListItem>
              <Text>volcano</Text>
            </ListItem>
          </List>
          {this.renderFab()}
        </Content>
      </Container>
    );
  }

  renderFab = () => {
    return (
      <Fab
        active={true}
        direction="up"
        containerStyle={{ }}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={this.onFabClick}>
        <Icon ios='ios-add' android="md-add" style={{fontSize: 30}} />
      </Fab>
    );
  }

  onFabClick = () => {
    this.props.navigation.navigate('AddWord');
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 40
  },
  fabIcon: {
    fontSize:30,
    color: '#ffffff'
  }
});
