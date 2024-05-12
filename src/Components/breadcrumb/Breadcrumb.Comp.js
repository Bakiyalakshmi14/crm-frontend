import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { LinkContainer } from 'react-router-bootstrap';

export const BreadCrumb = ({ page}) => {
    return(
        <div>
            <Breadcrumb>
                <LinkContainer to='/'>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </LinkContainer>
                <Breadcrumb.Item active>{page}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}