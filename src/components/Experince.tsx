import ProffessionalExperince from './ProffessionalExperince'
import Projects from './Projects'
function Experince() {
  return (
    <>
      <section className='w-full px-4 flex flex-col gap-10 justify-center items-center'>
        <ProffessionalExperince />
        <Projects />
      </section>
    </>
  )
}

export default Experince