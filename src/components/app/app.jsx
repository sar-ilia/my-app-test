import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFiltr from '../app-filter/app-filter';
import List from '../list/list';
import AddForm from '../add-form/add-form';

import './app.css';

function App() {

    const data = [
        {name: 'Cheese', cost: 8, increase: false},
        {name: 'Dark Chocolate', cost: 12, increase: true},
        {name: 'Tomatoes', cost: 5, increase: false},
    ];
    
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
}

export default App;