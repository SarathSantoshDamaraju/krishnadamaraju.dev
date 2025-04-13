export default function SectionDivider({ children }) {
  return (
    <div className="relative my-12">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-theme-light-divider dark:border-theme-dark-divider"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="px-4 bg-theme-light-bg dark:bg-theme-dark-bg text-sm font-medium text-theme-light-mutedText dark:text-theme-dark-mutedText">
          {children}
        </span>
      </div>
    </div>
  )
}
