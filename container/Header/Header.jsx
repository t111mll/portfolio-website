import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import './Header.scss';

const Header = () => (
  <div className="app__header">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 2.5}}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp">
          <div>
            <p className="p-text">Hello, I'm</p>
            <h1 className="head-text"></h1>
          </div>
        </div>
        <motion.div 
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 3}}
        >
          <div className="tag-cmp">
            <p className="p-text"></p>
          </div>
          <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 3.5}}
          >
            <div className="tag-cmp">
              <p className="p-text"></p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
