import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFiltr from '../app-filter/app-filter';
import List from '../list/list';
import AddForm from '../add-form/add-form';

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Cheese', cost: 8, increase: false, id: 1},
                {name: 'Dark Chocolate', cost: 12, increase: false, id: 2},
                {name: 'Tomatoes', cost: 5, increase: false, id: 3},
            ]
        }
    }
    
    render() {
        const {data} = this.state;

        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                <SearchPanel/>
                <AppFiltr/>
                </div>
    
                <List data={data}/>
                <AddForm/>
            </div>
        )
    };
}

export default App;