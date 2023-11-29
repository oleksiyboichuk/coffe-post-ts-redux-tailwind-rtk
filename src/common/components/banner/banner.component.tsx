import React, { FC } from 'react'
import { Container } from "../container/container.component";
import { motion } from 'framer-motion';


interface BannerProps {
}

export const Banner: FC<BannerProps> = () => {
    const pVariants = {
        hidden: {
            x: -2000,
            opacity: 0
        },
        hidden2: {
            x: 2000,
            opacity: 0
        },
        visible: {
            x: 0, opacity: 1
        }
    }
    return (
        <div className="bg-conduit-300 shadow-banner text-white p-8 mb-8">
            <Container>
                <motion.h1 className="text-4xl font-titillium drop-shadow-logo text-center lg:text-logo pb-2 leading-tight" initial={pVariants.hidden} animate={pVariants.visible} transition={{ duration: 1 }} variants={pVariants}>We are not an analogue of <span className='text-conduit-200'>Reddit</span><div className='text-yellow-200'>We are different!</div></motion.h1>
                <motion.p className="text-xl text-center lg:text-2xl font-light text-white" initial={pVariants.hidden2} animate={pVariants.visible} transition={{ duration: 1 }} variants={pVariants}>Are you thinking about something? - Write about it!</motion.p>
            </Container>
        </div>
    )
}
