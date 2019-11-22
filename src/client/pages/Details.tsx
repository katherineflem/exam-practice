import * as React from 'react'
import { IBooks, ICategories } from '../utils/interfaces';
import { RouteComponentProps } from 'react-router-dom';
import { json } from '../utils/api';
import AllBooks from './AllBooks';
import { Link } from 'react-router-dom'

class Details extends React.Component<DetailsProps, DetailsState>{
    constructor(props: DetailsProps) {
        super(props);
        this.state = {
            book: {
                id: 0,
                categoryid: 0,
                title: '',
                author: '',
                price: 0,
                _created: new Date(),
                name: ''
            },
        
        }
    }

    

    async componentDidMount() {
        try {
            let book = await json(`/api/books/${this.props.match.params.id}`)
            this.setState({book})
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <div className='col-md-12'>
                <div>
                    <button onClick={() => this.props.history.push('/books')}>Back to Listing</button>
                </div>
                <div className='row justify-content-center'>
                    <div className="card">
                        <div className="card-header">
                            <h2>{this.state.book.title}</h2>
                        </div>
                        <div className="card-body">
                            <p>Author: {this.state.book.author}</p>
                            <p>Price: ${this.state.book.price}</p>
                            <span className="badge badge-pill badge-info">{this.state.book.name}</span>
                        </div>
                        <Link to={`/${this.props.match.params.id}/update`} className='btn btn-primary'>Edit Book Listing</Link>

                    </div>
                </div>
            </div>

        )
    }
}

interface DetailsState {
    book: {
        id: number,
        categoryid: number,
        title: string,
        author: string,
        price: number,
        _created: Date,
        name: string
    },
  
}
interface DetailsProps extends RouteComponentProps<{ id: string }> { }

export default Details