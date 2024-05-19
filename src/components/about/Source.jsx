import { source, support } from "../../constants"
import checkbrown from "../../assets/checkG.svg"
import { Card2 } from "../Card"

const Source = () => {
  return (
    <section>
        <div className="bg-black px-5 md:px-20 lg:px-52 py-16 md:py-24 lg:py-[151px] flex justify-center">
      <section className="lg:w-[75.69vw]">
        <h1 className="text-brown font-SansationBold text-2xl md:text-3xl lg:text-[clamp(30px,3.33vw,48px)] pb-16 md:pb-20 lg:pb-[107px]">
        Source of Fundraising
        </h1>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-x-44 lg:gap-y-28">
            {
                source.map(item => (
                    <div key={item.heading} className="">
                        <h2 className="flex items-center gap-3 text-white text-[clamp(24px,2.285vw,32px)] pb-4 lg:pb-6">
                            {item.heading}
                            <img src={checkbrown} alt="" />
                        </h2>
                        <p className="text-grey-200 font-SansationLight text-lg text-[clamp(18px,1.66vw,24px)] text-balance">
                            {item.text}
                        </p>
                    </div>
                ))
            }
        </div>
      </section>
    </div>
    <div className='px-5 md:px-10 lg:px-20 pb-32 md:pb-48 lg:pb-[310px]'>
      <h2 className='text-grey-100 text-center font-SansationBold text-3xl md:text-5xl text-[clamp(45px,5.55vw,80px)] pb-10 md:pb-14 lg:pb-20'>
      Your support <span className='text-brown'>matters</span> 
      </h2>
      <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start'>
        {
          support.map(item => (
            <Card2 key={item.cta} logo={item.logo} body={item.body} cta={item.cta} height={300} />
          ))
        }
      </section>
    </div>
    </section>
  )
}

export default Source
