import React from 'react'
import Container from 'layouts/Container'
import 'scss/main.scss'
import propTypes from 'prop-types'
import classNames from 'classnames'
import "./Header.scss"
import { app } from '_config'

//icons
import { ReactComponent as LogoIcon } from '../../assets/img/logo.svg'
import { NavLink } from 'react-router-dom'

const menuLinks = [
  {
    title: 'Home',
    alias: '/',
  },
  {
    title: 'About',
    alias: '/about',
  },
]

const menuItems = menuLinks.map((item) => (
  <li key={item.alias}>
    <NavLink to={item.alias}><div className='ui-button isLink'>{item.title}</div></NavLink>
  </li>
))

const menuList = <ul className='HeaderList'>{menuItems}</ul>

function Header({ isLogo, isFixed, className, ...attrs }) {
  const classes = classNames(className, {
    isFixed,
  })
  // console.log('hello')
  return (
    <header className={classes} {...attrs}>
      <Container>
        <div className='Header flex justify-between py-2 mb-4'>
          <div className='Logo'>
            {isLogo && <LogoIcon />}
            <span>{app.name}</span>
          </div>
          {menuList}
        </div>
      </Container>
    </header>
  )
}

Header.prototype = {
  isLogo: propTypes.bool,
  isFixed: propTypes.bool,
  className: propTypes.string,
}
Header.defaultProps = {
  isLogo: false,
  isFixed: false,
  className: '',
}

export default Header
