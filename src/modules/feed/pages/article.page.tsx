import { FC } from 'react'
import { ArticleBanner } from '../components/acticle-bannet/article-banner.component'
import { Container } from '../../../common/components/container/container.component'
import { TagList } from '../components/tag-list/tag-list.component'
import { useGetSingleArticleQuery } from '../api/repository'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'


interface ArticlePageProps {
}

const convertNewLines = (body: string) => {
    return body.split('\\n').join('<br />');
}

export const ArticlePage: FC<ArticlePageProps> = () => {

    const { slug } = useParams();
    const { data, isLoading } = useGetSingleArticleQuery({ slug: slug! })

    if (isLoading) {
        return null;
    }

    if (!data) {
        return <h1>Article not found</h1>
    }

    return (
        <>
            <ArticleBanner title={data?.article.title} author={data.article.author} likes={data.article.favoritesCount} />
            <Container>
                <motion.div className="pb-8 border-t mb-6 px-6 lg:px-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                    <p className="text-lg mb-8 mt-4" dangerouslySetInnerHTML={{ __html: convertNewLines(data.article.body) }} />
                    <TagList list={data.article.tagList} />
                </motion.div>
            </Container>
        </>
    )
}
