let id = 0;

// 函数方式创建id， 优点 简单

const createId = () => {
  id += 1;
  return id;
};

export {createId};
