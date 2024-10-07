import React from 'react'

export default function Project() {
    return (
        <div className="mt-[300px]">
            <div className="pl-[150px] flex justify-between flex-wrap">

                <h1 className="text-9xl grid">
                    <span>
                        Our
                    </span>
                    <span className="pl-[100px]">
                        Works
                    </span>

                </h1>
                <div className="w-[50%]">
                    <h1 className="text-7xl text-wrap flex flex-col pr-[50px]">
                        <span>
                            Transforming Ideas
                        </span>

                        <span>
                            into Impact
                        </span></h1>
                    <p className="text-balance">{`Let's be real, your online presence is your first impression. Why settle for average when your website, app, and digital marketing can captivate and inspire? Bold brands break boundaries, and those who dare to push their creative limits turn visitors into loyal fans. Elevate your brand with dynamic websites, intuitive apps, and strategic digital marketing that set you apart.
`}
                    </p>
                </div>
            </div>
        </div>
    )
}
