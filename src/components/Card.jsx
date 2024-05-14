import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import arrow from "../assets/arrow.png"


const Card = ({logo, heading, body, cta}) => {
  return (
    <div className={`bg-cardColor rounded-md p-10 py-14 lg:pl-14 lg:w-[28.5vw]`}>
        <img src={logo} alt="" className='pb-7 lg:pb-11' />
        <h2 className="text-[clamp(24px,2.285vw,32px)] text-grey-100 pb-3 lg:pb-6 font-SansationBold text-balance w-[18vw]">
            {heading}
        </h2>
        <p className="text-xl lg:text-[clamp(18px,1.6vw,24px)] text-grey-300 font-SansationLight pb-6 md:pb-[40px] lg:pb-12 text-balance ">
            {body}
        </p>
        <Link className="text-grey-200 text-base font-SansationRegular flex items-center gap-1">
            {cta || 'Read more'}
            <img src={arrow} alt="" />
        </Link>
      
    </div>
  )
}

Card.propTypes = {

    logo : PropTypes.string,
    heading : PropTypes.string,
    body : PropTypes.string,
    cta : PropTypes.string,
}

export default Card

export const Card2 = ({body, cta, logo})=> {
  return (<div className='bg-cardColor rounded-md p-10 py-14 lg:pl-14 '>
        <img src={logo} alt="" className='pb-7 lg:pb-11' />
        <p className="text-xl lg:text-[clamp(18px,1.66vw,24px)] text-grey-300 font-SansationRegular pb-6 md:pb-[40px] lg:pb-12 text-balance">
            {body}
        </p>
        <Link className="text-grey-200 text-base font-SansationRegular flex items-center gap-1">
            {cta || 'Read more'}
            <img src={arrow} alt="" />
        </Link>
  </div>)
}

Card2.propTypes = {

  logo : PropTypes.string,
  body : PropTypes.string,
  cta : PropTypes.string,
}
