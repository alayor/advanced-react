import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
  return (
    <div >
      {Object.keys(props.articles).map((key) =>
        <Article
          key={props.articles[key].id}
          article = {props.articles[key]}
        />
      )}
    </div>
  );
};

export default ArticleList;
