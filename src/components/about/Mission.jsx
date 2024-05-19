
const Mission = () => {
  return (
    <div>
      <div className="bg-cardColor px-5 py-9 md:py-14 lg:py-36 text-white flex flex-col gap-6 md:flex-row justify-center md:gap-16 lg:gap-40">
      <h2 className=" font-SansationLight text-xl lg:text-[clamp(18px,1.66vw,24px)] lg:leading-8">
      Our Mission
      </h2>
      <div className="flex flex-col gap-6 lg:gap-10">
        <h1 className="font-SansationBold text-2xl md:text-[clamp(30px,2.77vw,40px)] md:leading-9 lg:leading-[52px] md:w-[70vw] lg:w-[53vw]">
        Preserving the rich legacy of yoruba music, our non-profit music foundation is dedicated to the preservation, promotion, and investment in the vibrant tapestry of Yoruba music, talents, research, and instruments
        </h1>
        <p className="lg:w-[47.9vw] md:w-[70vw] text-base lg:text-[clamp(18px,1.66vw,24px)]">
        Through dynamic collaborations, we aspire to not only honor the rich heritage of Yoruba music but also to <span className="text-brown">empower emerging artists</span>, foster cultural exchange, and deepen global understanding of our cultural roots.
        </p>
      </div>
    </div>
    <section  className='flex flex-col lg:flex-row justify-center px-5 md:px-10 gap-8 md:gap-12 lg:gap-32 py-10 md:py-16 lg:py-36'>
      <h1 className='text-[clamp(45px,4.44vw,64px)] font-SansationBold text-grey-50'>
      Our <br /> Vision
      </h1>
      <p className=' text-xl lg:text-[clamp(18px,1.66vw,24px)] lg:w-[42vw] text-grey-100 font-SansationLight lg:leading-9'>
      The vision of the foundation is to be a global leader in the preservation and <span className='text-brown'>promotion of Yoruba music,</span> talents, research, and instruments. Through its innovative programs and partnerships, the foundation aims to ensure the continued vitality and relevance of Yoruba music on the world stage.
      </p>
    </section>
    </div>
  ) 
}

export default Mission
