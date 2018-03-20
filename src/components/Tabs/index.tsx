import * as React from 'react';

import { Tab } from '../../App';

import './Tabs.css';

interface TabsProps {
    selectTab: (tab: Tab) => void;
    activeTab: Tab;
}

export default class Tabs extends React.Component<TabsProps, {}> {
    constructor(props: TabsProps) {
        super(props);
    }

    render() {
        return (
            <ul className="tabsList">
                <li className={(this.props.activeTab === Tab.HIRAGANA ? 'active' : '') + ' tabsItem'}>
                    <a className="tabText" onClick={() => this.props.selectTab(Tab.HIRAGANA)}> Hiragana </a> </li>
                <li className={(this.props.activeTab === Tab.KATAKANA ? 'active' : '') + ' tabsItem'}>
                    <a className="tabText" onClick={() => this.props.selectTab(Tab.KATAKANA)}> Katakana </a>
                </li>
                <li className={(this.props.activeTab === Tab.KANJI ? 'active' : '') + ' tabsItem'}>
                    <a className="tabText" onClick={() => this.props.selectTab(Tab.KANJI)}> Kanji </a>
                </li>
                <li className={(this.props.activeTab === Tab.STUDY ? 'active' : '') + ' tabsItem'}>
                    <a className="tabText" onClick={() => this.props.selectTab(Tab.STUDY)}> Study </a>
                </li>
            </ul>
        );
    }
}