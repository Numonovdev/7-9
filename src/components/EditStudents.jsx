import React, { useState, useEffect } from 'react';

function EditStudent({ isOpen, onClose, Edit, onCard }) {
    const [studentData, setStudentData] = useState({
        id: '',
        name: '',
        age: ''
    });

    useEffect(() => {
        if (isOpen && onCard && onCard.data.length > 0) {
            setStudentData(onCard.data[0].value); 
        }
    }, [isOpen, onCard]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData({ ...studentData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Edit(studentData); 
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white/20 p-4 rounded-lg w-80">
                <h2 className="text-lg font-bold mb-4">Edit Student</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={studentData.name}
                            onChange={handleChange}
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium">Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={studentData.age}
                            onChange={handleChange}
                            className="border p-2 w-full"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                        Save
                    </button>
                    <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditStudent;
