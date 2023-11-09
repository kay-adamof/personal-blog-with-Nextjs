import Image from 'next/image'
import * as T from '@/types'

export const CardStyleLink = (meta: T.MetadataForCard): JSX.Element => (
  <>
    <div className='card shadow-xl md:card-side'>
      <figure className='mb-0'>
        <Image
          src={meta.imageSrc}
          width={1200}
          height={630}
          alt=''
        />
      </figure>
      <div className='prose prose-sm card-body dark:bg-slate-950'>
        <h2 className='card-title m-0 p-0'>{meta.title}</h2>
        <p>{meta.description}</p>
      </div>
    </div>
  </>
)
