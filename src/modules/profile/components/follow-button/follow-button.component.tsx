import { FC } from 'react'

interface FollowButtonProps {
    username: string
}

export const FollowButton: FC<FollowButtonProps> = ({ username }) => {
    return <button className="text-center align-middle cursor-pointer select-none border py-1 px-2 text-sm rounded-md border-conduit-200 text-conduit-200 hover:bg-conduit-200/80 hover:border-conduit-200/80 hover:text-white focus:bg-conduit-200 focus:text-white transition-all duration-200">
        <i className="ion-plus-round" />&nbsp;
        Follow {username}
    </button>
}
