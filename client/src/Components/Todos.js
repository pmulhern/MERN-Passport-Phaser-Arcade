import React, {useState,useContext,useEffect} from 'react';
import TodoItem from './TodoItem';
import TodoService from '../Services/TodoService';
import Message from './Message';
import { AuthContext } from '../Context/AuthContext';

const Todos = props =>{
    const [todo,setTodo] = useState({name : ""});
    const [todos,setTodos] = useState([]);
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);
    
    // Equivallent to ComponentDidMount
    useEffect(()=>{
        // Pulled from TodoService component
        TodoService.getTodos().then(data =>{
            setTodos(data.todos);
        });
    },[]);

    const onSubmit = e =>{
        e.preventDefault();
        // Pulled from TodoService component
        TodoService.postTodo(todo).then(data =>{
            // Deconstruct/ pull out message from data
            const { message } = data;
            resetForm();
            // If there is no message error, render all Todos
            if(!message.msgError){
                TodoService.getTodos().then(getData =>{
                    setTodos(getData.todos);
                    setMessage(message);
                });
            }
            // If the error message = UnAuthorized
            else if(message.msgBody === "UnAuthorized"){
                // Display this message
                setMessage(message);
                // Clear input data by setting to empty string ""
                authContext.setUser({username : "", role : ""});
                authContext.setIsAuthenticated(false);
            }
            else{
                setMessage(message);
            }
        });
    }

    // Takes event object and set name property to value
    const onChange = e =>{
        setTodo({name : e.target.value});
    }

    // Update the todo and reset name to empty string ""
    const resetForm = ()=>{
        setTodo({name : ""});
    }

    return(
        <div>
            <ul className="list-group">
                {
                    // Data coming from UseEffect from line 14 above
                    todos.map(todo =>{
                        // Pulling from TodoItem component
                        return <TodoItem key={todo._id} todo={todo}/>
                    })
                }
            </ul>
            <br/>
            {/* Form to accept another todo */}
            <form onSubmit={onSubmit}>
                <label htmlFor="todo">Enter Todo</label>
                <input type="text" 
                       name="todo" 
                       //Sets value to the state we have
                       value={todo.name} 
                       onChange={onChange}
                       className="form-control"
                       placeholder="Please Enter Todo"/>
                <button className="btn btn-lg btn-primary btn-block" 
                        type="submit">Submit</button>
            </form>
            {/* Displays successful submission or if something goes wrong */}
            {message ? <Message message={message}/> : null}
        </div>
    );

}

export default Todos;