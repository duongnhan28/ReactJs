const ToDoList = ({ searchForm, setSearchForm }) => {
    //4444444
    /333333333/
    33333333

    const { getValue } = searchForm; // Lấy hàm getValue từ searchForm

    console.log(getValue); // In ra hàm getValue để kiểm tra

    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;


        // Cập nhật giá trị checkbox và logic của getValue
        setSearchForm({
            ...searchForm, // Giữ lại các giá trị khác222 trong searchForm searchForm2
            checkbox: isChecked, // Cập nhật giá trị checkbox   22        
        });
    };
    11111
    22222
    333333333333
    444444444
    return (
        <div >
            <h2>ToDo List</h2>

            <div >
                <label>
                    <input
                        type="checkbox"
                        checked={searchForm.checkbox} // Liên kết với giá trị checkbox trong searchForm
                        // Đây là comment khác trên main
                        onChange={handleCheckboxChange} // Gọi hàm khi checkbox thay đổi111
                    />
                    Checkbox
                </label>
            </div>
        </div>
    );
};

export default ToDoList;