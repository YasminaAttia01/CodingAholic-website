/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";



const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Welcome to
        <span className='font-semibold mx-2 text-white'>CodingAholic👋 ,</span>
   
        <br />
        Digitalising Tomorrow Today .
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Find out who we are and what drives us <br /> visit our About Us page.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
        Explore our innovative solutions. <br /> Curious about the impact?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
        Explore Projects
          
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      Have a project in mind?<br/>  Let's bring your vision to life!
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
      Contact Us
        
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;