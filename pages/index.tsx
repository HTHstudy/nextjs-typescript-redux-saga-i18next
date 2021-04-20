import React from 'react'
import Link from 'next/link'
import { GetStaticProps, NextPage } from 'next'
import { Container } from 'reactstrap'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

import { wrapper } from '../core/redux/store'
import Layout from '../components/Layouts/Layout'
import UserList from '../components/UserList'

const Home: NextPage = () => {
  const { t } = useTranslation('home')

  return (
    <Layout title={t('home')}>
      <Container className="my-5 py-5">
        <h1>{t('hello')}</h1>
        <p>
          <Link href="/">
            <a>{t('about')}</a>
          </Link>
        </p>
        <UserList />
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(async ({ store, locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'header', 'userlist'])),
    },
  }
})

export default Home
