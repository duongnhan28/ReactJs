const ToDoList = ({ searchForm, setSearchForm }) => {


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

    return (
        <div >
            <h2>ToDo List</h2>

            <div >
                <label>
                    <input
                        type="checkbox"
                        checked={searchForm.checkbox} // Liên kết với giá trị checkbox trong searchForm
                        //da1111y111 ch11i la cas11cas
                        onChange={handleCheckboxChange} // Gọi hàm khi checkbox thay đổi111
                    />
                    Checkbox
                </label>
            </div>
        </div>
    );
};

export default ToDoList;