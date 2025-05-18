const Input = (props) => {

    const { addNewTo } = props;


    //addNewTo("A");
    const handelClick = () => {
        alert("click me");
    }

    const handelOnChange = (name) => {
        console.log(name);
    }

    // check rebase

    return (
        <div className='todo-input'>
            <input onChange={(event) => handelOnChange(event.target.value)} type="text" placeholder="Input here"></input>
            <button onClick={handelClick}>Add</button>

        </div>
    );
}
export default Input;