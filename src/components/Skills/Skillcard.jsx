const Skillcard = ({ icon, text }) => {
    return (
        <div className='flex flex-col items-center hover:scale-105 transition-all duration-500 ease-in-out rounded-lg shadow-sm overflow-hidden hover:translate-y-[-5px] hover:shadow-lg'>
            <div className='w-full flex flex-col items-center shadow-xl rounded-xl bg-slate-950 bg-opacity-50 py-3 px-2'>
                <div className='text-white text-[50px]'>{icon}</div>
                <h1 className='text-[#64ffda] pt-2 text-lg font-bold'>{text}</h1>
            </div>
        </div>
    );
};

export default Skillcard;

