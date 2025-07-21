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
            ],
            term: '',
            filter: 'all'
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

            if (!name.trim() && name === '') {
                alert('Product name is required!');
                return;
            }
    
            const priceNum = parseFloat(price);
            if (!price || isNaN(priceNum) || priceNum <= 0) {
                alert('Price must be a positive number!');
                return;
            }

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

    searchItem = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return items.filter(item => item.like)
            case 'moreThen10':
                return items.filter(item => item.price > 10)
            default:
                return items
        }
    }

    onfilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const items = data.length;
        const increased = data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchItem(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                items={items}
                increased={increased}/>
    
                <div className="search-panel">
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFiltr
                    filter={filter}
                    onfilterSelect={this.onfilterSelect}/>
                </div>
    
                <List
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <AddForm
                    onAdd={this.addItem}/>
            </div>
        )
    };
}

export default App;