import React from 'react'

import Content from '../components/template/fragments/Content'
import ContentHeader from '../components/template/fragments/ContentHeader'

export default props => (
    <div>
        <ContentHeader title="Home Page" small="Welcome" />
        <Content>
            hello dear
        </Content>
    </div>
)