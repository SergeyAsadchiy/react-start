import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
  return (
    <div style={{margin: '200px auto'}}>
      <h1>404. Такой страницы не существует</h1>
      <div style={{margin: '100px auto'}}>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default Error;