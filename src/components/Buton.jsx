import PropTypes from 'prop-types'

const PrimaryButon = ({text}) => {
  return (
    <button className='bg-cream text-brown px-4 py-3 lg:px-6 lg:py-4 text-sm md:text-base rounded-md'>
      {text}
    </button>
  )
}

PrimaryButon.propTypes = {
    text : PropTypes.string
}

export default PrimaryButon
