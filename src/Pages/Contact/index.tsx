import React from 'react'
import { usePagesData } from '../../hooks/usePagesData'
import { contactApi } from '../../api/pagesApis'
import { Paper, PageWrapper } from '../../styles/components'
import { IContactProps } from '../../Types/types'

const Contacts: React.FC = () => {
    const { data } = usePagesData<IContactProps[]>(contactApi)

    return (
        <PageWrapper>
            <Paper>
                {data?.map((item, i) => (
                    <div key={i}>
                        <h2>{item.title}</h2>
                        <p>{item.streetName}</p>
                        <p>{item.city}</p>
                        <p>{item.country}</p>
                        <p>{item.phone}</p>
                        <p>{item.email}</p>
                    </div>
                ))}
            </Paper>
        </PageWrapper>
    )
}

export default Contacts
