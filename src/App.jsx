import './App.css'

function App() {
  return (
    <>
      <div className='rounded-lg w-[317px] h-[780px] flex flex-col mx-auto bg-[#1A1B21] my-10'>
        <img src="./assets/girl.png" className=''/>
        <div className='flex flex-col items-center'>
        <p className='text-white font-bold text-[25px]'>Laura Smith</p>
        <p className='text-[#F3BF99] text-[12.8px]'>Frontend Developer</p>
        <p className='text-[#F5F5F5] text-[10.24px]'>laurasmith.website</p>
        </div>
        <div className='flex gap-4 my-3 mx-auto'>
          <button className='text-[#374151] bg-white flex gap-4 px-5 items-center rounded-lg w-[115px] h-[34px]'>
            <img src= "./assets/Mail.svg"/>
            <p className='font-medium text-[14px]'>Email</p>
          </button>
          <button className='flex gap-3 px-3 items-center rounded-lg bg-[#5093E2] w-[115px] h-[34px]'>
            <img src="./assets/linkedin.svg"/>
            <p className='text-white font-medium text-[14px]'>LinkedIn</p>
          </button>
        </div>
        <div className='flex flex-col items-start px-2 w-[247px] mx-auto py-10'>
        <div className='text-white  '>
          <p className='font-bold text-[16px] '>About</p>
          <p className='text-[10.24px] text-[#DCDCDC]'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div className='text-white pt-5'>
          <p className='font-bold text-[16px]'>Interests</p>
          <p className='text-[10.24px] text-[#DCDCDC]'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
        </div>
        <footer className='bg-[#161619] flex mx-auto gap-6 mt-2'>
            <img src="./assets/Twitter Icon.svg" alt="" />
            <img src="./assets/Facebook Icon.svg" alt="" />
            <img src="./assets/Instagram Icon.svg" alt="" />
            <img src="./assets/GitHub Icon.svg" alt="" />
        </footer>
      </div>

    </>
  )
}

export default App
