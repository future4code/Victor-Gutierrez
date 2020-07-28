import fs from 'fs';
import path from 'path';

const taskManager = (fileName: string, task: string): void => {
  const filePath = path.join(__dirname);

  fs.appendFile(`${filePath}/${fileName}.txt`, task + '\n', () => {
    console.log('Tarefa criada com sucesso');
  });
};

taskManager(process.argv[2], process.argv[3]);
