export const Header = () => {
    
    return (
        <header className="container mx-auto">
            <div className="p-3">
                <p className="text-center text-5xl font-mono">E-Commerce Site with TypeScript & Redux</p>
            </div>
            <div className="p-3">
                <form className="my-3 flex justify-center">
                    <input type="text" className="w-3/4 p-2 text-2xl text-black outline-none rounded-md" placeholder="Find what you need ?" />
                </form>
            </div>
            <div className="my-2 flex justify-center items-center">
                <button className="px-3 py-2 text-2xl bg-slate-500 rounded-md mx-3">
                    Electronic
                </button>
                <button className="px-3 py-2 text-2xl bg-slate-500 rounded-md mx-3">
                    Mobile
                </button>
                <button className="px-3 py-2 text-2xl bg-slate-500 rounded-md mx-3">
                    Dress
                </button>
                <button className="px-3 py-2 text-2xl bg-slate-500 rounded-md mx-3">
                    Grocery
                </button>
            </div>
        </header>
    )
};
