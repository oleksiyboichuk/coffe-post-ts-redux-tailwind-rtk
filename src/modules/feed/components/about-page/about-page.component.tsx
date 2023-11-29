import { FC } from 'react';
import { Container } from '../../../../common/components/container/container.component';
import { TagList } from '../tag-list/tag-list.component';
import { motion } from 'framer-motion';

interface AboutPageProps {

}

const aboutAnimation = {
    hidden: {
        y: -2000,
        opacity: 0,
        rotate: 360,
    },
    visible: {
        y: 0,
        opacity: 1,
    }
}

export const AboutPage: FC<AboutPageProps> = () => {
    return (
        <>
            <div className="bg-yellow-200 pt-8 pb-4 mb-8">
                <div className='flex flex-col items-center space-x-2 justify-center'>
                    <motion.img src="https://api.realworld.io/images/demo-avatar.png" alt="" className='block object-cover w-20 h-20 rounded-full' variants={aboutAnimation} initial='hidden' animate='visible' transition={{ duration: 1 }} />
                    <motion.h1 className='text-conduit-200 text-article text-center font-light' variants={aboutAnimation} initial='hidden' animate='visible' transition={{ duration: 0.7 }} >About Author:</motion.h1>
                    <motion.p className='text-4xl font-semibold text-conduit-green' variants={aboutAnimation} initial='hidden' animate='visible' transition={{ duration: 0.5 }} >Boichuk Oleksiy</motion.p>
                </div>
            </div>
            <Container>
                <div className='flex-col lg:flex lg:flex-row justify-center'>
                    <div className='flex lg:hidden w-full order-2 justify-center pb-5'>
                        <motion.img src="https://scribemedia.com/wp-content/uploads/2015/09/eric-ries.png" alt="" className='h-full object-cover rounded-lg' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} />
                    </div>
                    <div className='w-full lg:w-2/3 px-2 order-1'>
                        <motion.p className='text-center lg:text-start px-6 lg:px-0 text-2xl mb-4 leading-10' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At consectetur mollitia suscipit dolore eos similique voluptate beatae itaque, optio consequuntur est vel recusandae expedita distinctio sit modi porro ab fugiat cupiditate quibusdam ea corrupti ipsam soluta perspiciatis! Error, soluta sint animi officia, ea nisi nobis atque, non voluptas sed ad. Quos praesentium consequuntur porro error explicabo, at et asperiores molestiae earum soluta impedit in voluptatem nesciunt natus voluptate maiores animi facere ullam. Quidem corporis facere voluptas aut eaque qui, eos sunt corrupti repellendus, iusto accusamus facilis libero quos numquam quaerat quia harum amet maxime ipsa, error sint. Dolore, impedit sit.</motion.p>
                        <TagList list={['author', 'dev', 'about']} />
                    </div>
                    <div className='hidden lg:flex w-1/3 order-2'>
                        <motion.img src="https://scribemedia.com/wp-content/uploads/2015/09/eric-ries.png" alt="" className='h-full object-cover rounded-lg' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} />
                    </div>
                </div>
            </Container>
        </>
    )
}
