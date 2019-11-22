import { useState } from 'react'
import * as React from 'react'

    export const useForm = () => {

    const [state, setState] = useState({});

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
       e.persist();
        //create new object for our new updated state
        //take old state obj and spread it out in this object
        //create a new key value pair that is what we are writing in the inputs
        setState(state => ({ ...state, [e.target.name]: e.target.value }))
    };

    return [state, handleChange];


}

