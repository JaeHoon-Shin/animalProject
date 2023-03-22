import React from 'react'

const Footer = () => {
    return (
        <div className='footer-container'>
        <div className='text-box'>
          <div className='content'>
            <p>운영시간 안내 ※연중무휴※</p>
            <p>입양 문의 및 기타 사항 </p>
          </div>
          <div className='content'>
            <p><b>마포센터</b> : 09:00 am ~ 18:00 pm </p>
            <p><b>구로센터</b> : 10:00 am ~ 18:00 pm </p>
          </div>
          <div className='content'>
            <p><b>마포센터</b> : 02-2124-2839</p>
            <p><b>구로센터</b> : 02-2636-7645</p>
          </div>
        </div>
        <figure><img src='../img/footerimg.png'></img>
        </figure>
      </div>
    )
}

export default Footer