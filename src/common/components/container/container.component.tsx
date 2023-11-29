import React, { FC, ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
}

export const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className="container max-w-screen-xl mx-auto">{children}</div>
    )
}
