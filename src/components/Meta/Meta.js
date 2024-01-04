import { Helmet } from "react-helmet";

const Meta = ({title}) => {
    return (
        <>
            {/* <div>Meta</div> */}

            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
        </>
    )
}

export default Meta;