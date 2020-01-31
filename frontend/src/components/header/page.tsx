import * as React from "react";
import { PageHeader, Button, Descriptions } from "antd";

export default function Page() {
    return <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
            <Button key="3">Operation</Button>,
            <Button key="2">Operation</Button>,
            <Button key="1" type="primary">
                Primary
        </Button>,
        ]}
    >
        <Descriptions size="small" column={3}>
            <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
            <Descriptions.Item label="Association">
            </Descriptions.Item>
            <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
            <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
            <Descriptions.Item label="Remarks">
                Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
        </Descriptions>
    </PageHeader>
}