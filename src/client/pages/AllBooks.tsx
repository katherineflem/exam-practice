import * as React from 'react'
import { IBooks } from '../utils/interfaces'
import { json } from '../utils/api';
import Nav from '../components/nav'
import { Link } from 'react-router-dom'

class AllBooks extends React.Component<AllBooksProps, AllBooksState>{
    constructor(props: AllBooksProps) {
        super(props); {
            this.state = {
                books: [],
            }
        }

    }

    async componentDidMount() {
        try {
            let books = await json('/api/books')
            this.setState({ books })
        } catch (error) {
            console.log(error);
        }
    }



    render() {
        return (
            <div>
                {this.state.books.map(book => {
                    return (
                        <div className='column-md-12 m-2 text-center' key={book.id}>
                            <div className="card">
                                <div className="card-header">
                                    <h2>{book.title}</h2>
                                </div>
                                <div className="card-body">
                                    <p>Author: {book.author}</p>
                                    <p>Price: ${book.price}</p>
                                    <span className="badge badge-pill badge-info">{book.name}</span>
                                </div>
                                <div>
                                    <Link to ={`/${book.id}/details`}>More Details</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

interface AllBooksState {
    books: IBooks[],
}
interface AllBooksProps { }

export default AllBooks