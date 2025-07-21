import './app-filter.css';

const AppFiltr = (props) => {
    const btnData = [
        {name: 'all', label: 'All Items'},
        {name: 'like', label: 'Priority'},
        {name: 'moreThen10', label: 'Cost more $10'}
    ];

    const buttons = btnData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onfilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFiltr;