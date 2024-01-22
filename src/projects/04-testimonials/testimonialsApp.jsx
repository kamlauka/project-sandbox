import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";

export default function TestimonialsApp() {
  const [posts, setPosts] = useState("");
  const [items, setItems] = useState();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${posts}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [posts]);
  console.log(items);
  console.log(posts);
  return (
    <div className="container text-center">
      <div className="m-auto"></div>
      <Title text={"posts app"} />
      <Button
        text={"Posts"}
        btnClass={"btn-info"}
        icon={<BsFillFileEarmarkPostFill />}
        onClick={() => setPosts("Posts")}
      />
      <Button
        text={"Users"}
        btnClass={"btn-info"}
        icon={<FaUserAlt />}
        onClick={() => setPosts("Users")}
      />
      <Button
        text={"Comments"}
        btnClass={"btn-info"}
        icon={<FaRegCommentDots />}
        onClick={() => setPosts("Comments")}
      />
      <Title
        classes={"subtitle text-primary"}
        text={!posts ? "Select from above!" : posts}
      />
      {!items
        ? null
        : items.map((item) => {
            return (
              <div className="card card-primary mb-2" key="item.id">
                {item.name && <h2 className="card-header">{item.name}</h2>}
                <div className="card-body">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
                {item.email && (
                  <small className="card-footer">{item.email}</small>
                )}
              </div>
            );
          })}
    </div>
  );
}
