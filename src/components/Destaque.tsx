export function Destaque(){
  return(
    <section className="">
      <div className="container px-6 py-10 mx-auto  text-center">
        <h1 className="text-gray-100 text-2xl font-bold items-center mt-5 mb-8 justify-center">Obras em Destaque</h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col items-center p-4 border border-purple-500 sm:p-6 rounded-xl bg-zinc-400">
          <img className="object-cover w-full rounded-xl aspect-square" src="https://github.com/dzarrorn/NFTwebsite_html-sass/blob/master/img/collection1.png?raw=true" alt=""/>
                        <div className="flex mt-3 -mx-2 space-x-64">
                          <p className="text-gray-100">@John</p>
                          <p className="text-gray-100">Current bid</p>
                        </div>
                        <div className="flex mt-5 space-x-52">
                          <h3 className="text-gray-100 font-bold">Yellow Red</h3>
                          <h3 className="text-gray-100 font-bold">
                            0.0056ETH</h3>
                        </div>
                        <a href="#" className="bg-purple-500 cursor-pointer text-gray-100 font-semibold px-4 py-3 rounded-lg hover:bg-purple-800">Faça um lance</a>
                    </div>
                    <div className=" flex flex-col items-center p-4 border border-purple-500 sm:p-6 rounded-xl bg-zinc-400">
                        <img className="object-cover w-full rounded-xl aspect-square" src="https://github.com/dzarrorn/NFTwebsite_html-sass/blob/master/img/collection2.png?raw=true" alt=""/>
                        
               
                        <div className="flex mt-3 -mx-2 space-x-64">
                          <p className="text-gray-100">@John</p>
                          <p className="text-gray-100">Current bid</p>
                        </div>
                        <div className="flex mt-5 space-x-52">
                          <h3 className="text-gray-100 font-bold">Yellow Red</h3>
                          <h3 className="text-gray-100 font-bold">
                            0.0056ETH</h3>
                        </div>
                        <a href="#" className="bg-purple-500 cursor-pointer text-gray-100 font-semibold px-4 py-3 rounded-lg hover:bg-purple-800">Faça um lance</a>
                    </div>
                    <div className=" flex flex-col items-center p-4 border border-purple-500 sm:p-6 rounded-xl bg-zinc-400 ">
                        <img className="object-cover w-full rounded-xl aspect-square" src="https://github.com/dzarrorn/NFTwebsite_html-sass/blob/master/img/collection4.png?raw=true" alt=""/>
                        
               
                        <div className="flex mt-3 -mx-2 space-x-64">
                          <p className="text-gray-100">@John</p>
                          <p className="text-gray-100">Current bid</p>
                        </div>
                        <div className="flex mt-5 space-x-52">
                          <h3 className="text-gray-100 font-bold">Yellow Red</h3>
                          <h3 className="text-gray-100 font-bold">
                            0.0056ETH</h3>
                        </div>
                        <a href="#" className="bg-purple-500 cursor-pointer text-gray-100 font-semibold px-4 py-3 rounded-lg hover:bg-purple-800">Faça um lance</a>
                    </div>
          </div>
        </div>
    </section>

  )
}