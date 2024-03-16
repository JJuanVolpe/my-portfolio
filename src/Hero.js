import React from 'react';
import habilities from './technologies.js';

import { useGlobalContext } from './context.js';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
          Brief portfolio  <br />
          developed myself
          </h1>
          <p>
          I currently study and code several projects to learn <br />
          and improve my skills with different technologies.<br />
          I created this website to learn a little better React and to create a resume while looking for a job.
          </p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          {habilities.map((item, index) => {
            const { porcent, tech, icon } = item
            return (
              <article key={index} >
                <div className='sidebar-sublinks'>
                  <img src={icon} key={index} className='nav-logo' alt={tech} />

                  <p>Percentage of hability  : {porcent}%</p>
                </div>
              </article>
            )
          })}
        </article>
      </div>
    </section>
  );
};

export default Hero;
