let id = 0;
// 类的方式创建id , 调用 (new ID).value  使用类属性即可
// 优点是在于需要类返回复杂操作或属性是 方便添加
// 缺点是麻烦

class Id {
  value: number;
  constructor() {
    id += 1;
    this.value = id;
  }
}

export {Id}

