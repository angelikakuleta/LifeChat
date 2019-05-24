import React from 'react';
import MenuViewMobile from './MenuMobile';
import MenuView from './MenuDesktop';
import '../styles/Menu.css'

export default class Menu extends React.Component {
  
    render() {
      const windowWidth = window.innerWidth;
  
      return (
        <section>
          {windowWidth < 1025 ?
            <MenuViewMobile /> :
            <MenuView />
          }
        </section>
      );
    }
  }