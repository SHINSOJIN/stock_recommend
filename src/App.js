import {Route, Routes} from 'react-router-dom'
import './assets/css.css'
import Login from "./pages/Login";
import Header from "./components/common/Header";
import Main from "./pages/Main";
import InsertNews from "./pages/InsertNews";
import Footer from "./components/common/Footer";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/demo2' element={<div>뉴스 입력 페이지</div>}/>
                <Route path='/demo' element={<InsertNews/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
            <Footer/>
        </>

    );
}

export default App;
