import * as React from 'react'
import {Link } from 'react-router-dom'

class Home extends React.Component<HomeProps, HomeState>{
    constructor(props: HomeProps) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="container-fluid text-center">
                <h1>Welcome to the Bookstore</h1>
                <Link to={'/books'} className='btn btn-primary'>Click to view listing</Link>
            </div>
        )
    }
}

interface HomeState { }
interface HomeProps { }

export default Home