import './App.scss';
import { useState, useRef, useEffect, useContext } from 'react'
import Context from './Context';
import Main from './component/Main';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AnimalList from './component/AnimalList';
import AnimalInfo from './component/AnimalInfo';
import Yugilist from './component/Yugilist';
import YugiInfo from './component/YugiInfo';
import SingUp from './component/SingUp';
import Qnalist from './component/Qnalist';

import Login from './component/Login';

import TodoList from './component/TodoList';
import TodoWrite from './component/TodoWrite';
import TodoInfo from './component/TodoInfo';
import Footer from './component/Footer';
import Header from './component/Header';

function App() {
  const [sinupOpen, setsinupOpen] = useState(false);
  const [loginOpen, setloginOpen] = useState(false);

  function loginOpenFn() {
    setloginOpen(true);
  }
  function singupOpenFn() {
    setsinupOpen(true);
  }

  //로그인확인 세션
  let sessionStorage = window.sessionStorage;

  console.log(sessionStorage.getItem("loginId"));

  const [loginId, setLoginId] = useState();

  useEffect(() => {
    sessionStorage.setItem("loginId", loginId)
  }, [loginId])


  function logOutFn(){
    sessionStorage.clear();
    setLoginId();
  }

  return (
    <>
      <BrowserRouter>
        <header>
          <Header loginOpenFn={loginOpenFn} singupOpenFn={singupOpenFn}  setLoginId={setLoginId} loginId={loginId} logOutFn={logOutFn} ></Header>
        </header>
        <Login isOpen={loginOpen} setOpen={setloginOpen} setsinupOpen={setsinupOpen} setLoginId={setLoginId} />
        <SingUp isOpen={sinupOpen} setOpen={setsinupOpen} />
        <Context>
          <main>

            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/AnimalList' element={<AnimalList />}></Route>
              <Route path='/Yugilist' element={<Yugilist />}></Route>
              <Route path='/AnimalInfo/:id' element={<AnimalInfo />}></Route>
              <Route path='/YugiInfo/:id' element={<YugiInfo />}></Route>
              <Route path='/Qnalist' element={<Qnalist />}></Route>
              <Route path='/TodoList' element={<TodoList />}></Route>
              <Route path='/TodoWrite' element={<TodoWrite />}> </Route>
              <Route path='/TodoInfo/:todo_no' element={<TodoInfo />}></Route>
            </Routes>
          </main>
        </Context>

      </BrowserRouter>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
