import React from 'react'
import { usePagesData } from '../../hooks/usePagesData'
import { faqApi, faqFormApi } from '../../api/pagesApis'
import FaqForm from './faqForm'
import { ContentWrapper, PageWrapper, Paper } from '../../styles/components'

interface IFaqTitileProps {
    footer: string
    header: string
    image: string
    title: string
}

interface IFaqDataProps {
    id: string
    image: string
    name: string
    question: string
    answer: string
}

const Faq: React.FC = () => {
    const { data } = usePagesData<IFaqDataProps[]>(faqApi)
    const { data: title } = usePagesData<IFaqTitileProps[]>(faqFormApi)

    return (
        <PageWrapper>
            <ContentWrapper>
                <ContentWrapper>
                    {title?.map((item, i) => (
                        <Paper key={i}>
                            <h2>{item.title}</h2>
                        </Paper>
                    ))}
                </ContentWrapper>

                <ContentWrapper>
                    {data?.map((item, i) => (
                        <FaqForm key={i} item={item} />
                    ))}
                </ContentWrapper>
            </ContentWrapper>
        </PageWrapper>
    )
}

export default Faq
