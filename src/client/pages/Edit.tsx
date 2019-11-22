import * as React from 'react'
import Form from '../components/form';
import { json } from '../utils/api';
import { RouteComponentProps } from 'react-router-dom';
import { ICategories } from '../utils/interfaces';

class EditBook extends React.Component<EditBookProps, EditBookState>{
    constructor(props: EditBookProps) {
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
            categories: []
        }
    }

    async componentDidMount() {
        try {
            let book = await json(`/api/books/${this.props.match.params.id}`);
            let categories= await json('/api/categories')
            this.setState({ book , categories})
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <Form />
        )
    }
}

interface EditBookState {
    book: {
        id: number,
        categoryid: number,
        title: string,
        author: string,
        price: number,
        _created: Date,
    },
    categories: ICategories[]
}
export interface EditBookProps extends RouteComponentProps<{ id: string }> {

}


export default EditBook