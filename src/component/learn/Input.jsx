const Input = (props) => {

    const { addNewTo } = props;
    //addNewTo("A");
    return (
        <div className='todo-input'>
            <input type="text" placeholder="Input here"></input>
            <button >Add</button>

        </div>
    );
}
export default Input;