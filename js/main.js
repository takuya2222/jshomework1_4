"use strict"

const tasks = ['掃除','買い物','散歩'];
const template = `
=========================
現在持っているタスク一覧
=========================
`;

let showTasks = () => {
  console.log(template);
  tasks.forEach(element => console.log(element));
  };

let addTodo = () => {
  const add = prompt('タスクを入力してください。');
  tasks.push(add);
  showTasks();
};  

showTasks();
addTodo();
