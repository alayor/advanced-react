import React from 'react';
import ArticleList from '../ArticleList';
import renderer from 'react-test-renderer';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a'},
      b: { id: 'b'},
    },
    store: {
      lookupAuthor: jest.fn(() => ({})),
    },
  };
  it('renders correctly', () => {

    // when
    const tree = renderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();

    // then
    console.log(tree);
    expect(tree.children.length).toBe(2);
  });
});
