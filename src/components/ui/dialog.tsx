import * as React from "react"
import { createPortal } from "react-dom"

import { cn } from "@/lib/utils"

interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

const Dialog = ({ open, onOpenChange, children }: DialogProps) => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {React.Children.map(children, child =>
        React.isValidElement(child) && child.type !== DialogContent ? child : null
      )}
      {open && mounted && createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => onOpenChange?.(false)}
          />
          <div className="relative z-50 max-h-[90vh] overflow-y-auto">
            {React.Children.map(children, child =>
              React.isValidElement(child) && child.type === DialogContent ?
                React.cloneElement(child, { onClose: () => onOpenChange?.(false) } as React.HTMLAttributes<HTMLDivElement>) : null
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  )
}

const DialogTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }
>(({ className, children, asChild, ...props }, ref) => {
  if (asChild) {
    return React.isValidElement(children) ?
      React.cloneElement(children, props as React.HTMLAttributes<HTMLElement>) : null
  }

  return (
    <div
      ref={ref}
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  )
})
DialogTrigger.displayName = "DialogTrigger"

const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { onClose?: () => void }
>(({ className, onClose, ...props }, ref) => {
  // Handle ESC key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  return (
    <div
      ref={ref}
      className={cn(
        "relative z-50 grid w-full max-w-lg mx-4 gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
        className
      )}
      {...props}
    />
  )
})
DialogContent.displayName = "DialogContent"

export {
  Dialog,
  DialogTrigger,
  DialogContent,
}
