import React from 'react'

import Content from '@/components/template/fragments/Content'
import ContentHeader from '@/components/template/fragments/ContentHeader'
import DashBoardBox from '../components/common/dashBoardBox';

function Home (){
    return  (
        <div>
            <ContentHeader title="Dashboard" />
            <Content>
                <div className="row">
                    <div className="col-md-3">
                        <DashBoardBox title="Users" count={100} icon="users"/>
                    </div>
                    <div className="col-md-3">
                        <DashBoardBox title="Modules" count={50} severity="success" icon="desktop" />
                    </div>
                    <div className="col-md-3">
                        <DashBoardBox title="Roles" count={210} severity="warning" icon="user-circle"  />
                    </div>
                    <div className="col-md-3">
                        <DashBoardBox title="Authorities" count={6530} severity="danger" icon="lock" />
                    </div>
                </div>
            </Content>
        </div>
    )
}

export default Home;