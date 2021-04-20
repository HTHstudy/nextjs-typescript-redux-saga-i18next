import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

let lang = 'ko-KR'

if (typeof localStorage !== 'undefined') {
  lang = localStorage.getItem('lang') || navigator.language
}

export const getLang = () => lang

export const I18next = () => {
  const [hover, setHover] = useState('')
  const router = useRouter()
  const changeLanguage = (lang: string) => {
    localStorage.setItem('lang', lang)
    router.push(router.pathname, router.pathname, { locale: lang })
  }
  const { i18n } = useTranslation()
  const { locale } = router
  useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])

  return (
    <div style={{ position: 'absolute', left: 70, color: '#999', fontSize: 10, zIndex: 2000 }}>
      <Container>
        <div className="d-flex flex-row">
          {[
            ['en-US', 'English'],
            ['ko-KR', 'Korean'],
          ].map((item) => (
            <div
              key={item[0]}
              style={hover === item[0] ? { color: 'white', cursor: 'pointer' } : {}}
              className="mx-2"
              onClick={() => changeLanguage(item[0])}
              onMouseOver={() => item[0] && setHover(item[0])}
              onMouseLeave={() => setHover('')}
            >
              {item[1]}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
