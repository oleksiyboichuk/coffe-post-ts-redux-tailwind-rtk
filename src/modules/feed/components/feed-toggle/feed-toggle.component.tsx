import clsx from 'clsx';
import { FC } from 'react'
import { NavLink, useSearchParams } from "react-router-dom";

interface FeedToggleProps {
    defaultText?: string;
    defaultLink?: string
}

export const FeedToggle: FC<FeedToggleProps> = ({ defaultText = 'Global Feed', defaultLink = '/' }) => {
    const [searchParams] = useSearchParams();
    const tag = searchParams.get('tag');

    const globalFeedClasses = clsx('bg-conduit-100 border-conduit-green py-2 px-4 hover:text-black/60',
        {
            'text-black/30': tag,
            'border-b-2': !tag
        }
    )

    return (
        <div className="h-1.8 mt-2">
            <ul className="flex">
                <li>
                    <NavLink
                        to={defaultLink}
                        className={globalFeedClasses}>
                        {defaultText}
                    </NavLink>
                    {tag && (<span className="bg-conduit-100 border-b-2  border-conduit-green text-conduit-green py-2 px-4"># {tag}</span>
                    )}
                </li>
            </ul>
        </div>
    )
}
