import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor } from '@toast-ui/react-editor';
import { useContext, useRef, useState } from 'react';
import { AnimalContext } from '../Context';
import { useNavigate } from 'react-router-dom';


function TodoWrite() {
    const { insertTodo } = useContext(AnimalContext);
    const [content, setContent] = useState('');
    const editor = useRef();
    const [title, setTitle] = useState();
    const [name, setName] = useState();
    const movePage = useNavigate();


    const handleChangeInput = () => {
        setContent(editor.current.getInstance().getHTML());
    };

    const todoInsert = () => {
        if(title && name && content){
        insertTodo(title, content, name);
        movePage("/TodoList")}
        else {
            alert('입력이 안된 정보가 있습니다.')
        }
    };
    const close = () => {
        movePage("/TodoList")
    }

    return (

        <div className='insert-container'>
            <div className='insert-box'>
                <h3>글쓰기</h3>
                <table>
                    <tbody>
                        <tr>
                            <th scope="row"><p>제목</p></th>
                            <td><input type='text' value={title} onChange={(e) => setTitle(e.target.value)}></input></td>
                        </tr>
                        <tr>
                            <th scope="row"><p>작성자</p></th>
                            <td>
                                <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input></td>
                        </tr>
                        <tr>
                            <th scope="row"><p>내용</p></th>
                            <td>
                                <Editor
                                    ref={editor}
                                    initialValue=" "
                                    previewStyle="vertical"
                                    height="600px"
                                    initialEditType="wysiwyg"
                                    hideModeSwitch={true}
                                    useCommandShortcut={false}
                                    plugins={[colorSyntax]}
                                    onChange={handleChangeInput} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='button-box'><button onClick={todoInsert}>등록</button><button onClick={close}>취소</button></div>
            </div>

        </div>
    );
}

export default TodoWrite
