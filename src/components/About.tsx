export function About(){
  return(
<div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
      <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
        <img
          className="object-cover w-full h-full rounded shadow-lg lg:rounded-none lg:shadow-none md:h-full lg:h-full"
          src="https://github.com/dzarrorn/NFTwebsite_html-sass/blob/master/img/about.png?raw=true"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
     
          <h1 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl sm:leading-none">
            Quem Somos
          </h1>
          <p className="pr-5 mb-5 text-base text-gray-100 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          <div className="flex items-center">
            <a
              href="/"
              aria-label=""
              className="flex items-center font-semibold text-gray-100 transition-colors duration-200 hover:bg-deep-purple-900 bg-purple-600 py-3 px-5 rounded-lg"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}