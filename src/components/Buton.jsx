import PropTypes from 'prop-types'

const PrimaryButon = ({text}) => {
  return (
    <button className='bg-cream text-brown font-inter font-semibold px-4 py-3 lg:px-6 lg:py-4 text-sm md:text-base rounded-md hover:text-cream hover:border hover:border-brown hover:bg-black transition-all duration-700 ease-in-out'>
      {text}
    </button>
  )
}

PrimaryButon.propTypes = {
    text : PropTypes.string
}

export default PrimaryButon
