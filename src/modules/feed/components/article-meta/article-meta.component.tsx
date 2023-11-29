import { FC } from 'react'
import { ArticleAuthor } from '../article-author/author.component'
import { Author } from '../../api/dto/global-feed.in';
import { FavouriteButton } from '../../../../common/components/favourite-button/favourite-button.component'

interface ArticleMetaProps {
    author: Author;
    likes: number;
}

export const ArticleMeta: FC<ArticleMetaProps> = ({ author, likes }) => {
    return (
        <div>
            <div className='inline-block'>
                <ArticleAuthor
                    author={author}
                    createdAt={new Date().toISOString()} />
            </div>
            <div className='inline-flex gap-4'>
                <FavouriteButton count={likes} />
            </div>
        </div>
    )
}
