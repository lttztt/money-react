let id = parseInt(window.localStorage.getItem('Max_ID') || '0');

// 函数方式创建id， 优点 简单

const createId = () => {
  id += 1;
  window.localStorage.setItem('Max_ID', JSON.stringify(id));
  return id;
};

export {createId};
