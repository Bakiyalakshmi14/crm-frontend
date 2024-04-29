import Breadcrumb from 'react-bootstrap/Breadcrumb';

export const BreadCrumb = ({ page}) => {
    return(
        <div>
            <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>{page}</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}