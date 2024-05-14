import chart from "../../assets/path/chart.png"
import {path, support} from "../../constants"
import Card, { Card2 } from '../Card'

const Path = () => {
  return (
    <section>
      <div className='grid lg:grid-cols-3 lg:gap-6 items-start px-5 md:px-10 lg:px-20 py-28 lg:py-48'>
        <section className='flex flex-col items-center gap-6 pb-6 lg:pb-0'>
          <div className=''>
            <img src={chart} alt="chart" />
          </div>
          <div>
            {path.filter((item,idx)=> idx < 1).map(item =>(
              <Card key={item.heading} logo={item.logo} body={item.body} heading={item.heading} height={530}/>
            ))}
          </div>
        </section>
        <section className='grid gap-6 pb-6 lg:pb-0'>
        {path.filter((item,idx)=> idx > 0 && idx < 3).map(item =>(
              <Card key={item.heading} logo={item.logo} body={item.body} heading={item.heading} height={530}/>
            ))}
        </section>
        <section className='grid gap-6 lg:pb-0'>
        {path.filter((item,idx)=> idx > 2).map(item =>(
              <Card key={item.heading} logo={item.logo} body={item.body} heading={item.heading} height={530}/>
            ))}
        </section>
      </div>
    <div className='px-5 md:px-10 lg:px-20'>
      <h2 className='text-grey-100 text-center font-SansationBold text-3xl md:text-5xl text-[clamp(45px,5.55vw,80px)] pb-10 md:pb-14 lg:pb-20'>
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
  </section>
  )
}
export default Path
