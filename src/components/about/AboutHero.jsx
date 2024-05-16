import king from "../../assets/about/king.png"
const AboutHero = () => {
  return (
    <div className=" pt-14 px-5 md:px-14 md:pt-20 lg:pt-[106px] lg:flex flex-col items-center ">
      <section className="flex flex-col lg:flex-row gap-10 lg:gap-16 pb-12 lg:pb-24">
        <h1 className="text-brown font-SansationBold text-[clamp(30px,2.77vw,40px)] leading-[52px]">
        I am King Wasiu Ayinde <br /> Marshal, and I extend a <br /> warm Yoruba greeting.
        </h1>
        <p className="text-white font-SansationLight text-xl lg:text-[clamp(18px,1.66vw,24px)] lg:leading-8 lg:w-[40.8vw]">
        My inspiration for this endeavor springs from a deep love for our musical heritage. Travelling the world, I've seen how Yoruba music unites hearts and crosses boundaries.  But I also felt a responsibility to preserve and nurture this legacy. Thus, this foundation was born - a vision to celebrate our musical tapestry, empower talents, and foster cultural understanding globally. Join me on this harmonious journey as we honor our past, celebrate our present, and shape our shared future
        </p>
      </section>
      <img src={king} alt="" className="lg:w-[52.7vw]" />
    </div>
  )
}

export default AboutHero
