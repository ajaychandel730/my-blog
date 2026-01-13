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
    <section aria-labelledby={topFacet[0].toLowerCase().split(" ").join("-")} className='flex bg-white flex-col space-y-4  dark:bg-midnight-900 p-4'>
       <Suspense fallback={<HightCountTopicItemsSkeleton/>}>
         <HightCountTopicItems topFacet={topFacet[0]}/>
       </Suspense>
    </section>
  )
}

export default HightCountTopicWrapper