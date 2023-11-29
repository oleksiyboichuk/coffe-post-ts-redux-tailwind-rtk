import { FC } from 'react'
import { Banner } from '../../../common/components/banner/banner.component'
import { Feed } from '../components/feed.component'
import { useGetGlobalFeedQuery } from '../api/repository';
import { useSearchParams } from 'react-router-dom';
import { usePageParam } from '../hooks/use-page-param.hook';
import { Container } from '../../../common/components/container/container.component';
import { FeedToggle } from '../components/feed-toggle/feed-toggle.component';
import { TagCloud } from '../components/tag-cloud/tag-cloud.component';

interface GlobalFeedPageProps {
}

export const GlobalFeedPage: FC<GlobalFeedPageProps> = () => {
    const [searchParams] = useSearchParams();
    const { page } = usePageParam();
    const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
        page,
        tag: searchParams.get('tag')
    });

    return (
        <>
            <Banner />
            <Container>
                <div className="block lg:hidden w-5/6 lg:w-1/4 pl-3 mx-auto pr-3 mt-3">
                    <TagCloud />
                </div>
                <div className='pl-10'>
                    <FeedToggle />
                </div>
                <div className="px-3 w-full lg:hidden lg:w-1/4 pl-3">
                </div>
                <div className="px-10 flex-col lg:flex lg:flex-row">
                    <div className="w-full  lg:w-3/4 lg:px-0">
                        <Feed data={data} isLoading={isLoading} isFetching={isFetching} error={error} />
                    </div>
                    <div className="hidden lg:block w-full lg:w-1/4 pl-3 mt-3">
                        <TagCloud />
                    </div>
                </div>
            </Container >
        </>
    )
}
