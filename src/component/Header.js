import React from 'react'
import { Link } from 'react-router-dom';
const Header = ({ loginOpenFn, singupOpenFn, loginId, setLoginId, logOutFn }) => {
    return (
        <>
            <div className='header-top'>
                <ul className='text-box'>
                    <li className='logout-box'>{loginId ? <p>{loginId}님</p> : <p onClick={loginOpenFn}>로그인</p>}</li>
                    <li className='logout-box'> {loginId ? <p onClick={logOutFn}>로그아웃</p> : <p onClick={singupOpenFn}>회원가입</p>}</li>
                    <li className='login-box'><Link to="/myPage"><img src='../img/mypage.svg'></img></Link></li>
                </ul>
            </div>
            <div className='header-nav'>
                <div className='logo'><Link to="/"><img src='../img/logo.svg'></img></Link>
                    <h2><Link to="/">구해줘 홈즈</Link></h2></div>

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