import React, { Component } from 'react'
import Header from './Header'
import Todo from './Todo'

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            todoTitle: '',
            status: 'all',
            completed: false
            
        }

        // this.addTodo = this.addTodo.bind(this)
        // this.removeTodo = this.removeTodo.bind(this)
        // this.editTodo = this.editTodo.bind(this)
        // this.todoTitleHandler = this.todoTitleHandler.bind(this)
        // this.statusHandler = this.statusHandler.bind(this)

    }
    toDoChangeHandler(e){
        this.setState({todoTitle:e.target.value})

    }

    addTodo(e){
       e.preventDefault();
       let todoTitle= this.state.todoTitle;
       let id= this.state.todos.length+1;
       let completed = this.state.completed;
       let newTodo={todoTitle,id,completed}
    

       this.setState({todos: [...this.state.todos,newTodo],
        todoTitle:""})
        console.log(this.state.todos)

    }

    removeTodoHandler(removeId){
        console.log(removeId);
        let newTodos= this.state.todos.filter((todo)=>{
           return (todo.id !== removeId)  
        })
        this.setState({todos: newTodos})
       

    }

    editTodoHandler(editId,todoCompleted){
        let newCompleted= todoCompleted
        this.state.todos.map((todo)=>{
           if (todo.id === editId) {
           return(this.setState({completed: !newCompleted}))

           }
           console.log(this.state.newTodos)
       
                
            

        })
        

    }

    render() {
        return (
            <>
                <Header />
                <form onSubmit={(e)=>this.addTodo(e)}>
                    <input type="text" value={this.state.todoTitle} onChange={(e)=>this.toDoChangeHandler(e)} className="todo-input" maxLength="40"/>
                    <button  className="todo-button" type="submit">
                        <i  className="fas fa-plus-square"></i>
                    </button>
                    <div className="select">
                        <select name="todos" className="filter-todo">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">
                        {this.state.todos.map((todo)=>{return(
                           <Todo key={todo.id} trash={()=>this.removeTodoHandler(todo.id)}
                                edit={()=>this.editTodoHandler(todo.id,todo.completed)} {...todo}  />
                        )

                        })}
                        
                           
                        
                     
                    </ul>
                </div>
            </>
        )
    }
}
