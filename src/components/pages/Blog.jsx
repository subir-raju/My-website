import React from 'react'
import blog from '../data/blog.json'



const Blog = () => {
  return (
    <>
      <div className="container blog" id="blog">
        <h1>BLOG</h1>
        <div className="blog-raw">
          {blog.map((data) => (
            <>
              <div key={data.id} className="blog-id">
                <div className="blog-body">
                  <h2 className="card-text">{data.description}</h2>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog