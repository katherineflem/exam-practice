import * as React from 'react'
import { useForm } from '../utils/useForm'
import { RouteComponentProps } from 'react-router-dom'

const Form = () => {


    const [values, handleChange] = useForm()


    const edit = (e) => {
        e.preventDefault();
        console.log(values)
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={edit}
                        className="form-group">
                        <label>Book Title:</label>
                        <input
                            value={values.title || ''}
                            onChange={handleChange}
                            type="text"
                            name='title'
                            className="form-control" />
                        <label>Book Author:</label>
                        <input
                            value={values.author}
                            onChange={handleChange}
                            type="text"
                            name='author'
                            className="form-control" />
                        <label>Book Price:</label>
                        <input
                            value={values.price}
                            onChange={handleChange}
                            type="text"
                            name='price'
                            className="form-control" />
                        {/* <select
                            key={categories.id}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.setState({ selectedCategory: e.target.value })}
                            value={this.state.selectedCategory}>
                        </select> */}
                    </form>

                </div>
            </div>
        </>

    )
}
export default Form

