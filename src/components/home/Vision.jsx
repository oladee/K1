import { Link } from "react-router-dom"
import ayinde from "../../assets/ayinde.png"
import arrow from "../../assets/arrow.png"

const Vision = () => {
  return (
    <div className="bg-black">
      <section  className='flex flex-col lg:flex-row justify-center px-5 md:px-10 gap-8 md:gap-12 lg:gap-32 py-14 md:py-20 lg:py-40 md:pb-[150px] lg:pb-[270px]'>
      <h1 className='text-[clamp(45px,4.44vw,64px)] font-SansationBold text-grey-50'>
      Our <br /> Vision
      </h1>
      <p className=' text-xl lg:text-[clamp(18px,1.66vw,24px)] lg:w-[42vw] text-grey-100 font-SansationLight lg:leading-9'>
      The vision of the foundation is to be a global leader in the preservation and <span className='text-brown'>promotion of Yoruba music,</span> talents, research, and instruments. Through its innovative programs and partnerships, the foundation aims to ensure the continued vitality and relevance of Yoruba music on the world stage.
      </p>
      </section>
      <section className="lg:flex justify-end relative px-5 md:px-28 lg:px-60">
        <div className="lg:absolute left-36 top-[-45px] bg-brown w-fit mb-6">
            <img src={ayinde} alt="" className="lg:w-[30.69vw]" />
        </div>
        <div className="py-8 lg:pt-16 lg:pb-12 px-5 md:px-11 lg:pl-14 lg:pr-8 bg-[#161616] md:w-[80vw] lg:w-[42.157vw] lg:max-w-[607px]">
            <h2 className="text-[clamp(24px,2.285vw,32px)] text-grey-300 pb-6 font-SansationBold">
            Olasunkanmi Ayinde <br /> Marshall
            <span className="text-brown">
            (K1 De Ultimate)
            </span>
            </h2>
            <p className="text-xl lg:text-[clamp(18px,1.66vw,24px)] text-grey-100 font-SansationLight pb-6 md:pb-9 lg:pb-12 ">
            My inspiration for this endeavor springs from a deep love for our musical heritage. Travelling the world, I&lsquo;ve seen how Yoruba music unites hearts and crosses boundaries.  But I also felt a responsibility to preserve and nurture this legacy. Thus, this foundation was born - a vision to celebrate our musical tapestry, empower talents, and foster cultur...
            </p>
            <Link className="text-grey-200 text-base font-SansationRegular flex items-center gap-1">
            read more
            <img src={arrow} alt="" />
            </Link>
        </div>
      </section>
    </div>
  )
}


export default Vision
