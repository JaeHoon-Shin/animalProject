import React, { useContext, useEffect, useRef, useState } from 'react'

import { AnimalContext } from '../Context';
import TodoItem from './TodoItem';
import Pagination from "react-js-pagination";
import styled from 'styled-components'
import axios from 'axios';

const TodoList = () => {
    const { todoList, movePageFn, selectTodo } = useContext(AnimalContext);
    const select = useRef('ALL');

    const searchEl = useRef();
    const [list, setList] = useState([])

    useEffect(() => {
        setList(todoList);
    }, [todoList])
    //console.log(list)

    const changeFn = (e) => {
        select.current = e.target.value;
    }
    const searchFn = () => {
        selectTodo(select.current, searchEl.current.value )
        /* switch (select.current) {
            case 'ALL':
                setList(todoList);
                break;
            case 'title':
                setList(list.filter((obj) => obj.todo_title.toLowerCase().includes(searchEl.current.value)))
                break;
            case 'name':
                setList(list.filter((obj) => obj.todo_name.toLowerCase().includes(searchEl.current.value)))
                break;

        } */

    }

    console.log(list);
    //페이지네이션
    const [page, setPage] = useState(1) //현재 페이지
    const [viewPage, setViewPage] = useState(10) // view 페이지 수 
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
    //

    return (

        <div className='todo-container'>
            <h3>자유게시판</h3>
            <div className='top-menu'>
                <div className='search-box'>
                    <select onChange={changeFn}>
                        <option value='ALL'>전체보기</option>
                        <option value='both'>둘다</option>
                        <option value='title'>제목</option>
                        <option value='name'>작성자</option>
                    </select>
                    <input type="text" ref={searchEl} ></input>
                    <img src='./img/search.svg' onClick={searchFn} />
                </div>
                <button onClick={() => movePageFn("todoWrite")}>글쓰기</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성날짜</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list && list.slice(pageOfset, pageOfset + viewPage).map((obj, key) => {
                            return <TodoItem obj={obj} key={key} />
                        })
                    }
                </tbody>
            </table>
            <PaginationBox>
                <Pagination
                    activePage={page} // 현재 페이지
                    itemsCountPerPage={viewPage} // 한 페이지랑 보여줄 아이템 갯수
                    totalItemsCount={list.length} // 총 아이템 갯수
                    pageRangeDisplayed={5} // paginator의 페이지 범위
                    prevPageText={"‹"} // "이전"을 나타낼 텍스트
                    nextPageText={"›"} // "다음"을 나타낼 텍스트
                    onChange={handlePageChange} // 페이지 변경을 핸들링하는 함수
                /></PaginationBox>
        </div>

    )
}

export default TodoList