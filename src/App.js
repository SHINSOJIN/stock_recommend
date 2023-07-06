import {Route, Routes} from 'react-router-dom'
import './assets/css.css'
import Login from "./pages/Login";
import Header from "./components/common/Header";
import Main from "./pages/Main";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </>

    );
}

export default App;
