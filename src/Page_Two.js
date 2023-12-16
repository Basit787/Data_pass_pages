import { useEffect, useState } from 'react';
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';
const Page_Two = (props) => {
    const [data, setData] = useState("");
    // const location = useLocation();

    useEffect(() => {
        console.log(props.state)
        setData(props.state?.updateText)
    }, [])

    const handleChange = (event) => {
        setData(event.target.value);
    }
    const handleClick = () => {
        // navigate('/pagetwo', { state: { updateText: data } })
        props.navigateTo("/pageone", { updateText: data })
    }

    return (
        <div className='container'>
            <div className='div1'>
                <nav className='navigation'>
                    <h1>React Router Dom</h1>
                </nav>
            </div>
            <div className='div2'>
                <h1>This is Page 2</h1>
                <div>
                    <input type='text' value={data} placeholder='enter your text' onChange={handleChange} />

                    <button onClick={() => handleClick()}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Page_Two