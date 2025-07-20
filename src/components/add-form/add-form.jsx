import { Component } from 'react';

import './add-form.css';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }) 
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.price);
        this.setState({
            name: '',
            price: ''
        })
    }
    
    render() {
        const {name, price} = this.state;

        return (
            <div className="app-add-form">
                <h3>Add a New Item</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="What's it called?"
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="€ Price in €"
                        name="price"
                        value={price}
                        onChange={this.onValueChange}/>
                    <button type="submit"
                        className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default AddForm;