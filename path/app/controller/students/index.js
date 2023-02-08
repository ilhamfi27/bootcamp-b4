const path = require('path');

const subjectModelPath = path.relative(
  __dirname,
  '/home/ilham/work/bootcamp/path/app/model/subject'
);
console.log(subjectModelPath);
const subjectModel = require('../../model/subject/index')
console.log(subjectModel.getSubjects());
