import React from 'react'

type Props = {
    errors :  string[] | undefined;
}

const FormErrors = ({errors}:Props) => {
    if(!errors || errors?.length == 0){
        return null;
    }

  return (
    <div className='w-full !mt-0 space-y-1'>
      {
        errors?.map((message, idx)=>(
            <p key={idx} className=' text-danger text-tiny'>
                {message}
            </p>
        ))
      }
    </div>
  )
}

export default FormErrors