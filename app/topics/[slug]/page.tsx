import React from 'react'
import { menuItems } from '@/components/menu-items'

const TopicPage = ({ params }: { params: { slug: string } }) => {
    const topic = menuItems.find(item => item.title === 'Topics')?.subMenu?.find(subItem => subItem.path === `/topics/${params.slug}`)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">{topic?.title}</h1>
      <p className="mt-4 text-lg">This is the page for the topic: {topic?.title}</p>
    </div>
  )
}

export default TopicPage
