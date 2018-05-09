<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader :addTodo="addTodo"/> <!--传入的是引用变量-->
        <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
        <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAll="selectAll"/>
      </div>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader'
  import TodoList from './components/TodoList'
  import TodoFooter from './components/TodoFooter'
  import { getTodos ,saveTodos } from './utils/storageUtils'
    export default {
      components: { TodoHeader, TodoList, TodoFooter},
      data() {
        return {
          todos: getTodos() //读取localStorage中的数据
        }
      },
      methods:{
        addTodo(todo){
          this.todos.unshift(todo)
        },
        deleteTodo(index){
          this.todos.splice(index ,1)
        },
        deleteCompleteTodos(){
          this.todos = this.todos.filter(todo => !todo.complete)
        },
        //全选、全不选
        selectAll(isSelectAll){
          this.todos.forEach(todo => {
            todo.complete = isSelectAll
          })
        }
      },
      watch:{
        todos:{
          deep:true,//深度监视
          handler: saveTodos
            //将数据保存到localStorage，注意保存时要转换为Json
          /*
            以上写法等同于
            function (value) {
              localStorage.setItem('todos_key',JSON.stringify(value))
            }
            分析：handler的值是一个函数，saveTodos是一个方法，handler: saveTodos 相当于将
            saveTodos的函数体给复制过来了
          */
        }
      }

    }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
