import { FC } from 'react'
import { Link } from "react-router-dom";
import { FavouriteButton } from '../../../../common/components/favourite-button/favourite-button.component';
import { TagList } from "../tag-list/tag-list.component";
import { FeedArticle } from '../../api/dto/global-feed.in';
import { ArticleAuthor } from '../article-author/author.component';
import { motion } from 'framer-motion';

interface ArticleProps extends FeedArticle {
}

const articleAnimation = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1
    }
}

export const Article: FC<ArticleProps> = ({
    author,
    createdAt,
    favoritesCount,
    title,
    description,
    tagList,
    slug
}) => {
    return (
        <motion.article className='bg-conduit-150 p-5 mb-3 rounded-lg mt-3' initial='hidden' whileInView="visible" variants={articleAnimation} transition={{ delay: 0.3 }}>
            <div className="border-black/10 py-6" >
                <div className="mb-4 font-light flex justify-between">
                    <ArticleAuthor author={author} createdAt={createdAt} />
                    <FavouriteButton count={favoritesCount} />
                </div>
                <Link to={`/article/${encodeURIComponent(slug)}`}>
                    <h1 className="mb-1 font-semibold text-2xl text-conduit-200 drop-shadow-sm transition-all duration-200">
                        {title}
                    </h1>
                    <p className="text-conduit-200/80 font-light mb-1">
                        {description}
                    </p>
                    <div className="flex justify-between">
                        <span className="text-conduit-200/80 text-date font-light hover:scale-105 hover:font-bold transition-all duration-200">Read more...</span>
                        <TagList list={tagList} />
                    </div>
                </Link>
            </div>
        </motion.article>
    )
}
