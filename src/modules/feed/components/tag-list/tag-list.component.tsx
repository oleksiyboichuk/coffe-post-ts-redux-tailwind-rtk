import clsx from 'clsx';
import React, { FC } from 'react'
import { Link } from 'react-router-dom';

enum TagListStyle {
    DARK = 'DARK',
    LIGHT = 'LIGHT'
}

interface TaglistProps {
    list: string[],
    itemStyle?: keyof typeof TagListStyle,
    itemAs?: 'li' | 'a'
}

export const TagList: FC<TaglistProps> = ({
    list,
    itemStyle = TagListStyle.LIGHT,
    itemAs = 'li'
}) => {
    const itemClasses = clsx('text-date font-light text-data border mr-1 mb-0.2 px-tag rounded-xl transition-all duration-200',
        {
            'border-conduit-lightenGray text-conduit-tag': itemStyle === TagListStyle.LIGHT,
            'bg-conduit-200 text-white border-conduit-tagItemBg hover:bg-conduit-tagItemBgDarken cursor-pointer transition-all duration-200': itemStyle === TagListStyle.DARK,
            'hover:text-white': itemStyle === TagListStyle.DARK && itemAs === 'a'
        }
    )

    return (
        <ul className="flex flex-wrap">
            {list.map(tag => {
                return itemAs === 'li' ? <li className={itemClasses} key={tag}>{tag}</li> : <Link to={`/?tag=${tag}`} className={itemClasses} key={tag}>{tag}</Link>
            })}
        </ul>
    )
}
