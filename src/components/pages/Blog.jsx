import React from 'react'
import blog from '../data/blog.json'
import { Message, Button, Divider } from "rsuite";

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
                  <h2 className="card-title">{data.title}</h2>
                  <p className="card-text">{data.description}</p>
                </div>
              </div>

              <Message
                showIcon
                type="info"
                header="Do you want to allow notifications?"
              >
                <p> We can let you know when new messages arrive.</p>
                <hr />
                <ButtonToolbar>
                  <Button size="sm">Don't allow</Button>
                  <Button size="sm">Allow</Button>
                </ButtonToolbar>
              </Message>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog