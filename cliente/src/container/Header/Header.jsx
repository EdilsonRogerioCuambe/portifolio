import React from 'react';
import "./Header.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [0, -100, 0], opacity: [0, 1] }}
        transition={{ duration: 3 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div
              style={{
                marginLeft: 20,
              }}
            >
              <p className='p-text'>Olá, Eu sou</p>
              <h1 className='head-text'>Edilson</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Desenvolvedor Web Full Stack</p>
            <p className='p-text'>Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 3, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.perfil} alt="perfil" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt='circle'
          className='overlay__circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, "home");