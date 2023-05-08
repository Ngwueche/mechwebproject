import React from 'react'
import weldingImg from "./img/site_images/pipeline welding.avif"
import metalHardeningImg from "./img/site_images/metal treatment.png"
import facility from "./img/site_images/facility installation.jpeg"
import heavyMachines from "./img/site_images/heavyduty machines.jpg"
import spareparts from "./img/site_images/sparepart.jpg"
import {ServicesPageCard, ServicesPageCard2 } from './ServicesPageCard'

export default function OurServies() {
  return (
    <section>
      <div>
        <h2 className="text-center my-8 px-4 font-bold text-2xl md:text-4xl">We Offer The Following Services</h2>
        <div className=" flex-col mx-auto text-start ">
          <ServicesPageCard
            title="Welding"
            body=
            "Our team of skilled welders is equipped with the latest tools and techniques to provide top-quality welding services for a wide range of industries. From MIG and TIG welding to stick welding and more, we have the expertise to handle any project with precision and efficiency. Our welders are certified and trained to ensure the highest level of quality and safety in every job we undertake. We take pride in our commitment to customer satisfaction and strive to build long-term relationships with our clients Our services are tailored to meet your unique needs, and we offer competitive pricing to fit your budget."
            img={weldingImg}
            />
            <ServicesPageCard2
              title= "Facility Installation and Maintenance"
              body="Our team of experts is trained to handle all aspects of factory installation and maintenance. We work closely with our clients to understand their specific needs and requirements, ensuring that our services are tailored to meet their unique needs.
              We have specialize in installation of various equipment and systems such as production lines, conveyor systems, and industrial machinery.We also offer a range of factory maintenance services, including regular maintenance checks, repairs, and upgrades. Our team of experienced technicians will work closely with you to ensure that your factory is running at optimal levels, minimizing downtime and maximizing productivity
              "
              img={facility}
            />
            <ServicesPageCard
              title="Metal Treatment"
              body="
                We engineers, we understand the need for durable materials for jobs and consequences of using a poor materials. We also among the few companies in Enugu that offers this solution. Our metal hardening services are designed to increase the durability and strength of metal components, making them more resistant to wear and tear. We use a range of hardening techniques, including induction hardening, flame hardening, and quenching, to achieve the desired results."
              img={metalHardeningImg}
            />
            <ServicesPageCard2
              title= "Spareparts Supply"
              body=" We understand the importance of durable spareparts in the field of engineering and machine maintenance.  That's why we've curated a massive selection of products, so you can find what you need when you need it. But we're more than just a supplier - we're a team of experts who are passionate about what we do. You can leverage our experience to find the right part, answer any questions you might have, and ensure that your experience with us is worthwhile. So what are you waiting for? Contact us Today
                "
              img={spareparts}
            />
            <ServicesPageCard
              title= "Machine Leasing and Machine Component Fabrication"
              body="
              At Mech-Weld, we lease Machines to allows businesses to access the latest machinery and equipment without having to make a large capital investment upfront. This service is especially useful for businesses that have short-term or seasonal projects, as well as those that want to test out equipment before making a purchase.
              Our team of experts can help you select the right machinery for your needs, and we offer flexible leasing options that can be tailored to your specific requirements. We can also provide maintenance and component fabrication services and support for leased machines, ensuring that they operate at optimal levels throughout the leasing period.
              "
              img={heavyMachines}
            />
        </div>
      </div>
    </section>
  )
}
