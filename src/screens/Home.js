import React, { Component } from 'react';
import { Container, Header, Content, 
          List, ListItem, Text, Left, Body, Title, Right } from 'native-base';
import AppHeader from '../components/AppHeader/AppHeaderConnected';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <AppHeader title="My Vocabulary" navigation={this.props.navigation}/>
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
        </Content>
      </Container>
    );
  }
}
 