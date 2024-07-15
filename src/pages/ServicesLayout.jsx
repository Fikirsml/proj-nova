import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
} from '@tremor/react';
import AccMenu from "../components/AccMenu"

const ServicesLayout = () => {
  return (

    <>
    
    <div  className='flex flex-col justify-center items-center h-full w-full'>
    <h4 className='w-60 mb-2 text-3xl tracking-wide text-orange-500 bg-white/10 backdrop-blur-lg rounded-full px-2 py-1 text-center'>Requests</h4>
      {/* <AccordionList className='w-full'>
    <Accordion>
      <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">Accordion 1</AccordionHeader>
      <AccordionBody className="leading-6 text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        tempor lorem non est congue blandit. Praesent non lorem sodales,
        suscipit est sed, hendrerit dolor.
      </AccordionBody>
    </Accordion>
    <Accordion>
      <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">Accordion 2</AccordionHeader>
      <AccordionBody className="leading-6 text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        tempor lorem non est congue blandit. Praesent non lorem sodales,
        suscipit est sed, hendrerit dolor.
      </AccordionBody>
    </Accordion>
    <Accordion>
      <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">Accordion 3</AccordionHeader>
      <AccordionBody className="leading-6 text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        tempor lorem non est congue blandit. Praesent non lorem sodales,
        suscipit est sed, hendrerit dolor.
      </AccordionBody>
    </Accordion>
  </AccordionList>
    <AccMenu/> */}

    <div className="rounded-lg w-2/3 text-left">
      <AccMenu title="something" rank="(Free)" />
      <AccMenu title="something" rank="(popular)" />
      <AccMenu title="something" rank="(beta)" />
      <AccMenu title="something" rank="(pro)" />

      </div>

  </div>
  </>
  )
}

export default ServicesLayout