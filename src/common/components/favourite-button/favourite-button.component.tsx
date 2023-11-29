import React, { FC, useState } from 'react';

interface FavouriteButtonProps {
    count: number
}

export const FavouriteButton: FC<FavouriteButtonProps> = ({ count }) => {

    const [like, setLike] = useState(count);

    return (
        <button className="text-conduit-500 border border-conduit-500 text-center align-middle cursor-pointer select-none py-1 px-2 text-sm rounded-md hover:text-white/80 hover:bg-conduit-500/80 hover:border-conduit-500/80  focus:bg-conduit-500 focus:text-white transition-all duration-300" onClick={() => setLike(like + 1)}>
            <i className="ion-heart"></i>
            <span className="ml-1 font-normal">{like}</span>
        </button>
    )
}
