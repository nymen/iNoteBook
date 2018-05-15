<template>
  <div class="customer-page">
    <nav-bar @initHtmlEditor="initHtmlEditor"></nav-bar>
    <div class="editor-wrapper" v-if="isInit">
      <div class="editor-title-tip">记录点滴生活</div>
      <div class="editor-title mb-5">
        <input type="text" class="note-title" v-model.trim="noteTitle" placeholder="无标题笔记...">
        <div class="action-wrapper">
          <button class="mr-5 button-theme-pos" @click="saveNote">保存笔记</button>
          <button class="ml-5 button-theme-neg" @click="deleteNote">删除笔记</button>
        </div>
      </div>
      <html-editor @htmlUpdate="htmlUpdate"></html-editor>
    </div>
    <div class="note-wrapper" v-if="!isInit">
      <h2>笔记列表</h2>
      <div class="note-action">
        <div>
          <span>笔记排序</span>
          <select name="noteOrder" class="form-control">
            <option value="">日期-升序</option>
            <option value="">日期-降序</option>
            <option value="">创建-升序</option>
            <option value="">创建-降序</option>
          </select>
        </div>
        <div>
          <span>显示方式</span>
          <select name="showType">
            <option value="">详情</option>
            <option value="">方块</option>
          </select>
        </div>
        <div>批量删除</div>
      </div>
      <div class="note-list-detail">
        <div class="note-list">
          <div v-for="note in noteList" class="note-list-wrapper mar-15" :key="note._id" :id="note._id">
            <span class="title mb-10" :title="note.noteTitle">{{note.noteTitle}}</span>
            <span class="date mt-10 mb-10 pt-5 pb-5">{{note.createDate}}</span>
            <div class="note-content" v-html="note.noteContent"></div>
            <!--<div class="float-box-modal"></div>-->
            <div class="float-box">
              <div class="pad-5" @click="checkDetail(note)">查看详情</div>
              <div class="pad-5" @click="deleteNote">删除笔记</div>
            </div>
          </div>
        </div>
        <div class="note-detail pad-10" v-html="curNoteContent"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/common/component/navbar/NavBar';
  import HtmlEditor from '@/common/component/htmleditor/htmleditor'
  import axios from 'axios';

  export default {
    name: 'Customer',
    data() {
      return {
        isInit: false,
        noteList: null,
        noteTitle: '',
        noteContent: '',
        getHtmlFlag: false,
        curNoteContent: ''
      }
    },
    created() {
      this.getNoteList();
    },
    methods: {
      getNoteList() {
        let _userName = this.$route.query.userName;
        let _self = this;
        axios.post('/note/getNoteList', {
          params: {
            userName: _userName
          }
        }).then((response) => {
          let result = response.data.result;
          if (result && result.length) {
            result.forEach((item) => {
              let _date = item.createDate;
              let _f = _date.split('T');
              let _e = _f[1].split('.000Z');
              item.createDate = _f[0] + ' ' + _e[0];
            });
            _self.noteList = result;
          }
        });
      },
      checkDetail(note) {
        this.curNoteContent = note.noteContent;
      },
      initHtmlEditor(flag) {
        this.isInit = flag;
      },
      saveNote() {
        if (!this.noteTitle) {
          return;
        }
        let _userName = this.$route.query.userName;
        if (!_userName) {
          return;
        }
        axios.post('/ucenter/addNote', {
          params: {
            userName: _userName,
            noteTitle: this.noteTitle,
            noteContent: this.noteContent
          }
        }).then((response) => {
          let result = response.data.result;
          if (result === 'success') {
            alert('保存成功!');
            this.isInit = false;
            this.noteTitle = '';
            this.noteContent = '';
            this.getNoteList();
          } else {
            alert('保存失败!');
          }
        });
      },
      deleteNote() {
        this.isInit = false;
      },
      htmlUpdate(content) {
        this.noteContent = content;
      }
    },
    components: {
      NavBar,
      HtmlEditor
    }
  }
</script>

<style>
  /*创建笔记样式*/
  .customer-page {
    width: 80%;
    height: 100%;
    background-color: #e4e4e4;
    border-left: 1px solid #808080;
    border-right: 1px solid #808080;
    margin: auto;
  }

  .editor-title-tip {
    text-align: center;
    font-size: 20px;
    font-family: cursive;
    padding-top: 25px;
    padding-bottom: 15px;
  }

  .editor-title {
    position: relative;
    text-align: center;
  }

  div.action-wrapper {
    position: absolute;
    right: 20px;
    top: 0;
  }

  div.action-wrapper > button {
    height: 25px;
  }

  input.note-title {
    outline: none;
    border: none;
    border-bottom: 1px solid #808080;
    margin: 5px;
    width: 250px;
    text-align: center;
  }

  /*笔记列表样式*/
  div.note-wrapper {
    padding: 10px 20px;
  }

  div.note-wrapper > h2 {
    text-align: center;
    border-bottom: 2px solid #808080;
    margin-bottom: 0;
    padding-bottom: 10px;
    font-size: 20px;
    font-family: cursive;
  }

  div.note-box {
    display: flex;
    flex-direction: row;
    height: 500px;
    border: 1px solid #808080;
  }

  div.note-action {
    flex: 1 0 auto;
    overflow: hidden;
  }

  div.note-action > div {
    float: left;
    margin: 10px;
    padding: 5px 12px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #655959;
    color: white;
  }

  /*笔记列表详情*/
  .note-list-detail {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 500px;
    overflow: hidden;
    border: 2px solid #808080;
  }

  .note-list {
    width: 35%;
    flex: 0 0 auto;
    overflow: auto;
    border-right: 2px solid #808080;
  }

  .note-list > div {
    width: 180px;
    border-radius: 10px;
    display: inline-block;
    transition: all .5s ease-in;
  }

  .note-list > div:hover {
    border: 1px solid #808080;
    box-shadow: 0 0 1px 2px #9E9E9E;
  }

  .note-list-wrapper {
    border: 1px solid #808080;
    cursor: pointer;
    padding: 10px;
    position: relative;
  }

  .note-list-wrapper > span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .note-list-wrapper > span.title {
    font-weight: 700;
  }

  .note-list-wrapper > span.date {
    border-top: 1px solid #808080;
    border-bottom: 1px solid #808080;
  }

  .note-list-wrapper > div.note-content {
    height: 50px;
    overflow: hidden;
  }

  /*.note-list-wrapper > .float-box-modal {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .note-list-wrapper > div.float-box-modal:hover {
    opacity: 0.3;
    color: white;
    background-color: #000;
  }*/

  .note-list-wrapper .float-box {
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .note-list-wrapper .float-box:hover {
    opacity: 0.4;
    background-color: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    justify-content: space-around;
  }

  .note-list-wrapper .float-box > div{
    display: inline-block;
    color: #ffffff;
    font-weight: 700;
    border: 2px solid #ffffff;
    border-radius: 5px;
  }

  .note-detail {
    flex: 1 1 auto;
    overflow: auto;
  }
</style>
