import Image from 'next/image'
import React from 'react'
import profileImage from "../../../public/profile-image.jpeg"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <Image src={profileImage} alt="The Cyber Signals" 
            className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center'
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
            />
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Securing Tomorrow's Digital Frontier
            </h2>
            <p className='font-medium mt-4 text-base leading-relaxed'>
            At The Cyber Signals, we envision a world where digital transformation accelerates without compromise to security. Our mission is to empower organizations with cutting-edge cybersecurity intelligence, strategic guidance, and innovative defense mechanisms that transform cyber risks into competitive advantages.
            </p>
            <p className='font-medium mt-3 text-base leading-relaxed'>
            We partner with CEOs to align security investments with business objectives, guide CIOs through secure digital transformation journeys, enable CTOs to build resilient architectures, and equip CISOs with actionable threat intelligence and governance frameworks. Through our comprehensive approach—spanning AI-driven threat detection, quantum-safe cryptography, zero-trust implementations, and executive-level cyber risk management—we're not just defending against today's threats, but architecting tomorrow's secure digital ecosystem.
            </p>
            <p className='font-medium mt-3 text-base leading-relaxed'>
            Our management consulting practice specializes in AI governance and security, working directly with C-suite executives to establish responsible AI frameworks that balance innovation with risk management. We help organizations secure their AI workloads through comprehensive model protection strategies, implement enterprise-wide responsible AI policies that ensure ethical deployment, and combat the growing threat of shadow AI by establishing visibility and control mechanisms across all AI initiatives. From boardroom strategy sessions to hands-on implementation, we transform AI from a potential liability into a secure competitive advantage.
            </p>
            <p className='font-medium mt-3 text-base leading-relaxed text-accent dark:text-accentDark'>
            Together, we're making the digital world a safer place, one strategic decision at a time.
            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection