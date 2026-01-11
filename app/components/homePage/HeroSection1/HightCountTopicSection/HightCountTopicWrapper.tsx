"use server";
import React, { Suspense } from 'react'
import HeroHeader from '../../heroSection/HeroHeader'
import getTopFacet from '@/actions/getTopFacet';

import HightCountTopicItemsSkeleton from './HightCountTopicItemsSkeleton';
import HightCountTopicItems from './HightCountTopicItems';


const HightCountTopicWrapper = async () => {
  const topFacet = (await getTopFacet(1)).map(({_id})=> _id);

  if(topFacet.length == 0){
    topFacet.push("technology");
  }

  return (
    <div className='flex flex-col space-y-4 bg-white dark:bg-midnight-900 p-4'>
       <Suspense fallback={<HightCountTopicItemsSkeleton/>}>
         <HightCountTopicItems topFacet={topFacet[0]}/>
       </Suspense>
    </div>
  )
}

export default HightCountTopicWrapper