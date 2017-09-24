import React from 'react';
import ArticleList from '../ArticleList';
import { shallow } from 'enzyme';
import Article from '../Article';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a'},
      b: { id: 'b'},
    },
  };
  Article.propTypes = {};
  it('renders correctly', () => {

    // when
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );

    // then
    expect(wrapper.find('Article').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
