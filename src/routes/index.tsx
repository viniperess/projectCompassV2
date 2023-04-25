import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Register from '../Register';
import Login from '../Login';
import Home from '../Home';


const RoutesApp: React.FC = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;