import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Container from "./Container";
import Blog from "./Blogs.json";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const param = useParams();
  return (
    <div>
      {Blog.map((ele, ind) => {
        if (":" +ele.id == param.id) {
          return (
            <>
              <Meta title={ele.title} />
              <BreadCrumb title={`${ele.title}`} />
              <Container className="blog-wrapper home-wrapper-2 py-5">
                <div className="row">
                  <div className="col-12">
                    <div className="single-blog-card">
                      <Link
                        to="/blogs"
                        className="d-flex align-items-center gap-10"
                      >
                        <AiOutlineArrowLeft className="fs-4" /> Go Back to Blogs
                      </Link>
                      <h3 className="title">{ele.title}</h3>
                      <img
                        src={ele.images}
                        className="img-fluid my-4 w-100"
                        alt="Blog"
                      />
                      <p>{ele.description}</p>
                    </div>
                  </div>
                </div>
              </Container>
            </>
          );
        }
      })}
    </div>
  );
};

export default SingleBlog;
