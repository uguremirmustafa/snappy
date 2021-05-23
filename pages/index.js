import React from 'react';

const data = {
  title: 'Lorem ipsum dolor sit amet.',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum facere quaerat, pariatur iusto laborum recusandae eligendi dolorem at autem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eum facere quaerat, pariatur iusto laborum recusandae eligendi dolorem at autem?',
};

const Home = () => {
  return (
    <div className="home">
      {Array(4)
        .fill(data)
        .map((item, index) => (
          <div key={index} className="item" id={index + 1}>
            <div>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
