import * as React from 'react'
import Form from '../components/form';
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router-dom';
import { ICategories } from '../utils/interfaces';

class AddBook extends React.Component<AddBookProps, AddBookState>{
    constructor(props: AddBookProps) {
        super(props);
        this.state = {
            book: {
                id: 0,
                categoryid: 0,
                title: '',
                author: '',
                price: 0,
                _created: new Date,
            },
            categories: [],
            selectedCategory: '0',
        }
    }

    async componentDidMount() {
        try {
            // let newBook = await json(`/api/books`, 'POST', this.state.book);
            let categories = await json('/api/categories')
            this.setState(categories)
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <div className='container'>
                <h1>Add New Book</h1>
                
                <div className="row bg-dark">
                    {this.state.categories.map(category => {
                        <form className='form-group'>
                            <select
                                key={category.id}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => this.setState({ selectedCategory: e.target.value })}
                                value={this.state.selectedCategory}>
                            </select>
                        </form>
                    })}
                </div>
            </div>
        )
    }
}

interface AddBookState {
    book: {
        id: number,
        categoryid: number,
        title: string,
        author: string,
        price: number,
        _created: Date,
    },

    categories: ICategories[],

    selectedCategory: string,
}

interface AddBookProps { }
export default AddBook