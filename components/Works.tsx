import React from 'react'

function Works() {
  return (
    <div className=''>
        <h1 className='text-9xl uppercase mb-12'>Some of my works</h1>
        <Project/>
        <Project/>
    </div>
  )
}

function Project() {
    return (
    <div className='h-screen p-8 '>
        <div className='relative top-0 sticky flex flex-col gap-8'>
            <h1 className='text-7xl pt-8 '>Project A</h1>
            <p className='pt-8 max-w-lg'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore.</p>
        </div>
    </div>)
}

export default Works