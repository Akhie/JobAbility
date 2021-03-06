import React from 'react'
import { Tabs } from 'antd';
import UserRegister from './UserRegister';
import NgoRegister from './NgoRegister';

const { TabPane } = Tabs;

export default function RegisterPage() {
    return (
        <div className='container'>
                <Tabs defaultActiveKey="1">
                    <TabPane
                    tab={
                        <span>
                            User SignUp
                        </span>
                    }
                    key="1"
                    >
                        <UserRegister />
                    </TabPane>

                    <TabPane
                    tab={
                        <span>
                            Register NGO
                        </span>
                    }
                    key="2"
                    >
                        <NgoRegister />
                    </TabPane>
                </Tabs>
        </div>
    )
}
