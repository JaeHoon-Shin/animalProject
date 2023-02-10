import React, { useContext, useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AnimalContext } from '../Context';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';





const TodoInfo = () => {
    const { no } = useParams();
    const { todoList, setTodoList } = useContext(AnimalContext);
    const [info, setInfo] = useState();
    const [mCheck, setMcheck] = useState(false)
    const movePage = useNavigate();
    const [title, setTitle] = useState();
    const [name, setName] = useState();
    const editor = useRef();
    const [text, setText] = useState('');
    useEffect(() => {
        todoList && todoList.map((obj, key) => {
            if (obj.no == no) {
                setInfo(obj);
                setTitle(obj.title);
                setName(obj.name);

            }
        })
    }, [])

    const handleChangeInput = () => {
        setText(editor.current.getInstance().getHTML());
    };
    // 목록으로 돌아가기
    const toList = () => {
        movePage('/TodoList')
    }
    // 수정상태 확인
    const modifyCheck = () => {
        setMcheck(true)

    }
    // 수정
    const modify = () => {
        todoList && todoList.map((obj, key) => {
            if (obj.no == no) {
                obj.title = title;
                obj.name = name;
                obj.content = text;
            }
        })
        setTodoList([...todoList])
        movePage('/TodoList')
    }
    // 삭제
    const remove = () => {
        var data = todoList && todoList.filter((obj) => obj.no != no)
        setTodoList(data);
        movePage('/TodoList')
    }
    return (
        info && <div className='info-container'>
            <div className='info-box'>
                <h3>상세보기</h3>
                <table>
                    <tbody>
                        <tr>
                            <th scope="row"><p>제목</p></th>
                            {mCheck ? <td><input type='text' value={title} onChange={(e) => setTitle(e.target.value)} ></input></td> : <td> {info.title}</td>}
                        </tr>
                        <tr>
                            <th scope="row"><p>작성자</p></th>
                            {mCheck ? <td><input type='text' value={name} onChange={(e) => setName(e.target.value)} ></input></td> : <td>{info.name}</td>}
                        </tr>
                        <tr>
                            <th scope="row"><p>내용</p></th>
                            {mCheck ? <td><Editor
                                ref={editor}
                                initialValue={info.content}
                                previewStyle="vertical"
                                height="600px"
                                initialEditType="wysiwyg"
                                hideModeSwitch={true}
                                useCommandShortcut={false}
                                plugins={[colorSyntax]}
                                onChange={handleChangeInput} /></td> : <td dangerouslySetInnerHTML={{ __html: info.content }} />}
                        </tr>
                        <tr>
                            <th scope='row'><p>작성일</p></th>
                            <td>{info.date}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='button-box'> {mCheck ? <button onClick={modify} >저장</button> : <button onClick={modifyCheck} >수정</button>}<button onClick={remove} >삭제</button><button onClick={toList} >목록</button></div>
            </div>

        </div>
    )
}

export default TodoInfo