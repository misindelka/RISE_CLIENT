import React from 'react'
import { ContentWrapper, Paper, PageWrapper } from '../../styles/components'
import { aboutApi } from '../../api/pagesApis'
import { usePagesData } from '../../hooks/usePagesData'

const About: React.FC = () => {
    const { data } = usePagesData(aboutApi)

    return (
        <>
            <PageWrapper>
                {data.map(({ head, about }, index) => (
                    <Paper key={index}>
                        <ContentWrapper>
                            <h2>{head}</h2>
                        </ContentWrapper>
                        <ContentWrapper>
                            <p>{about}</p>
                        </ContentWrapper>
                    </Paper>
                ))}
            </PageWrapper>
        </>
    )
}

export default About
