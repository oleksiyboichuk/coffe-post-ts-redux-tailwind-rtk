import { FC } from 'react'
import { Header } from "./common/components/header/header.component";
import { Routes, Route } from 'react-router-dom';
import { GlobalFeedPage } from './modules/feed/pages/global-feed.page';
import { ProfilePage } from './modules/profile/pages/profile.page';
import { ArticlePage } from './modules/feed/pages/article.page';
import { AboutPage } from './modules/feed/components/about-page/about-page.component';
import { Footer } from './common/footer/footer.component';

interface AppProps {
}

export const App: FC<AppProps> = () => {
    return (
        <div className="pb-16">
            <Header />
            <Routes>
                <Route path="/" element={<GlobalFeedPage />} />
                <Route path="/about" element={<AboutPage />} />

                <Route path="/@:profile" element={<ProfilePage />} />
                <Route path="/article/:slug" element={<ArticlePage />} />
            </Routes>
            <Footer />
        </div>
    )
}

