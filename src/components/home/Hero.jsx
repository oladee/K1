import PropTypes from 'prop-types'
import PrimaryButon from '../Buton'
import img1 from "../../assets/heroImg/img1.png"
import img2 from "../../assets/heroImg/img2.png"
import img4 from "../../assets/heroImg/img4.png"
import img5 from "../../assets/heroImg/img5.png"

const Hero = props => {
  return (
    <div className='px-5 md:px-10 '>
      <section className='flex flex-col gap-5 lg:flex-row items-center justify-center lg:gap-20 py-8 md:py-12 lg:pt-20 lg:pb-[61px]'>
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
      <section>
        <div>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
        </div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <img src={img4} alt="" />
            <img src={img5} alt="" />
        </div>
      </section>
    </div>
  )
}

Hero.propTypes = {

}

export default Hero
