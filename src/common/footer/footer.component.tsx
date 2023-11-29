import { FC } from 'react'

interface FooterProps { }

export const Footer: FC<FooterProps> = () => {
    return (
        <footer className='fixed bottom-0 w-full bg-conduit-200 py-2 lg:py-3'>
            <div className='flex justify-center items-center space-x-2'>
                <i className='ion-social-github text-white text-lg lg:text-2xl'></i>
                <a href="https://github.com/oleksiyboichuk/coffe-post-ts-redux-tailwind-rtk" className='text-white hover:text-white hover:underline text-lg lg:text-xl' target='_blunk'>Project on GitHub</a>
            </div>
        </footer>
    )
}
