import PropTypes from 'prop-types'
import Image from 'next/image'
import cn from 'classnames'
import { useConfig } from '@/lib/config'
import useTheme from '@/lib/theme'
import FormattedDate from '@/components/FormattedDate'
import TagItem from '@/components/TagItem'
import NotionRenderer from '@/components/NotionRenderer'
import TableOfContents from '@/components/TableOfContents'

/**
 * A post renderer
 *
 * @param {PostProps} props
 *
 * @typedef {object} PostProps
 * @prop {object}   post       - Post metadata
 * @prop {object}   blockMap   - Post block data
 * @prop {string}   emailHash  - Author email hash (for Gravatar)
 * @prop {boolean} [fullWidth] - Whether in full-width mode
 */
export default function Post({ post, blockMap, emailHash, fullWidth = false }) {
  const BLOG = useConfig()
  const { dark } = useTheme()

  return (
    <article className={cn('flex flex-col', fullWidth ? 'md:px-24' : 'items-center')}>
      {post.cover ? (
        <>
          <div className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] relative">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className={cn(
            'w-full mt-4',
            { 'max-w-2xl px-4': !fullWidth }
          )}>


          <FormattedDate date={post.date} />

            <h1 className="font-bold text-3xl my-4 text-black dark:text-white">
              {post.title}
            </h1>
            {post.type[0] !== 'Page' && (
              <nav className=
                'w-full flex mb-2 items-start text-gray-500 dark:text-gray-400'
                >
                <div className="flex gap-2">
                  <a href={BLOG.socialLink || '#'} className="flex">
                    <Image
                      alt={BLOG.author}
                      width={24}
                      height={24}
                      src={BLOG.avatar}
                      className="rounded-full"
                    />
                    <p className="ml-2 md:block">{BLOG.author}</p>
                  </a>

                  {post.tags && (
                    <div className="flex flex-nowrap max-w-full overflow-x-auto article-tags">
                      {post.tags.map(tag => (
                        <TagItem key={tag} tag={tag} />
                      ))}
                    </div>
                  )}
                </div>

              </nav>
            )}
          </div>
        </>
      ) : (
        <h1 className={cn(
          'w-full font-bold text-3xl text-black dark:text-white mt-8',
          { 'max-w-2xl px-4': !fullWidth }
        )}>
          {post.title}
        </h1>
      )}
      <div className="self-stretch -mt-4 flex flex-col items-center lg:flex-row lg:items-stretch">
        {!fullWidth && <div className="flex-1 hidden lg:block" />}
        <div className={cn(
          fullWidth ? 'flex-1 pr-4' : 'flex-none w-full max-w-2xl px-4'
        )}>
          <NotionRenderer
            recordMap={blockMap}
            fullPage={false}
            darkMode={dark}
          />
        </div>
        <div className={cn(
          'order-first lg:order-[unset] w-full lg:w-auto max-w-2xl lg:max-w-[unset] lg:min-w-[160px]',
          fullWidth ? 'flex-none' : 'flex-1'
        )}>
          <TableOfContents
            blockMap={blockMap}
            className="pt-3 sticky"
            style={{ top: '65px' }}
          />
        </div>
      </div>
    </article>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  blockMap: PropTypes.object.isRequired,
  emailHash: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool
}
