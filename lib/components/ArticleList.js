import React from 'react';
import Article from './Article';

class ArticleList extends React.PureComponent {
  render() {
    return (
      <div >
        {Object.keys(this.props.articles).map((key) =>
          <Article
            key={this.props.articles[key].id}
            article={this.props.articles[key]}
          />
        )}
      </div>
    );
  }
}

export default ArticleList;
