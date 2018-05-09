export function getTodos() {
  return JSON.parse(localStorage.getItem('todos_key') || '[]')
}
export function saveTodos(value) {
  localStorage.setItem('todos_key',JSON.stringify(value))

}
//以上暴露是向外暴露对象，对象中有两个方法getTodos  saveTodos
