import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { ArticleList } from './article-article-list/article-list.component';
import { FeedData } from '../api/repository';
import { FEED_PAGE_SIZE } from '../consts';
import { usePageParam } from '../hooks/use-page-param.hook';


interface FeedProps {
    isLoading: boolean;
    isFetching: boolean;
    error: any;
    data?: FeedData;
}

export const Feed: FC<FeedProps> = ({ isLoading, isFetching, error, data }) => {
    const { page, setPage } = usePageParam();
    const handlePageChange = ({ selected }: { selected: number }) => {
        setPage(selected);
    }

    if (isLoading || isFetching) {
        return (
            <div className='text-center mt-10'>
                <p className='text-lg'>
                    Feed Loading...
                </p>
            </div>
        )
    }

    if (error) {
        return <p>Error while loading feed</p>

    }
    return (
        <>
            <ArticleList list={data?.articles || []} />
            <nav className="my-6">
                <ReactPaginate
                    pageCount={Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE)}
                    // pageRangeDisplayed={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
                    previousLabel={null}
                    nextLabel={null}
                    containerClassName="flex justify-center"
                    pageClassName="group"
                    pageLinkClassName='p-3 text-conduit-green bg-conduit-100 border border-conduit-lightenGray -ml-px group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r hover:bg-conduit-150  hover:text-conduit-400 transition-all duration-200'
                    activeClassName="active group"
                    activeLinkClassName="group-[.active]:bg-conduit-500 group-[.active]:text-conduit-100 group-[.active]:border-conduit-green"
                    onPageChange={handlePageChange}
                    forcePage={page}
                />
            </nav>
        </>
    )
}
