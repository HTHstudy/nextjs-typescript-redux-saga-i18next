import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Container, Form, Row, Col, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap'
import Layout from '../../components/Layouts/Layout'
import { wrapper } from '../../core/redux/store'

interface InvalidState {
  username: boolean
  password: boolean
  activate: boolean
}

const Signin = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [invalid, setInvalid] = useState<InvalidState>({
    username: false,
    password: false,
    activate: false,
  })
  const router = useRouter()
  const { t } = useTranslation('signin')

  const submit = async (e: React.FormEvent<HTMLFormElement>, err: string = 'no user') => {
    e.stopPropagation()
    e.preventDefault()

    // 추후 validation 비동기 함수 로직에 추가
    if (err === 'no user') {
      setInvalid({
        password: false,
        username: true,
        activate: false,
      })
    } else if (err === 'not activate') {
      setInvalid({
        password: false,
        username: true,
        activate: true,
      })
    } else if (err === 'password wrong') {
      setInvalid({
        password: true,
        username: false,
        activate: false,
      })
    } else router.push('/')
  }

  return (
    <Layout title={t('signin')}>
      <Container className="my-5 py-5" style={{ paddingTop: 30 }}>
        <div className="my-5 d-flex justify-content-center">
          <Form className="w-100" style={{ maxWidth: 400 }} onSubmit={(e) => submit(e)}>
            <Row form>
              <Col>
                <h2>{t('signin')}</h2>
                <FormGroup>
                  <Label>{t('username')}</Label>
                  <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} invalid={invalid.username} />
                  {invalid.activate ? <FormFeedback>{t('notactivate')}</FormFeedback> : <FormFeedback>{t('notexist')}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                  <Label>{t('password')}</Label>
                  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} invalid={invalid.password} />
                  <FormFeedback>{t('wrongpassword')}</FormFeedback>
                </FormGroup>
                <div className="text-center">
                  <Link href="/auth/signup">
                    <Button className="mx-2" color="secondary">
                      {t('signup')}
                    </Button>
                  </Link>
                  <Button className="mx-2" color="primary">
                    {t('signin')}
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Link href="/auth/reset">
                  <Button className="btn-sm my-2" color="light">
                    {t('forgotpassword')}
                  </Button>
                </Link>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </Layout>
  )
}

export default Signin

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale

  return {
    props: {
      ...(await serverSideTranslations(locale, ['signin', 'header'])),
    },
  }
}
