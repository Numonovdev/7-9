import { useEffect, useState } from 'react';
import { add, deletee, allDelete, upStudent } from './redux/studentsState';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal';
import ModalDelete from './components/ModalDelete';
import AllDelete from './components/AllDelete';
import EditStudent from './components/EditStudents';
import Theme from './components/Theme';

function App() {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const [studentlength, setStudentlength] = useState(0);

  // student malumotini qo`shish add
  const [isModalOpen, setIsModalOpen] = useState(false);
  // bitta student malumotin o`chirish
  const [modalopenDelet, setModalopenDelet] = useState(false);
  const [idDelete, setIdDelete] = useState('');
  const [nameId, setNameId] = useState('');
  // barcha student malumotini o`chirish
  const [allopenDelete, setAllopenDelete] = useState(false);
  // student malumotini o`zgartishir
  const [editopen, setEditopen] = useState(false);
  const [data, setData] = useState([]);

  // filter qismi 
  const [searchStudent, setSearchStudent] = useState('');


  // filter qismi
  function handleSearch(e) {
    setSearchStudent(e.target.value);
  }

  useEffect(() => {
    console.log(students);
  }, [students]);

  // student qo'shish
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleAddStudent = (card) => {
    dispatch(add(card));
    setStudentlength(studentlength + 1);
  };

  // delete birdona student 
  function handleDelete(id, name) {
    setIdDelete(id);
    setNameId(name);
    setModalopenDelet(true);
  }
  function modalcloseDelet() {
    setModalopenDelet(false);
  }
  function handleDelet() {
    dispatch(deletee(idDelete));
    setStudentlength(studentlength - 1);
    setModalopenDelet(false);
  }

  // barcha malumotlarni o`chirish All Delete
  function handleAllDelete() {
    setAllopenDelete(true);
  }
  function allcloseDelet() {
    setAllopenDelete(false);
  }
  function handleAllDelet() {
    dispatch(allDelete());
    setStudentlength(0);
    setAllopenDelete(false);
  }

  // student malumotlarini o`zgartirish
  function handleopenEdit(id, value) {
    const dataD = {
      id: id,
      value: value,
    };
    setData([dataD]);
    setEditopen(true);
  }
  function editstudentclose() {
    setEditopen(false);
  }

  function handleEdit(onCard) {
    dispatch(upStudent(onCard));
    setEditopen(false);
  }

  // Filter orqali ID bo'yicha qidiruv
  const filteredStudents = students.value
    ? students.value.filter((student,index) => 
        (index+1).toString().includes(searchStudent)
      )
    : [];

  return (
    <div className='pt-10'>
      <header className='pb-5 shadow-lg flex flex-col items-center gap-10  shadow-slate-700'>
        <Theme/>
        <h1 className='text-white text-base md:text-xl lg:text-2xl xl:text-3xl font-bold'>{studentlength} students information</h1>
        <div className='container flex justify-between'>
          <input 
            value={searchStudent} 
            onChange={handleSearch} 
            type="text" 
            placeholder='SEARCH ID' 
            className='rounded-lg font-medium px-4 py-2 bg-transparent border-2 outline-none text-white/80 border-slate-700' 
          />
          <div className='flex items-center gap-4 font-medium'>
            <button className='px-5 py-2 border-none bg-[#59FF1D] duration-300 hover:bg-[#59ff1dab] rounded-lg' onClick={openModal}>Add Students</button>  
            <button onClick={handleAllDelete} className='px-5 py-2 border-none bg-red-600 duration-300 hover:bg-red-600/80 rounded-lg'>Clear All Students</button>
          </div>
        </div>
      </header>

      <div className='text-white'>
        <div className='container grid grid-cols-1 md:grid-cols-2 mt-10 gap-4 lg:grid-cols-3 xl:grid-cols-4'>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((value, index) => (
              <div key={value.id} className='border border-slate-700 rounded-lg p-6 flex flex-col gap-3'>
                <h1 className='text-sm flex justify-between opacity-50'><span>ID:</span>{index +1}</h1>
                <h1 className='flex justify-between text-lg underline'><span>Name:</span>{value.name}</h1>
                <h1 className='flex justify-between text-base opacity-50'><span>Age:</span>{value.age}</h1>
                <div className='flex justify-between items-center'>
                  <button onClick={() => { handleopenEdit(value.id, value) }} className='px-8 hover:opacity-70 duration-300 rounded-md text-sm py-1 bg-blue-600'>Edit</button>
                  <button onClick={() => { handleDelete(value.id, value.name) }} className='px-8 hover:opacity-70 duration-300 rounded-md text-sm py-1 bg-red-700'>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No students found.</p>
          )}
        </div>
      </div>
      <EditStudent isOpen={editopen} onClose={editstudentclose} Edit={handleEdit} onCard={{ data }} />
      <ModalDelete isOpen={modalopenDelet} onClose={modalcloseDelet} onDelete={handleDelet} cardId={{ nameId }} />
      <Modal isOpen={isModalOpen} onClose={closeModal} onAdd={handleAddStudent} card={{ id: Date.now() }} />
      <AllDelete isOpen={allopenDelete} onClose={allcloseDelet} onDelete={handleAllDelet} />
    </div>
  );
}

export default App;
