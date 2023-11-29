import { FC } from 'react'
import { Container } from '../../../../common/components/container/container.component'
import { ArticleMeta } from '../article-meta/article-meta.component'
import { Author } from '../../api/dto/global-feed.in';
import { motion } from 'framer-motion';

const articleBannerAnimation = {
    hidden: {
        y: -1000,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    }
}

interface ArticleBannerProps {
    title: string;
    author: Author;
    likes: number;
}

export const ArticleBanner: FC<ArticleBannerProps> = ({ title, author, likes }) => {
    return (
        <div className="bg-conduit-darkestGray pt-8 pb-4 mb-8">
            <Container>
                <motion.h1 className='pl-4 lg:pl-0 font-titillium text-white text-2xl lg:text-article font-semibold leading-articleTitle mb-8 p-2 lg:p-0' initial='hidden' animate='visible' variants={articleBannerAnimation} transition={{ duration: 0.3 }}>
                    {title}</motion.h1>
                <div className='pl-4 lg:pl-0 pb-2'>
                    <ArticleMeta author={author} likes={likes} />
                </div>
            </Container>
        </div>
    )
}
