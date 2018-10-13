<template>
 <div>
    <router-link  to="/">返回首页</router-link>
    <p>我是表头冻结表格组件</p>
    <!-- element-ui实现 -->
    <!-- <el-table :data="tableData3" height="250" border style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
    </el-table> -->
    <div class="fixed-tab">
        <div id="scrollTable">
            <table class="thead">
                <col width="170px"></col> 
                <col width="170px"></col> 
                <col width="170px"></col>
                <col></col>
                <tbody>
                    <tr>
                        <th>深圳</th>
                        <th>上海</th>
                        <th>北京</th>
                        <th>杭州</th>
                    </tr>
            </tbody>
            </table>
        <div>
      <table class="tbody"> 
        <col width="170px"></col> 
        <col width="170px"></col> 
        <col width="170px"></col>
        <col></col>
            <tbody>
                <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
                <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
                <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
                <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
                <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
                <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
                <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
                <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
                <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
                <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
                <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
                <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
                <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    </div>
 </div>
    
</template>

<script>
export default {
data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
}
</script>

<style>
    a {
    color: #42b983;
    }
    .fixed-tab{
        margin:0 auto;
        width:701px;
    }
    #scrollTable {
        width:701px;
        border: 1px solid #42b983;
        background: #42b983;
    }
    #scrollTable table {
        border-collapse:collapse; /*统一设置两个table为细线表格*/
    }
   /* 表头 div的第一个子元素 */
    #scrollTable table.thead{
        width:100%;
    }
    /*表头*/
    #scrollTable table.thead th{
        border: 1px solid #42b983;
        border-right:#42b983;
        color:#fff;
        background: #42b983;
    }

    /*能带滚动条的表身*/
    /*div的第二个子元素*/
    #scrollTable div{
        width:100%;
        height:200px;
        overflow:auto;/*必需*/
        scrollbar-face-color:#EB8;/*那三个小矩形的背景色*/
        scrollbar-base-color:#ece9d8;/*那三个小矩形的前景色*/
        scrollbar-arrow-color:#FF8C00;/*上下按钮里三角箭头的颜色*/
        scrollbar-track-color:#ece9d8;/*滚动条的那个活动块所在的矩形的背景色*/
        scrollbar-highlight-color:#800040;/*那三个小矩形左上padding的颜色*/
        scrollbar-shadow-color:#800040;/*那三个小矩形右下padding的颜色*/
        scrollbar-3dlight-color: #EB8;/*那三个小矩形左上border的颜色*/
        scrollbar-darkshadow-Color:#EB8;/*那三个小矩形右下border的颜色*/
    }

    /*能带滚动条的表身的正体*/
    #scrollTable table.tbody{
        width:100%;
        border: 1px solid #C96;
        border-right:#B74;
        color:#666666;
        background: #ECE9D8;
    }

    /*能带滚动条的表身的格子*/
    #scrollTable table.tbody td{
        border:1px solid #42b983;
    }
</style>
