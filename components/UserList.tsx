import React from 'react'
import { useSelector } from 'react-redux'
import { RootStateInterface } from '../core/interfaces/RootState'
import { SampleData } from '../core/interfaces'
import { Table } from 'reactstrap'
import { useTranslation } from 'next-i18next'

const UserList: React.FC = () => {
  const { users } = useSelector((state: RootStateInterface): SampleData => state.sampledata)
  const { t } = useTranslation('userlist')

  return (
    <div className="mt-3">
      {t('tabletitle')}
      <Table className="mt-3">
        <thead>
          <tr>
            <th>{t('#')}</th>
            <th>{t('username')}</th>
            <th>{t('email')}</th>
            <th>{t('address')}</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>{`${data.address.suite}, ${data.address.street}, ${data.address.city}`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default UserList
