
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onAdd, card }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      onAdd({ ...card, name, age: Number(age) }); 
      setName(''); 
      setAge(''); 
      onClose(); 
    }
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white/20 p-4 rounded-lg w-80">
        <div className='flex mb-5 items-center justify-between text-white'>
          <h2 className="text-xl">Add Student</h2>
          <i onClick={onClose} class="fa-solid fa-xmark text-xl hover:text-white/50"></i>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md outline-none bg-white/70 p-2 mb-2 w-full"
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-2 mb-4 w-full rounded-md outline-none bg-white/70"
            required
          />
          <div className="flex justify-center">
            <button type="submit" className="px-5 w-1/2 py-2 bg-[#59FF1D] hover:bg-[#59ff1db0] font-bold rounded">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
