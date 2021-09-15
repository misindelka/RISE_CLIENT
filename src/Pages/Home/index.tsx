import React from 'react'
import { usePagesData } from '../../hooks/usePagesData'
import { ContentWrapper, Paper, PageWrapper } from '../../styles/components'
import { homeApi } from '../../api/pagesApis'

interface IHomeProps {
    content: string
    name: string
    title: string
}

const Home: React.FC = () => {
    const { data } = usePagesData<IHomeProps[]>(homeApi)

    return (
        <PageWrapper>
            {data.map((item, i) => (
                <Paper key={i}>
                    <ContentWrapper>
                        ≠<h2>{item.title}</h2>
                    </ContentWrapper>
                    <ContentWrapper>
                        <p>{item.content}</p>
                    </ContentWrapper>
                </Paper>
            ))}
        </PageWrapper>
    )
}
export default Home
