const { path } = require("./pathModule");

// console.log(path);

// console.log(__dirname);
// console.log(__filename);

const filePath = path.join("folder", "student", "data.txt") //  folder\student\data.txt
// console.log(filePath); 

const resolvedPath = path.resolve(filePath)  //   C:\Users\nishant.sanghani\Desktop\node\Thapa\path_module\folder\student\data.txt
// console.log(resolvedPath);

const extName = path.extname(filePath)   // .txt
console.log(extName);

const baseName = path.basename(filePath)  //  data.txt
console.log(baseName);

const dirName = path.dirname(filePath)  // folder\student
console.log(dirName);

const parseData = path.parse(filePath)  
// console.log(parseData);  

// {
//   root: '',
//   dir: 'folder\\student',
//   base: 'data.txt',
//   ext: '.txt',
//   name: 'data'
// }





