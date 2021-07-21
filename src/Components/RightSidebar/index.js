import { Container } from '@material-ui/core'
import React from 'react'
import Holdings from '../../hoc/Holdings/Index'
import IndexChart from '../../hoc/IndexChart'

const RightSidebar = () => {
    return (
        <Container>
            <IndexChart/>
            <Holdings/>
        </Container>
    )
}

export default RightSidebar
