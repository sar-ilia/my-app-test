import './app-info.css';

const AppInfo = ({items, increased}) => {
    return (
        <div className="app-info">
            <h1>Cart Commander</h1>
            <h2>Total Items: {items}</h2>
            <h2>Items Acquired: {increased}</h2>
        </div>
    )
}

export default AppInfo;