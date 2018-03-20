import * as React from 'react';
import './App.css';
import Tabs from './components/Tabs';

export enum Tab {
  HIRAGANA,
  KATAKANA,
  KANJI,
  STUDY
}

interface AppState {
  activeTab: Tab;
}

class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      activeTab: Tab.HIRAGANA
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab: Tab) {
    this.setState({
      activeTab: tab
    });
  }

  render() {
    return (
      <div className="App">
        <Tabs selectTab={this.changeTab} activeTab={this.state.activeTab} />
      </div>
    );
  }
}

export default App;
