import { Routes, Route } from 'react-router-dom';
import Layout from "../layouts/Layouts"
import Login from "../pages/Login"
import Register from '../pages/Register';
import Home from '../pages/Home';
import Banking from '../pages/user/Banking';
import Plus from '../pages/user/Plus';
import Transfer from '../pages/user/Transfer';
import History from '../pages/user/History';
import AddCart from '../pages/user/AddCart';
const token = localStorage.getItem("token");

function RoutesApp(){
    return(
        <Routes>
            <Route element={<Layout />}>
                {!token?
                <>
                <Route path='/banking-frontend' element={<Login />}/>;
                <Route path='/banking-frontend/register' element={<Register />}/>
                </>
                :
                <Route element={<Home/>}>
                    <Route path='/banking-frontend/banking' element={<Banking/>}/>
                    <Route path='/banking-frontend/plus/:cardNumber' element={<Plus/>}/>
                    <Route path='/banking-frontend/transfer' element={<Transfer/>}/>
                    <Route path='/banking-frontend/history' element={<History/>}/>
                    <Route path='/banking-frontend/addcard' element={<AddCart/>}/>
                </Route>
                }
            </Route>
        </Routes>
    )
}

export default RoutesApp;