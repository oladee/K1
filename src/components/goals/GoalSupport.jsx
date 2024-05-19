import { Card2 } from '../Card'
import { support } from '../../constants'

const GoalSupport = () => {
  return (
    <div className='px-5 md:px-10 lg:px-20 py-20 md:py-40 lg:py-[213px]'>
      <h2 className='text-grey-100 text-center font-SansationBold text-3xl md:text-5xl lg:text-[clamp(45px,5.55vw,80px)] pb-10 md:pb-14 lg:pb-20'>
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
  )
}

export default GoalSupport
