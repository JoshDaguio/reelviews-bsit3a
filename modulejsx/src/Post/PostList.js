import React from 'react'
import Post from './Post'

function PostList() {
  return (
    <div>
        <Post title="Judge upholds $18 minimum pay for NYC delivery workers" 
        content="In a blow to Uber, DoorDash and Grubhub, a New York judge on Thursday ruled to allow 
        the implementation of the minimum pay rate of $18 per hour for New York City’s food delivery workers.
        
        The delivery apps sued the city in July, when the city’s 65,000 delivery workers would have 
        begun seeing hourly payments, in an attempt to block the standard from being implemented. 
        They were granted a temporary injunction at the time. Acting Supreme Court Justice Nicholas 
        Moyne today ruled against the companies, making way for the minimum pay rate that will 
        reach $19.96 per hour in 2024 to account for inflation."/> 

        <Post title="SpaceX’s defense-focused Starshield satellite internet business lands first contract" 
        content="SpaceX won its first contract for Starshield, the defense-focused version of its Starlink satellite 
        internet service, from the U.S. Space Force.
        
        The one-year contract has a maximum value of $70 million, a U.S. Air Force representative told Bloomberg. 
        The contract “provides for Starshield end-to-end service via the Starlink constellation, user terminals, 
        ancillary equipment, network management and other related services,” the representative said. 
        It was awarded on September 1."/> 

        <Post title="On TikTok, videos promoting steroids are exploding — and at times targeting teens" 
        content="In a new report, a social media watchdog group details how steroid content is exploding in some TikTok 
        communities, promoting potentially dangerous and often illegal substances while propagating unattainable body 
        image ideals to boys and young men.

        Researchers with the Center for Countering Digital Hate (CCDH) found that videos tagged with hashtags promoting 
        the use of steroid-like drugs have racked up more than 580 million views among U.S. users in the last three years,
        the bulk of which come from young men between the ages of 18 and 24. Data for views from under-18 users isn’t 
        available."/> 

    </div>
  )
}

export default PostList