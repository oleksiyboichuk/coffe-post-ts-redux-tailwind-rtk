import { FC } from 'react'
import { Container } from '../../../../common/components/container/container.component'
import { FollowButton } from '../follow-button/follow-button.component'
import { Profile } from '../../api/dto/get-profile.in';

interface ProfileBannerProps {
    profile: Profile
}

export const ProfileBanner: FC<ProfileBannerProps> = ({ profile }) => {
    // const { pathname } = useLocation();
    // const decodedPathname = decodeURIComponent(pathname).substring(2);

    return <div className='bg-conduit-300 pt-8 pb-4 mb-8'>
        <Container>
            <div>
                <img src={profile.image} className="w-25 h-25 rounded-full mx-auto border-4 border-conduit-200" alt={`${profile.username} avatar`} />
                <h2 className="text-center font-bold text-4xl pt-2 text-conduit-200">{profile.username}</h2>
            </div>
            <div className="pt-2 lg:pt-0 flex justify-center lg:justify-end">
                <FollowButton username={profile.username} />
            </div>
        </Container>
    </div>
}
