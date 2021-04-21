import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Nav, NavItem } from 'reactstrap'
import { useTranslation } from 'next-i18next'
import { I18next } from '../I18next'

const NAV_CLASS_NAME = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top'

const Header = () => {
  const router = useRouter()
  const { t } = useTranslation('header')

  return (
    <header>
      <style jsx>
        {`
          a {
            color: white;
          }
        `}
      </style>
      <Nav className={router.pathname === '/' ? NAV_CLASS_NAME : NAV_CLASS_NAME + 'navbar-shrink'}>
        <I18next />
        <NavItem>
          <Link href="/">
            <a className="navbar-brand">{t('home')}</a>
          </Link>
        </NavItem>
        <NavItem className="ml-auto">
          <Link href="/auth/signin">
            <a className="nav-link">{t('signin')}</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/counter">
            <a className="nav-link">{t('counter')}</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/blog">
            <a className="nav-link">테스트</a>
          </Link>
        </NavItem>
      </Nav>
    </header>
  )
}

export default Header
