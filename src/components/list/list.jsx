import ListItem from "../list-item/ilst-item";

import './list.css';

const List = ({data}) => {

    const elements = data.map(item => {
        const{id, ...itemProps} = item;

        return (
            <ListItem key={id} {...itemProps}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default List;