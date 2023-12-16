import React, { useEffect, useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
import Page_Two from './Page_Two';

const Page_One = (props) => {
    const [data, setData] = useState('');
    // const navigate = useNavigate();
    useEffect(() => {
        console.log(props.state)
        setData(props.state?.updateText)
    }, [])


    const handleChange = (event) => {
        setData(event.target.value);
    }
    const handleClick = () => {
        // navigate('/pagetwo', { state: { updateText: data } })
        props.navigateTo("/pagetwo", { updateText: data })
    }
    return (
        <div className='container'>
            <div className='div1'>
                <nav className='navigation'>
                    <h1>React Router Dom</h1>
                </nav>
            </div>
            <div className='div2'>
                <h1>This is Page 1</h1>
                <input type='text' value={data} placeholder='enter your text' onChange={handleChange} /><br /><br />
                <button onClick={() => handleClick()}>Send</button>
            </div>

        </div>
    )
}

export default Page_One
