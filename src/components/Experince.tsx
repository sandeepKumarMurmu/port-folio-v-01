import ProffessionalExperince from './ProffessionalExperince'
import Projects from './Projects'
function Experince() {
  return (
    <>
      <section className='w-full max-w-[1440px] px-4 flex flex-col gap-10 justify-center items-center'>
        <ProffessionalExperince />
        <Projects />
      </section>
    </>
  )
}

export default Experince