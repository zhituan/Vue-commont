<template>
  <li @mouseenter="handleEnter(isEnter)" @mouseleave="handleEnter(!isEnter)" :style="{background:isColor}">
    <label>
      <input type="checkbox" v-model="item.complete"/>
      <span>{{item.name}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
    export default {
      props:{
        item:Object,
        deleteTodo: {
          type: Function,
          required:true
        },
        index:Number
      },
      data(){
        return {
          isShow: false,
          isColor:'#fff',
          isEnter:true
        }
      },
      methods:{
        handleEnter(isEnter){
          if(isEnter){
            this.isShow = true
            this.isColor = '#cccccc'
          }else{
            this.isShow = false
            this.isColor = '#fff'
          }
        },
        deleteItem(){
          this.deleteTodo(this.index)
        }
      }

    }
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
