import React, { useContext, useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AnimalContext } from '../Context';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';





const TodoInfo = () => {
    const { todo_no } = useParams();
    const { todoList, updateTodo, deleteTodo, } = useContext(AnimalContext);
    const [info, setInfo] = useState();
    const [mCheck, setMcheck] = useState(false)
    const movePage = useNavigate();
    const [title, setTitle] = useState();
    const [name, setName] = useState();
    const editor = useRef();
    const [content, setContent] = useState('');
    useEffect(() => {
        todoList && todoList.map((obj, key) => {
            if (obj.todo_no == todo_no) {
                setInfo(obj);
                setTitle(obj.todo_title);
                setName(obj.todo_name);
            }
        })
    }, [])
    const handleChangeInput = () => {
        setContent(editor.current.getInstance().getHTML());
    };
    // 목록으로 돌아가기
    const toList = () => {
        movePage('/TodoList');
    }
    // 수정상태 확인
    const modifyCheck = () => {
        setMcheck(true);

    }
    // 수정 todo_no, todo_Title, todo_Content, todo_name
    const modify = () => {
        updateTodo(todo_no, title, content, name );
        movePage('/TodoList');
    }
    // 삭제
    const remove = () => {
        deleteTodo(todo_no);
        movePage('/TodoList');
    }
    return (
        info && <div className='info-container'>
            <div className='info-box'>
                <h3>상세보기</h3>
                <table>
                    <tbody>
                        <tr>
                            <th scope="row"><p>제목</p></th>
                            {mCheck ? <td><input type='text' value={title} onChange={(e) => setTitle(e.target.value)} ></input></td> : <td> {info.todo_title}</td>}
                        </tr>
                        <tr>
                            <th scope="row"><p>작성자</p></th>
                            {mCheck ? <td><input type='text' value={name} onChange={(e) => setName(e.target.value)} ></input></td> : <td>{info.todo_name}</td>}
                        </tr>
                        <tr>
                            <th scope="row"><p>내용</p></th>
                            {mCheck ? <td><Editor
                                ref={editor}
                                initialValue={info.todo_content}
                                previewStyle="vertical"
                                height="600px"
                                initialEditType="wysiwyg"
                                hideModeSwitch={true}
                                useCommandShortcut={false}
                                plugins={[colorSyntax]}
                                onChange={handleChangeInput} />
                                </td> : <td dangerouslySetInnerHTML={{ __html: info.todo_content }} />}
                        </tr>
                        <tr>
                            <th scope='row'><p>작성일</p></th>
                            <td>{info.todo_date.slice(0,info.todo_date.indexOf('T'))}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='button-box'> {mCheck ? <button onClick={modify} >저장</button> : <button onClick={modifyCheck} >수정</button>}<button onClick={remove} >삭제</button><button onClick={toList} >목록</button></div>
            </div>

        </div>
    )
}

export default TodoInfo