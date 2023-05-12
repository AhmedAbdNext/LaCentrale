import React from 'react'

const Layout = (props) => {
    return (
        <div className="container mx-auto">
            <div className=" x-auto py-8 px-4 sm:px-6 w-full max-w-8xl bg-transparen p-4 rounded-lg shadow-md">
                <div className="mx-auto sm:max-w-2xl lg:max-w-none bg">
                    <div className="mt-3">
                        {
                            props.children
                        }
                    </div>
                </div>
            </div>
        </div>
    )
 }

export default Layout;