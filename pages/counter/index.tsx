import React from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'reactstrap'
import { useTranslation } from 'next-i18next'
import { END } from 'redux-saga'

import { loadData } from '../../core/redux/actions/sampledata'
import { wrapper } from '../../core/redux/store'
import { RootStateInterface } from '../../core/interfaces/RootState'
import { CounterState } from '../../core/interfaces'
import { counterIncrement, counterDecrement, counterReset } from '../../core/redux/actions/counter'
import Layout from '../../components/Layouts/Layout'
import UserList from '../../components/UserList'

const Counter = () => {
  const { t } = useTranslation('counter')
  const { count } = useSelector((state: RootStateInterface): CounterState => state.counter)
  const dispatch = useDispatch()

  return (
    <Layout title={t('counter')}>
      <Container className="my-5 py-5">
        <h3>
          {t('currentvalue')}:{count}
        </h3>
        <div className="mt-3">
          <button className="mr-3 btn btn-outline-success" onClick={() => dispatch(counterIncrement())}>
            +
          </button>
          <button className="mr-3 btn btn-outline-danger" onClick={() => dispatch(counterDecrement())}>
            -
          </button>
          <button className="mr-3 btn btn-info" onClick={() => dispatch(counterReset())}>
            reset
          </button>
        </div>

        <UserList />
      </Container>
    </Layout>
  )
}

export default Counter

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(async ({ store, locale }) => {
  if (!store.getState().sampledata) {
    store.dispatch(loadData())
    store.dispatch(END)
  }
  await store.sagaTask?.toPromise()
  return {
    props: {
      ...(await serverSideTranslations(locale, ['counter', 'header', 'userlist'])),
    },
  }
})
