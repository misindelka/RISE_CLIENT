import React from 'react'
import { usePagesData } from '../../hooks/usePagesData'
import { galleryApi } from '../../api/pagesApis'
import { ContentWrapper, Paper, PageWrapper } from '../../styles/components'

const Gallery: React.FC = () => {
    const { data } = usePagesData<any[]>(galleryApi)

    return (
        <PageWrapper>
            <Paper>
                <ContentWrapper>HERE WILL COMES GALLERY</ContentWrapper>
            </Paper>
        </PageWrapper>
    )
}
export default Gallery
