import './add-form.css';

const AddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Add a New Item</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="What's it called?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="€ Price in €" />

                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
}

export default AddForm;