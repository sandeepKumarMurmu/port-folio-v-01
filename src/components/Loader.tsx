

function Loader() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur justify-center items-center flex flex-col gap-4">
            <h2>Loading ....</h2>
            <div className="w-12 h-12 border-4 border-base-300 border-t-transparent rounded-full animate-spin">
            </div>
        </div>
    )
}

export default Loader