import { Popover } from '@headlessui/react'
export function MyPopover() {
    return (
      <Popover className="relative">
        <Popover.Button>Solutions</Popover.Button>
  
         <Popover.Panel className="absolute z-10 border border-gray-200 px-2 py-3 rounded-md mt-2 left-1/2 -translate-x-1/2">
          <div className="flex flex-col">
            <a href="/analytics">Bike</a>
            <a href="/engagement">SkateBoard</a>
            <a href="/security">Surf</a>
            <a href="/integrations">Soccer</a>
          </div>

          
           {/* no lo usamos */}
          <img src="/solutions.jpg" alt="" />
        </Popover.Panel>
      </Popover>
    )
  }