const getList = (author, keyword) => {
  // 先返回假数据（格式正确）
  return [
    {
      id: 1,
      title: '标题',
      content: '内容',
      create: 15466491112,
      author: 'zhangsan'
    },
    {
      id: 2,
      title: '标题',
      content: '内容',
      create: 15466491112,
      author: 'lisi'
    }
  ]
}

const getDetail = (author, keyword) => {
  // 先返回假数据（格式正确）
  return [
    {
      id: 1,
      title: '标题',
      content: '内容',
      create: 15466491112,
      author: 'zhangsan'
    }
  ]
}

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含 title content author 属性
  return [
    {
      id: 3, // 表示新建博客，插入到数据表里边到ID
    }
  ]
}

const updateBlog = (id, blogData = {}) => {
  console.log('updateBlog=',blogData)
  return [
    {
      id: 3, // 表示新建博客，插入到数据表里边到ID
    }
  ]
}

const deleteBlog = (id) => {
  console.log('deleteBlog=',id)
  return [
    {
      id: 3, // 表示新建博客，插入到数据表里边到ID
    }
  ]
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
}