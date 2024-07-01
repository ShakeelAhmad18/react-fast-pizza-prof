import CreateUser from '../features/user/CreateUser'


function Home() {
    return (
        <div className='mb-10 text-center  mt-4 text-stone-500 sm:my-16 text-sm md:text-base'>
            <h1 className="mb-8 text-yellow-500 font-semibold text-center text-4xl">
                The best Pizaa
               <br />
               Straight out of the oven, straight to you.
            </h1>
            <CreateUser/>
        </div>
    )
}

export default Home
