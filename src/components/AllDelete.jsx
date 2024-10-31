function AllDelete( {isOpen, onClose, onDelete}){

    const handleDelete = (e) => {
        e.preventDefault();
        onDelete();
        onClose(); 
};

function handleClose(e){
    e.preventDefault()
    onClose()
}

if (!isOpen) return null;

    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
        <div className="w-[300px] text-black bg-white/90 rounded-xl flex p-5 flex-col gap-6 items-center">
            <h1 className="text-xl font-bold">Matinni o`qing!</h1>
            <p className="text-sm font-bold">Barcha student ma`lumotlarini o`chirmoqchimisiz?</p>
            <div className="flex justify-between w-full px-5 ">
                <button onClick={handleClose} className="text-lg w-1/3 py-1 rounded-md bg-green-500  text-black font-bold">Yo`q</button>
                <button onClick={handleDelete} className="text-lg w-1/3 py-1 rounded-md bg-red-700  text-white font-bold">Ha</button>
            </div>
        </div>
        </div>
    )
}

export default AllDelete