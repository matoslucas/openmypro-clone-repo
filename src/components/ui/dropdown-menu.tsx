import * as React from "react"

import { cn } from "@/lib/utils"

interface DropdownMenuProps {
  children: React.ReactNode
  onOpenChange?: (open: boolean) => void
  open?: boolean
}

const DropdownMenu = ({ children, onOpenChange, open }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const actualOpen = open !== undefined ? open : isOpen

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    if (!actualOpen) {
      setIsOpen(true)
      onOpenChange?.(true)
    }
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
      onOpenChange?.(false)
    }, 150) // Small delay to prevent flickering
  }

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          if (child.type === DropdownMenuTrigger) {
            return React.cloneElement(child, { isOpen: actualOpen } as Partial<React.ComponentProps<typeof DropdownMenuTrigger>>)
          }
          if (child.type === DropdownMenuContent) {
            return actualOpen ? child : null
          }
        }
        return child
      })}
    </div>
  )
}

const DropdownMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean
    isOpen?: boolean
  }
>(({ className, children, asChild, isOpen, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "transition-colors duration-200",
        isOpen ? "text-teal-600 bg-teal-50" : "",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute left-0 top-full z-50 min-w-[12rem] overflow-hidden rounded-lg border bg-white shadow-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      className
    )}
    {...props}
  >
    <div className="py-2">
      {children}
    </div>
  </div>
))
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    href?: string
  }
>(({ className, children, href, ...props }, ref) => {
  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "relative flex cursor-pointer select-none items-center px-4 py-3 text-sm outline-none transition-colors hover:bg-gray-50 hover:text-teal-600 focus:bg-gray-50 focus:text-teal-600",
          className
        )}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex cursor-pointer select-none items-center px-4 py-3 text-sm outline-none transition-colors hover:bg-gray-50 hover:text-teal-600 focus:bg-gray-50 focus:text-teal-600",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
DropdownMenuItem.displayName = "DropdownMenuItem"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
}
