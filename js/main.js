"use strict"

const tasks = [
  {'[内容]':'机を片付ける', '[ジャンル]':'掃除'},
  {'[内容]':'牛乳を買う', '[ジャンル]':'買い物'},
  {'[内容]':'散歩する', '[ジャンル]':'運動'},
];
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
  const addTask = prompt('タスクを入力してください。');
  const addGenre = prompt('ジャンルを入力してください。');
  tasks.push(`{[内容]:${addTask},[ジャンル]:${addGenre}}`);
  showTasks();
};  

showTasks();
addTodo();