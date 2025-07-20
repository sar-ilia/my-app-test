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
                {name: 'Cheeseprice', price: 8, increase: false, like: false, id: 1},
                {name: 'Dark Chocolate', price: 12, increase: false, like: false, id: 2},
                {name: 'Tomatoes', price: 5, increase: false, like: false, id: 3},
            ]
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, price) => {
        const newItem = {
            name,
            price,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    render() {
        const {data} = this.state;

        const items = data.length;
        const increased = data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo
                items={items}
                increased={increased}/>
    
                <div className="search-panel">
                <SearchPanel/>
                <AppFiltr/>
                </div>
    
                <List
                    data={data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <AddForm
                    onAdd={this.addItem}/>
            </div>
        )
    };
}

export default App;