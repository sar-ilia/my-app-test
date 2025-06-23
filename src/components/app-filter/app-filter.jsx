import './app-filter.css';

const AppFiltr = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                    All Items
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Priority
            </button>
            <button 
                className="btn btn-outline-light"
                type="button">
                    Cost $10
            </button>
        </div>
    )
}

export default AppFiltr;