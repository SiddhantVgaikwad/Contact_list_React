import React from 'react'
import { Link } from 'react-router-dom'
const logoImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaPRxt1XobljQxda24_ibLHfAZKn9LM0gMw&s';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary py-2'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand ml-5'>ContactApp</Link>
                <div className="navbar-brand d-flex justify-content-end">
                <img src={logoImage} alt="Logo" width="auto" height="30" />
                </div>
            </div>
        </nav >
    )
}

export default Navbar