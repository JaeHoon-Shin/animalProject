import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const TodoItem = ({ obj }) => {
    const movePage = useNavigate();
    const todoInfoFn=(todo_no)=>{
        movePage(`/TodoInfo/${todo_no}`);
    }
   
    return (
        <tr onClick ={()=>todoInfoFn(obj.todo_no)}>
            <td>{obj.todo_no}</td>
            <td>{obj.todo_title}</td>
            <td>{obj.todo_name}</td>
            <td>{obj.todo_date.slice(0,obj.todo_date.indexOf('T'))}</td>
        </tr>
    )
}

export default TodoItem