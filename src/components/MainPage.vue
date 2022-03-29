<template>
  <div class="main-page">
    <div class="left-menu">
      <!-- ノートリスト -->
      <NoteItem 
      v-for="note in noteList" 
      :note="note" 
      :key="note.id" 
      />
      <button class="transparent" @click="onClickButtonAdd">
        <i class="fas fa-plus-square"></i>ノートを追加
      </button>
    </div>
    <div class="right-view">
      右ビュー
    </div>
  </div>
</template>

<script>
import NoteItem from '@/components/parts/NoteItem.vue'

export default {
  data() {
    return {
      noteList: [],
    }
  },
  methods: {
    onClickButtonAdd : function() {
      this.noteList.push({
        id: new Date().getTime().toString(16),
        name: `新規ノート`,
      });
    },
  },
  components: {
    NoteItem,
  },
}
</script>

<style scoped lang="scss">
.main-page {
  display: flex;
  height: calc(100vh - 60px);
  .left-menu {
    width: 350px;
    background-color: #f7f6f3;
   .note {
      margin: 10px 0;
      display: flex;
      align-items: center;
      padding: 5px;
      color: rgba(25, 23, 17, 0.6);
      .note-icon {
        margin-left: 10px;
      }
      .note-name {
        width: 100%;
        padding: 3px 10px;
      }
    } 
  }
  .right-view {
    flex-grow: 1;
    padding: 10px;
  }
}
</style>