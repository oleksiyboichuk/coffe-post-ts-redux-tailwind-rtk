import { FC } from 'react'
import { ProfileBanner } from '../components/profile-banner/profile-banner.component'
import { Feed } from '../../feed/components/feed.component'
import { useLocation, useParams } from 'react-router-dom'
import { usePageParam } from '../../feed/hooks/use-page-param.hook'
import { useGetProfileFeedQuery } from '../../feed/api/repository'
import { Container } from '../../../common/components/container/container.component'
import { FeedToggle } from '../../feed/components/feed-toggle/feed-toggle.component'
import { useGetProfileQuery } from '../api/repository'

interface ProfilePageProps { }

export const ProfilePage: FC<ProfilePageProps> = () => {
    const { page } = usePageParam();
    const { profile } = useParams();
    const location = useLocation();

    const { data: profileInfo, isLoading: profileLoading } = useGetProfileQuery({ username: profile! });

    const { isLoading, isFetching, error, data } = useGetProfileFeedQuery({
        page,
        author: profile!,
    });

    if (profileLoading) {
        return null;
    }

    return (
        <>
            <ProfileBanner profile={profileInfo!.profile} />
            <Container>
                <div className='px-10'>
                    <FeedToggle defaultText='My Articles' defaultLink={location.pathname} />
                    <Feed
                        isLoading={isLoading}
                        isFetching={isFetching}
                        error={error}
                        data={data}
                    />
                </div>
            </Container>
        </>
    )
}
