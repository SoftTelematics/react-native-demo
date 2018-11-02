import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import { Container, Header, Content, Tab, Tabs, Textarea } from 'native-base';
import { Font } from 'expo';

import Settings from './components/Settings';

import showdown  from 'showdown';

export default class App extends React.Component {
  state = {
    markdown: '# hello, markdown!',
    fontLoaded: false
  }

  constructor(props) {
    super(props);

    this.converter = new showdown.Converter();
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Ionicons': require('./node_modules/native-base/Fonts/Ionicons.ttf')
    });
    this.setState({fontLoaded: true});
  }

  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Editor">
              <Textarea
              rowSpan={20} bordered
              onChangeText={(markdown) => this.setState({markdown})}
              value={this.state.markdown}
              style={styles.textarea}
              />
          </Tab>
          <Tab heading="Preview">
              <WebView
              style={styles.preview}
              originWhitelist={['*']}
              source={{ html: this.converter.makeHtml(this.state.markdown) }}
            />
          </Tab>
          <Tab heading="Settings">
            <Settings />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textarea: {},
  preview: {
    margin: 10,
    height: 200,
    backgroundColor: '#e3e53f'
  }
});
