import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import BlogCard from "../Components/BlogCard";
import Container from "./Container";
import Blogs from "./Blogs.json";

const Blog = () => {
  return (
    <div>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find by Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Cameras</li>
                  <li>Laptops</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {
                Blogs.map((ele, index) => {
                  return(
                    <div key={index} className="col-6 mb-3">
                       <BlogCard des={ele.des} title={ele.title} id={ele.id} images={ele.images}/>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Blog;