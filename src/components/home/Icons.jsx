import { images } from "../../constants"

const Icons = () => {
  return (
    <div>
      <section  className='flex flex-col lg:flex-row justify-center px-5 md:px-10 gap-8 md:gap-12 lg:gap-32 py-14 md:py-20 lg:pt-[179px] md:pb-[100px] lg:pb-[149px]'>
      <h1 className='text-[clamp(45px,4.44vw,64px)] font-SansationBold text-grey-50'>
      Yoruba <br /> Music Icons
      </h1>
      <p className=' text-xl lg:text-[clamp(18px,1.66vw,24px)] lg:leading-9 lg:w-[43vw] text-grey-100 font-SansationLight'>
      Explore the rich tapestry of Yoruba music through the groundbreaking contributions of these legendary artists. From traditional drummers to modern-day innovators, their influence resonates across generations, shaping the vibrant landscape of Yoruba musical heritage.
      </p>
      </section>
      <section className=" px-5 md:px-10 lg:px-20 grid gap-3 lg:gap-6 grid-cols-2 md:grid-cols-3">
        {
            images.map(item => (
                <img key={item} src={item}/>
            ))
        }
      </section>
    </div>
  )
}

export default Icons
