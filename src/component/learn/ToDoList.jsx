const ToDoList = (props) => {
    const { name, age, data } = props;
    //main
    return (
        <div className="todo-list">
            <div className="todo-item">{name}</div>
            <div className="todo-item">{age}</div>
            <div className="todo-item">{data.address}</div>
        </div>
    )
}

export default ToDoList;
