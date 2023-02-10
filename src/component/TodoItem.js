import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const TodoItem = ({ obj }) => {
    const movePage = useNavigate();
    const todoInfoFn=(no)=>{
        movePage(`/TodoInfo/${no}`);
    }
    return (
        <tr onClick ={()=>todoInfoFn(obj.no)}>
            <td>{obj.no}</td>
            <td>{obj.title}</td>
            <td>{obj.name}</td>
            <td>{obj.date}</td>
        </tr>
    )
}

export default TodoItem