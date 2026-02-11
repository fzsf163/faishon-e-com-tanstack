import { ChevronRight } from 'lucide-react'
import { useState } from 'react'
import categories, { Category } from '../data/navForItems'

const CategoryItem = ({
  category,
  level = 0,
}: {
  category: Category
  level?: number
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const hasChildren = !!category.children?.length

  return (
    <div
      className='relative '
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main nav item */}
      <div
        className={`flex items-center justify-between p-2 text-foreground dark:text-foreground/80  ${
          level === 0
            ? 'text-gray-700 hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-foreground rounded-lg'
            : 'hover:bg-secondary rounded'
        } transition-colors cursor-pointer`}
      >
        <span className={level === 0 ? 'font-medium text-nowrap ' : ''}>
          {category.name}
        </span>
        {hasChildren && (
          <ChevronRight
            className={`w-4 h-4 transition-transform ${
              isHovered && level > 0 ? 'rotate-90' : ''
            }`}
          />
        )}
      </div>

      {/* Dropdown for children */}
      {hasChildren && (
        <div
          className={`absolute ${
            level === 0 ? 'top-full left-0' : 'top-0 left-full'
          } bg-background shadow-lg rounded-lg py-2 min-w-[200px] transition-opacity ${
            isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
          } transition-all duration-200 z-10`}
        >
          {category.children?.map((child) => (
            <CategoryItem key={child.name} category={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

const NavbarItems = () => {
  return (
    <nav className='bg-background text-foreground dark:text-white shadow dark:shadow-foreground/20 py-4 px-6'>
      <div className='flex items-center justify-center gap-4 max-w-7xl mx-auto'>
        <div className='flex items-center flex-wrap xl:flex-nowrap gap-2'>
          {categories.map((category) => (
            <CategoryItem key={category.name} category={category} level={0} />
          ))}
        </div>
      </div>
    </nav>
  )
}

export default NavbarItems
