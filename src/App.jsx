import React, { useState } from 'react'

const App = () => {

  const [Heading, setHeading] = useState('');
  const [Details, setDetails] = useState('');
  const [task, settask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Heading.trim() || !Details.trim()) return;
    const copyTask = [...task];
    copyTask.push({Heading,Details});
    settask(copyTask);    
    
    setHeading('');
    setDetails('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx,1);
    settask(copyTask);
  }

  return (
    <div className='min-h-screen lg:flex bg-black text-white '>
       <form onSubmit={(e)=>{
          submitHandler(e);
        }} className='flex lg:w-1/2 flex-col p-10 gap-5  items-center' >
        <h1 className='text-4xl font-bold flex justify-center' >Add Notes</h1>
        <input onChange={(e)=>{
          setHeading(e.target.value)
          
        }} value={Heading} className=' px-5 py-3 text-2xl font-medium w-full outline-none border-2 rounded-2xl ' type="text" placeholder='Enter Notes Heading' />
        <textarea onChange={(e)=>{
          setDetails(e.target.value)
          
        }} value={Details} className=' px-5 text-3xl font-medium py-3 h-30 outline-none w-full border-2 rounded-2xl ' type="text" placeholder='Enter Notes Details' />
        <button className='bg-white border-none active:scale-95 w-50 font-medium text-2xl text-black px-5 py-3 rounded-2xl '>Add Notes</button>       
       </form>
      <div className=' lg:w-1/2 lg:border-l-2 gap-5   p-10 '>
       <h1 className='text-4xl font-bold flex justify-center' >Recent Notes</h1>
        <div id='right' className="flex gap-5 h-[90%] flex-wrap items-start justify-start overflow-auto mt-5">
          {task.map(function(elem,idx){
            return <div key={idx} className=" flex justify-between flex-col h-50 w-38 rounded-2xl p-4 text-black bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] bg-cover">
              <div>
              <h3 className='text-xl leading-tight  font-bold'>{elem.Heading}</h3>
              <p className='mt-3 text-gray-500  font-medium leading-tight'>{elem.Details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx);
              }} className='bg-red-500 cursor-pointer active:scale-95 rounded  font-bold'>Delete Note</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}



export default App
