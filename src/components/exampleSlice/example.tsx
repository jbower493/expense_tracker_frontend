// Imports
import { ReactElement, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { addTo, decrement } from 'components/exampleSlice/exampleSlice';


// Component
const Example = (): ReactElement => {
    const counter = useAppSelector((state) => state.counter.theCounter);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(counter)
    })

    useEffect(() => {
        dispatch(addTo(10));
    }, [])

    

    return (
        <div>
            <div>The example of a slice</div>
            <h2>{counter}</h2>
        </div>
    );
}

export default Example;