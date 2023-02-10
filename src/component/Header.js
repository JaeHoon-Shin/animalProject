import React from 'react'
import {Link } from 'react-router-dom';
const Header = ({loginOpenFn,singupOpenFn}) => {
    return (
        <>
            <div className='header-top'>
                <ul className='text-box'>
                    <li className='logout-box'><p onClick={loginOpenFn}>로그인</p></li>
                    <li className='logout-box'><p onClick={singupOpenFn}>회원가입</p></li>
                    <li className='login-box'><Link to="/logOut"><p>로그아웃</p></Link></li>
                    <li className='login-box'><Link to="/myPage"><img src='../img/mypage.svg'></img></Link></li>
                </ul>
            </div>
            <div className='header-nav'>
                <Link to="/"><img src='../img/logo.svg'></img></Link>
                <h2><Link to="/">구해줘 홈즈</Link></h2>
                <ul>
                    <li><Link to="/AnimalList">분양동물</Link></li>
                    <li><Link to="/Yugilist">유기동물</Link></li>
                    <li><Link to="/TodoList">자유게시판</Link></li>
                    <li><Link to="/Qnalist">QnA</Link></li>
                </ul>
            </div></>
    )
}

export default Header