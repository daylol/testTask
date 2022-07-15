
import { PageHeader, Divider, Button } from 'antd';

export const Header = ({ showModal }) => {
    return (
        <header>
            <PageHeader
                title='Custom dashboard'
            />

            <Divider />
            <Button type="primary" onClick={showModal}>
                Create order
            </Button>
        </header>
    )
}
