import PrimaryButon from '../Buton'
import img1 from "../../assets/heroImg/img1.png"
import img2 from "../../assets/heroImg/img2.png"
import img3 from "../../assets/heroImg/tea.gif"
import img4 from "../../assets/heroImg/img4.png"
import img5 from "../../assets/heroImg/img5.png"
import design from "../../assets/heroImg/design.png"

const Hero = ()=> {
  return (
    <div className='px-5 md:px-10 overflow-y-hidden'>
      <section className='flex flex-col gap-5 lg:flex-row items-start lg:items-center justify-center lg:gap-20 py-8 md:py-12 lg:pt-20 lg:pb-[61px]'>
        <div>
        <h1 className=' text-grey-300 text-xl md:text-2xl lg:text-[clamp(24px,2.08vw,30px)] pb-4 md:pb-8'>
        Welcome to K1 De Ultimate Music Foundation
        </h1>

        <h4 className='text-brown font-SansationBold text-2xl md:text-3xl lg:text-[clamp(45px,3.95vw,57px)] lg:leading-[75px]'>
        Preserving the Rich <br /> Legacy of Yoruba Music
        </h4>
        </div>
        <PrimaryButon text="Get Involved"/>
      </section>
      <section className='md:grid md:grid-cols-4 md:gap-7 lg:px-[clamp(150px,13.611vw,196px)] bg-black'>
        <div className='hidden md:col-start-1 md:col-end-2 md:grid  '>
            <img src={img1} alt="" className='lg:w-[17.98vw] md:h-[18.98vw] object-cover rounded-md'  />
            <img src={img2} alt="" className='lg:w-[17.98vw] md:h-[18.98vw] object-cover rounded-md' />
        </div>
        <div className='md:col-start-2 md:col-end-4 relative' id='nity'>
            <img src={img3} alt="alty" className='w-full lg:w-[36.7vw]' />
            <img src={design} alt="" className='w-24 lg:w-fit left-[-20px] absolute bottom-0 lg:left-[-120px]' />
        </div>
        <div className='md:col-start-4 md:col-end-5 hidden md:grid '>
            <img src={img4} alt="" className='lg:w-[17.98vw] md:h-[18.98vw] object-cover rounded-md hidden md:block' />
            <img src={img5} alt="" className='lg:w-[17.98vw] md:h-[18.98vw] object-cover rounded-md hidden md:block'/>
        </div>
      </section>
    </div>
  )
}

export default Hero
