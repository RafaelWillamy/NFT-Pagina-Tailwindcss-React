export function Header(){
  return(
    <header className="bg-transparent">
<nav className="px-6 py-4 shadow">
    <div className="lg:items-center lg:justify-between lg:flex">
        <div className="flex items-center justify-between">
            <div>
                <a className="text-2xl font-bold text-gray-100 lg:text-3xl hover:text-purple-900 dark:hover:text-gray-300" href="#">Psychoo</a>
                <span className="text-2xl font-bold text-purple-900">Art</span>
            </div>
            <div className="flex items-center w-1/2 ml-4 space-y-3 lg:space-y-0 lg:flex-row">
                            <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 d focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Pesquisar Coleção"/>
                        </div>
            <div className="lg:hidden">
                <button type="button" className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="Toggle menu">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div className="flex flex-col mt-2 -mx-2 lg:mt-0 lg:flex-row lg:block">
            <a href="#" className="px-2 py-2 text-sm text-gray-100 rounded-md hover:bg-purple-900 hover:text-gray-100 hover:font-medium lg:mx-2">Coleção</a>
            <a href="#" className="px-2 py-2 text-sm text-gray-100 rounded-md hover:bg-purple-900 hover:text-gray-100 hover:font-medium lg:mx-2">Destaques</a>
            <a href="#" className="px-2 py-2 text-sm text-gray-100 rounded-md hover:bg-purple-900 hover:text-gray-100 hover:font-medium lg:mx-2">FAQ</a>
            <button className="w-full px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-purple-900 rounded-lg lg:w-auto lg:mx-4 hover:bg-purple-500 focus:outline-none focus:bg-purple-900">
         Carteira NFTs
          </button>
        </div>
    </div>
</nav>

<div className="lg:flex">
    <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
        <div className="max-w-xl">
            <h2 className="text-2xl font-semibold text-gray-100 lg:text-3xl">Crie, Venda & Colecione Nfts </h2>
                
            <p className="mt-2 text-sm text-gray-100 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <a href="#" className="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-purple-900 rounded-md hover:bg-purple-700">Explore agora</a>
                <a href="#" className="block px-3 py-2 text-sm font-semibold text-center text-black transition-colors duration-200 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Vender NFTs</a>
                
            </div>
            <div className="flex items-center mt-12 space-x-24 font-bold text-gray-100">
                        <div className="">
                            <p className="size3 bold">37k+</p>
                            <p className="text-purple-900">Artworks</p>
                        </div>
                        <div className="ta-center">
                            <p className="size3 bold">20k+</p>
                            <p className="text-purple-900">Artist</p>
                        </div>
                        <div className="ta-center">
                            <p className="size3 bold">99k+</p>
                            <p className="text-purple-900">Aucations</p>
                        </div>
                    </div>
        </div>
    </div>

    
    
    <div className="w-full h-64 mt-6 lg:w-1/2 lg:h-auto">
        <div className="w-full h-full bg-cover" >
            <div className="w-full h-full ">
              <img src="https://github.com/dzarrorn/NFTwebsite_html-sass/blob/master/img/heroimage.png?raw=true"/>
            </div>
        </div>
    </div>
</div>
</header>
    
  )
}

