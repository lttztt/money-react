const generatorOutput = (text: string, output: string) => {
  switch (text) {
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      if (output.indexOf('0') === 0 && output.length === 1) {
        return text;
      } else {
        return output + text;
      }
    case '.':
      if (output.indexOf('.') < 0) {
        return output + text;
      }
      return '';
    case '删除':
      if (output.length > 1) {
        return output.slice(0, -1) || '';
      } else {
        return '0';
      }
    case '清空':
      return '0';
    default:
      return '';
  }
};

export {generatorOutput};
