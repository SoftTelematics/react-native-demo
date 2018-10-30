import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants, Font } from 'expo';

import { Tab, Tabs, Radio, Form, Picker, Button, Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Ionicons': require('./node_modules/native-base/Fonts/Ionicons.ttf')
    });

    this.setState({fontLoaded: true});
  }
  render() {
    if (!this.state.fontLoaded) { return null;}

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Soft Telematics Example
        </Text>

        <TabsExample />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

class ListIconExample extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="plane" />
              </Button>
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Wi-Fi</Text>
            </Body>
            <Right>
              <Text>GeekyAnts</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth</Text>
            </Body>
            <Right>
              <Text>On</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

class PickerWithIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}

class RadioButtonExample extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem>
            <Left>
              <Text>Daily Stand Up</Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Discussion with Client</Text>
            </Left>
            <Right>
              <Radio selected={true} />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

class TabsExample extends React.Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Tab1">
            <ListIconExample />
          </Tab>
          <Tab heading="Tab2">
            <PickerWithIcon />
          </Tab>
          <Tab heading="Tab3">
            <RadioButtonExample />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
