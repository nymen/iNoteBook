<template>
  <div class="provider-page">
    <div class="ticket-info">
      <div class="upload-tips">
        <p>1. 上传的发票信息必须真实有效</p>
        <p>2. 请仔细核对发票的信息以免填写错误</p>
        <p>3. 上传成功后请暂时妥善保存发票，等待工作人员联系</p>
        <p>4. 如有违反，后果自负</p>
      </div>
      <div class="ticket-upload pt-5 pb-5">
        <div class="mar-5 pad-5 upload-info ticket-number">
          <span class="mr-5">发票号码</span>
          <input type="text" class="input-theme-2">
        </div>
        <div class="mar-5 pad-5 upload-info ticket-time">
          <span class="mr-5">发票时间</span>
          <input type="text" class="input-theme-2">
        </div>
        <div class="mar-5 pad-5 upload-info ticket-fee">
          <span class="mr-5">发票金额</span>
          <input type="text" class="input-theme-2">
        </div>
        <div class="mar-5 pad-5 upload-info ticket-submit">
          <button class="button-theme-pos mr-5" @click="confirm">确定</button>
          <button class="button-theme-neg ml-5" @click="reset">重置</button>
        </div>
      </div>
      <div class="ticket-history pt-10 pb-10">
        <div class="mar-5 pad-5" @click="personalTickets">个人上传发票集</div>
        <div class="mar-5 pad-5" @click="selectedTickets">个人被选中发票</div>
        <div class="mar-5 pad-5" @click="incomeRank">个人收入排名</div>
        <div class="mar-5 pad-5" @click="ticketViews">今日看点</div>
      </div>
    </div>
  </div>
</template>

<script type="es6">
  import '@/common/style/box.css';
  import '@/common/style/input.css';
  import '@/common/style/button.css';
  import './../style/overview.css'
  import validation from '@/common/tools/validation';

  export default {
    name: 'Provider',
    data() {
      return {}
    },
    methods: {}
  }
</script>
