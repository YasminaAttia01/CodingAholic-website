/* eslint-disable no-unused-vars */
import CTA  from "../components/CTA";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { teamMembers, values,approach } from "/src/constants/index.js";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Get to know us{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Better
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          <span className="text-black">CODINGAHOLIC,</span> <br />
          is a software development firm that primarily operates in the
          outsourcing sector. Founded in October 2022 in Tunisia, the company is
          focused on entering the European development market by establishing
          processes aimed at continuous market growth.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">In what we believe</h3>
      </div>
      <div className="bg-white py-20 rounded-lg">
        <div className="flex flex-col lg:flex-row justify-center gap-10 mx-auto">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="min-w-fit flex flex-col items-center gap-4 bg-[#c2d6f5] rounded-xl py-8 transition-transform duration-300 hover:scale-105"
                >
                  <img src={value.icon} alt={value.label} className="w-20" />
                  <h3 className="blue-gradient_text font-bold text-lg">
                    {value.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <h3 className="subhead-text">Our Winning Formula</h3>
      </div>
      <div className="mt-3 flex flex-col gap-3 text-slate-500">
        <p> At
          <span className="text-black"> CODINGAHOLIC,</span> <br />
   We believe in a client-centered approach that combines technical expertise with adaptability to deliver tailored solutions.
        </p>
      </div>
      <div className="mt-12 flex">
  <VerticalTimeline>
    {approach.map((step, index) => (
      <VerticalTimelineElement
        key={step.title}
        date={step.date}
        iconStyle={{ background: step.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={step.icon}
              alt={step.title}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
        contentStyle={{
          borderBottom: "8px",
          borderStyle: "solid",
          borderBottomColor: step.iconBg,
          boxShadow: "none",
        }}
      >
        <div>
          <h3 className="text-black text-xl font-poppins font-semibold">
            {step.title}
          </h3>
         
        </div>

        <ul className="my-5 list-disc ml-5 space-y-2">
          {step.points.map((point, index) => (
            <li
              key={`step-point-${index}`}
              className="text-black-500/50 font-normal pl-1 text-sm"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
</div>



      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Meet the Brains.</h3>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center border"
          >
            <div className="flex justify-center mb-4">
              <img
                src={member.imageUrl}
                alt={member.name}
                width={200}
                height={250}
                className="rounded-lg object-cover"
              />
            </div>

            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{member.role}</p>
            <p className="text-gray-600 text-sm mb-4">{member.description}</p>

            <div className="flex justify-center space-x-4">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#336cc1] transition-colors duration-300"
              >
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a
                href={`mailto:${member.email}`}
                className="text-gray-700 hover:text-[#336cc1] transition-colors duration-300"
              >
                <i className="fas fa-envelope fa-lg"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-200 ' />

      <CTA />
    </section>
  );
};

export default About;
