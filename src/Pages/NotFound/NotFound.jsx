import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <section className="internal-page-wrapper">
                <div className="container">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-12 mt-5 pt-5">
                            <h1 className="font-weight-bold">
                                <div>404</div>
                                <span style={{fontSize:30}}>The page you are looking can't be found.<br/>
                                    Please go to the <Link to="/" style={{textDecoration: "none"}}>Home page</Link> and try again.
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFound
