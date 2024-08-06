import Link from 'next/link'

const Tags = ({ tags, currentTag }) => {
  if (!tags) return null
  return (
    <div className="tag-container">
      <ul className="flex max-w-full mt-4 overflow-x-auto">
        {Object.keys(tags).map((key) => {
          const selected = key === currentTag
          return (
            <li
              key={key}
              className={`mr-3 p-1 font-medium rounded whitespace-nowrap dark:text-gray-300 ${
                selected
                  ? 'text-white bg-primary border-primary'
                  : 'bg-gray-100 border-gray-100 text-gray-400 bg-transparent hover:bg-primary-light '
              }`}
            >
              <Link
                key={key}
                href={selected ? '/search' : `/tag/${encodeURIComponent(key)}`}
              >
                {`${key} (${tags[key]})`}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Tags
