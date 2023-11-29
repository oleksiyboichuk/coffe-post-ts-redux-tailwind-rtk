import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Author } from '../../api/dto/global-feed.in'
import { DateTime } from 'luxon'

interface ArticleAuthorProps {
    author: Author;
    createdAt: string;
}

export const ArticleAuthor: FC<ArticleAuthorProps> = ({
    author,
    createdAt,
}) => {
    return (
        <div className='flex'>
            <Link to={`/@${encodeURIComponent(author.username)}`}>
                <img
                    src={author.image}
                    alt={`${author.username} avatar`}
                    className="inline-block h-8 w-8 rounded-full" />
            </Link>
            <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
                <Link
                    className="font-medium hover:underline hover:text-conduit-500 transition-all duration-200"
                    to={`/@${encodeURIComponent(author.username)}`}>{author.username}
                </Link>
                <span className="text-conduit-darkenGray text-date">{DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}</span>
            </div>
        </div>
    )
}
