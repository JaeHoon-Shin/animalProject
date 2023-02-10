import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AnimalContext } from '../Context'
/* import './Paging.css'; */
import Pagination from "react-js-pagination";
import styled from 'styled-components'

const Yugilist = () => {

    const { yugi, yugiChange } = useContext(AnimalContext);
    const changeFn = (e) => {
        yugiChange(e.target.value)
        setPage(1);
    }

    //페이지네이션
    const [page, setPage] = useState(1) //현재 페이지
    const [viewPage, setViewPage] = useState(8) // view 페이지 수 
    /* var totalPage = Math.ceil((yugi.length / 8)); */
    var pageOfset = (page - 1) * viewPage;
    const handlePageChange = (page) => { setPage(page); };
  
    const PaginationBox = styled.div`
    .pagination { display: flex; justify-content: center; margin-top: 30px;}
    ul { list-style: none; padding: 0; }
    ul.pagination li {
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 1px solid #e2e2e2;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem; 
    }
    ul.pagination li:first-child{ border-radius: 5px 0 0 5px; }
    ul.pagination li:last-child{ border-radius: 0 5px 5px 0; }
    ul.pagination li a { text-decoration: none; color: #337ab7; font-size: 1rem; }
    ul.pagination li.active a { color: white; }
    ul.pagination li.active { background-color: #337ab7; }
    ul.pagination li a:hover,
    ul.pagination li a.active { color: blue; }
  `
  ///
    return (
        <section className='yugi-container'>
            <h3>유기동물 리스트</h3>
            <div className='yugi-content'>
                <p className='select-list'>
                    <select name="species" onChange={changeFn}>
                        <option value="All">종 선택</option>
                        <option value="All">전체</option>
                        <option value="DOG">강아지</option>
                        <option value="CAT">고양이</option>
                        <option value="Etc">기타</option>
                    </select>
                </p>
                <div className='yugi-list'>

                    {
                        yugi && yugi.slice(pageOfset, pageOfset + viewPage).map((obj, key) => {

                            return <Link key={key} to={`/YugiInfo/${obj.desertionNo}`}>
                                <figure>
                                    <img src={obj.popfile}></img>
                                    <figcaption><p>{obj.noticeNo}</p></figcaption>
                                </figure>
                            </Link>

                        })
                    }</div>
                <PaginationBox>
                    <Pagination
                    activePage={page} // 현재 페이지
                    itemsCountPerPage={viewPage} // 한 페이지랑 보여줄 아이템 갯수
                    totalItemsCount={yugi.length} // 총 아이템 갯수
                    pageRangeDisplayed={5} // paginator의 페이지 범위
                    prevPageText={"‹"} // "이전"을 나타낼 텍스트
                    nextPageText={"›"} // "다음"을 나타낼 텍스트
                    onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
                /></PaginationBox>
            </div>
        </section >
    )
}

export default Yugilist