import { FiInbox } from 'react-icons/fi'

export default function EmptyState({ message = 'No items found' }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-theme-light-text dark:text-theme-dark-text">
      <FiInbox className="w-16 h-16 mb-4 text-gray-400 dark:text-gray-600" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  )
}
