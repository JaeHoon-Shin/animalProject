import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimalContext } from '../Context';
import Pagination from "react-js-pagination";
import styled from 'styled-components';
const AnimalList = () => {

    const { animal } = useContext(AnimalContext);

    const [list, setList] = useState([]);
    const [clist, setCList] = useState([]);


    // 이미지 정렬
    const changeFn = (e) => {
        //setChange();
        var spcs = e.target.value
        if (spcs == 'ALL') {
            setCList(list);
        }
        else {
            switch (spcs) {
                case spcs:
                    setCList(listFn(spcs))
                    break;
            }
        }
    }
    function listFn(spcs) {
        var value = [];
        list && list.map((obj, key) => {
            if (obj.Animal.SPCS == spcs)
                value.push(obj)
        })
        return value
    }

    useEffect(() => {
        var value = [];
        animal && animal.map((obj, key) => {
            if (obj.img.PHOTO_KND == 'THUMB')
                value.push(obj)
        })
        setList(value);
        setCList(value)
    }, [])

    

    const width = useRef(8)
   // width.current = window.innerWidth;
    //console.log(width.current)
    /* window.innerWidth > 770 ? setWidth(8) : setWidth(6) */
    console.log(window.innerWidth);
    useEffect(()=>(
        window.innerWidth > 770 ? width.current = 8 : width.current = 6)
        [window.innerWidth])
    //페이지네이션
    const [page, setPage] = useState(1) //현재 페이지
    const [viewPage, setViewPage] = useState(width.current) // view 페이지 수 
    var pageOfset = (page - 1) * viewPage;
    const handlePageChange = (page) => {
        setPage(page);
    }
    
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
        <section className='animal-container'>
            <h3>분양동물 리스트</h3>
            <div className='animal-content'>
                <p className='select-list'>
                    <select name="species" onChange={changeFn}>
                        <option value="ALL">종 선택</option>
                        <option value="ALL">전체</option>
                        <option value="DOG">강아지</option>
                        <option value="CAT">고양이</option>
                    </select>
                </p>
                <div className='animal-list'>
                    {
                        clist && clist.slice(pageOfset,pageOfset+viewPage).map((obj, key) => {
                            return <Link key={key} to={`/animalInfo/${obj.Animal.ANIMAL_NO}`}>
                                <figure  ><img src={obj.img.PHOTO_URL} />
                                    <figcaption><p>{obj.Animal.NM}</p></figcaption>
                                </figure>
                            </Link>

                        })
                    }</div>
                <PaginationBox>
                    <Pagination
                        activePage={page} // 현재 페이지
                        itemsCountPerPage={viewPage} // 한 페이지랑 보여줄 아이템 갯수
                        totalItemsCount={clist.length} // 총 아이템 갯수
                        pageRangeDisplayed={5} // paginator의 페이지 범위
                        prevPageText={"‹"} // "이전"을 나타낼 텍스트
                        nextPageText={"›"} // "다음"을 나타낼 텍스트
                        onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
                    /></PaginationBox>
            </div>
        </section>
    )
}

export default AnimalList