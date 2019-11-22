import * as React from 'react'
import { Link } from 'react-router-dom';


class Nav extends React.Component<NavProps, NavState>{
    constructor(props: NavProps) {
        super(props);
    }
    render() {
        return (
            <div className="col-md-12">
                <div className="row justify-content-center">
                    <nav className="form-inline">
                        <form className= 'form-inline'>
                            <Link to={'/books/new'} className="btn btn-outline-info">Add New Book</Link>
                            <button className="btn btn-outline-info">Login/Register</button>
                        </form>
                    </nav>
                </div>
            </div>
        )
    }
}

interface NavState { }
interface NavProps { }

export default Nav