import React, { useState } from 'react';
import ToDoList from './ToDoList'; // Đường dẫn đến file ToDoList.jsx


const ParentComponent = () => {
    const [searchForm, setSearchForm] = useState({
        checkbox: false, // Giá trị ban đầu của checkbox
        name: "nhan"
    });

    return (
        <div>
            <h1>Parent Component</h1>
            <ToDoList searchForm={searchForm} setSearchForm={setSearchForm} />
        </div>
    );
};

export default ParentComponent;