import { Button } from '@heroui/button'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/dropdown'
import { Ellipsis, Trash2 } from 'lucide-react'
import React from 'react'

type Props = {
    isLoading : boolean;
    handleFeedbackDelete : ()=>void;
}

const FeedbackMessageDropdown = ({isLoading, handleFeedbackDelete}:Props) => {
  return (
     <Dropdown>
      <DropdownTrigger>
        <Button isLoading={isLoading} variant="light" isIconOnly  >
             <Ellipsis className='w-5 h-5 '/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with icons" variant="faded">
       
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onPress={()=>{handleFeedbackDelete()}}
          startContent={<Trash2 className='w-5 h-5 text-danger-500' />}
        >
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default FeedbackMessageDropdown