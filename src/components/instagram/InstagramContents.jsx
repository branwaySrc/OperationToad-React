import { InstagramProfile , InstagramPost } from './Contents';
import './instagram.css';

const InstagramComponents = () => {
  return (
    <main className='bg-gray300 h-[1800px] z-0' >
      <section>
        <div className='story-inner h-[120px] flex items-center gap-4 pl-4 pr-4 pt-4'>
          <InstagramProfile
            images={["./public/content/My.svg"]}
            name='내 스토리'
            borders={['']}
            bg={['']}
            >
          </InstagramProfile>
          <InstagramProfile
            images={["./public/content/Profile2.svg"]}
            name='나는두꺼비'
            borders={['border-4']}
            bg={['bg-gradient-to-r from-red-500 to-purple-500']}
            >
          </InstagramProfile>
          <InstagramProfile
            images={["./public/content/Profile4.svg"]}
            name='진로두꺼비'
            borders={['border-4']}
            bg={['bg-gradient-to-r from-red-500 to-purple-500']}
            >
          </InstagramProfile>
          <InstagramProfile
            images={["./public/content/Profile3.svg"]}
            name='처음처럼'
            borders={['border-4']}
            bg={['bg-gradient-to-r from-red-500 to-purple-500']}
            >
          </InstagramProfile>
          <InstagramProfile
            images={["./public/content/Profile1.svg"]}
            name='진로이즈백'
            borders={['border-4']}
            bg={['bg-gradient-to-r from-red-500 to-purple-500']}
            >
          </InstagramProfile>
        </div>
      </section>  
      <section>
        <InstagramPost
          name='김민기'
          text='시발년아'
          likes='10'
          profile={["./public/content/My.svg"]}
          post={["./public/content/insta1.gif"]}  
        >
        </InstagramPost>
      </section>  
    </main>
  )
}

export default InstagramComponents