import { BulletListNode, ListItemNode } from '@/types/novel'
import React from 'react'
import ShowListItemNode from './ShowListItemNode';
import { nanoid } from '@reduxjs/toolkit';

type Props = {
    node : BulletListNode;  
}

const ShowBulletListNode = ({node}:Props) => {

  if(node.type !== "bulletList") return null;
    
  return (
    <ul className='px-4 list-disc'>
        {
            node.content?.map((node:ListItemNode)=>(
              <ShowListItemNode key={nanoid(6)} node={node}/>
            ))
        }
    </ul>
  )
}

export default ShowBulletListNode;

