<template>
    <div>
        <div @mouseleave="isShow=false;" class="panel">
            <div class="box">
                <ul class="tips-list">
                    <li style="float: left; margin:0 10px;" v-if="item.isChecked" v-for="(item,index) in list" :key="index">
                        <span class="tips">
                            {{item.text}}
                            <button @click="item.isChecked=false">x</button>
                        </span>
                    </li>
                </ul>
                <input @focus="isShow=true" style="width: 500px;" type="text">
                <button>+</button>
            </div>
            <div v-if="isShow" class="select-box">
                <div class="list">
                    <label v-for="(item,index) in list " :key="index" >
                        <input v-model="item.isChecked" type="checkbox">
                        <span>{{item.text}}</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
                data: function () {
                return {
                    isShow: false,
                    list: [{
                            id: 1,
                            isChecked: false,
                            text: '变更中'
                        },
                        {
                            id: 2,
                            isChecked: false,
                            text: '未生效'
                        },
                        {
                            id: 3,
                            isChecked: false,
                            text: '作废'
                        },
                        {
                            id: 4,
                            isChecked: false,
                            text: '正常'
                        },
                        {
                            id: 5,
                            isChecked: false,
                            text: '审核中'
                        },
                    ]
                }
            }
}
</script>

<style>
        *{margin:0;padding: 0;}
        .tips {
        }
        ul,li{
            list-style: none;
        }
        .box{
            position: relative;
        }
        .tips-list{
            position: absolute;
               left: 417px;
               top: -3px;
        }
        .select-box label{
            display: block;
        }
</style>
