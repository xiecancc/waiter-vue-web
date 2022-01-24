<template>
    <div class="app-container">
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="5" style="margin-bottom: 10px">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>个人信息</span>
                    </div>
                    <div>
                        <div style="text-align: center">
                            <div class="el-upload">
                                <img src="https://blog20211013.oss-cn-shenzhen.aliyuncs.com/%E6%9C%BA%E5%99%A8%E4%BA%BA%20(2).png?versionId=CAEQMxiBgMDJgeHI8xciIDk0ZGY5ZWZmODE2YzQ3YjA4ZjhkZmZlMjgxY2IxNzk5"
                                     title="点击上传头像" class="avatar">
                            </div>
                        </div>
                        <ul class="user-info">
                            <li>
                                <div style="height: 100%">
                                    <svg-icon icon-class="login"/>
                                    学号
                                    <div class="user-right">{{ user.username }}</div>
                                </div>
                            </li>
                            <li>
                                <svg-icon icon-class="user1"/>
                                姓名
                                <div class="user-right">{{ user.nickName }}</div>
                            </li>
                            <li>
                                <svg-icon icon-class="dept"/>
                                民族
                                <div class="user-right"> {{ user.nationality }}</div>
                            </li>
                            <li>
                                <svg-icon icon-class="dept"/>
                                性别
                                <div class="user-right"> {{ user.sex }}</div>
                            </li>
                            <li>
                                <svg-icon icon-class="dept"/>
                                所属学院
                                <div class="user-right"> {{ user.college }}</div>
                            </li>
                            <li>
                                <svg-icon icon-class="phone"/>
                                手机号码
                                <div class="user-right">{{ user.phone }}</div>
                            </li>
                            <li>
                                <svg-icon icon-class="email"/>
                                用户邮箱
                                <div class="user-right">{{ user.email }}</div>
                            </li>
                            <li>
                                <svg-icon icon-class="user1"/>
                                政治身份
                                <div class="user-right">{{ user.identity }}</div>
                            </li>
                            <li>
                                <svg-icon icon-class="user1"/>
                                地区
                                <div class="user-right">{{ user.identity }}</div>
                            </li>

                            <li>
                                <svg-icon icon-class="anq"/>
                                安全设置
                                <div class="user-right">
                                    <a>修改密码</a>
                                    <a>修改邮箱</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="16" :lg="18" :xl="19">
                <!--    用户资料    -->
                <el-card class="box-card">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="用户资料" name="first">
                            <el-form ref="form" :model="form" :rules="rules" style="margin-top: 10px;" size="small"
                                     label-width="65px">
                                <el-form-item label="昵称" prop="nickName">
                                    <el-input v-model="form.nickName" style="width: 35%"/>
                                    <span style="color: #C0C0C0;margin-left: 10px;">用户昵称不作为登录使用</span>
                                </el-form-item>
                                <el-form-item label="手机号" prop="phone">
                                    <el-input v-model="form.phone" style="width: 35%;"/>
                                    <span style="color: #C0C0C0;margin-left: 10px;">手机号码不能重复</span>
                                </el-form-item>
                                <el-form-item label="性别">
                                    <el-radio-group v-model="form.gender" style="width: 178px">
                                        <el-radio label="男">男</el-radio>
                                        <el-radio label="女">女</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="">
                                    <el-button size="mini" type="primary">保存配置</el-button>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                        <!--    我的课程    -->
                        <el-tab-pane label="我的课程" name="second">
                        </el-tab-pane>
                        <!--    我的成绩    -->
                        <el-tab-pane label="我的成绩" name="third">
                            <!--操作栏 begin-->
                            <div class="handle-box">
                                <el-dropdown>
                                    <el-button type="primary">
                                        选择学期<i class="el-icon-arrow-down el-icon--right"></i>
                                    </el-button>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>黄金糕</el-dropdown-item>
                                        <el-dropdown-item>狮子头</el-dropdown-item>
                                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                        <el-dropdown-item>双皮奶</el-dropdown-item>
                                        <el-dropdown-item>蚵仔煎</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                                <el-tag style="margin-left: 15px" size="medium" color="#00d1b2" effect="dark">2020-2021-1</el-tag>
                            </div>
                            <el-table
                                    :data="grade"
                                    style="width: 100%"
                                    :row-class-name="tableRowClassName">
                                <el-table-column
                                        prop="term"
                                        label="学期"
                                        width="100">
                                </el-table-column>
                                <el-table-column
                                        prop="courseid"
                                        label="课程号"
                                        width="100">
                                </el-table-column>
                                <el-table-column
                                        prop="course"
                                        label="课程名称"
                                        width="150">
                                </el-table-column>
                                <el-table-column
                                        prop="regularScore"
                                        label="平时成绩"
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="experimentScore"
                                        label="实验成绩"
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="finalScore"
                                        label="期末成绩"
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="credit"
                                        label="学分"
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="coursecategory"
                                        label="课程属性"
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="courseNature"
                                        label="课程性质"
                                        align="center">
                                </el-table-column>
                                <el-table-column
                                        prop="examNature"
                                        label="考试性质">
                                </el-table-column>
                            </el-table>
                        </el-tab-pane>
                    </el-tabs>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import { isvalidPhone } from '@/utils/validate'
    export default {
        name: "center",
        data() {
            // 自定义验证
            const validPhone = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('请输入电话号码'))
                } else if (!isvalidPhone(value)) {
                    callback(new Error('请输入正确的11位手机号码'))
                } else {
                    callback()
                }
            }
            return {
                activeName: 'first',
                user: {
                    username: '18251104126',
                    nickName: '小阳阳',
                    nationality: '汉族',
                    sex: '男',
                    college: '信息学院',
                    phone: '15766743463',
                    email: 'waiterxiaoyy@qq.com',
                    identity: '中共党员',
                    area: ''
                },
                form: {},
                rules: {
                    nickName: [
                        { required: true, message: '请输入用户昵称', trigger: 'blur' },
                        { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, trigger: 'blur', validator: validPhone }
                    ]
                },
                grade: [
                    {
                        studentid: "18251104126",
                        term: "2020-2021-1",
                        courseid: "16036303",
                        course: "人机交互技术",
                        regularScore: 87,
                        experimentScore: 0,
                        finalScore: 95,
                        totalmark: 93,
                        credit: 3,
                        coursecategory: "必修",
                        courseNature: "专业课",
                        examNature: "正常考试"
                    },
                    {
                        studentid: "18251104126",
                        term: "2020-2021-1",
                        courseid: "16036303",
                        course: "人机交互技术",
                        regularScore: 87,
                        experimentScore: 0,
                        finalScore: 95,
                        totalmark: 93,
                        credit: 3,
                        coursecategory: "必修",
                        courseNature: "专业课",
                        examNature: "正常考试"
                    },
                    {
                        studentid: "18251104126",
                        term: "2020-2021-1",
                        courseid: "16036303",
                        course: "人机交互技术",
                        regularScore: 87,
                        experimentScore: 0,
                        finalScore: 95,
                        totalmark: 93,
                        credit: 3,
                        coursecategory: "必修",
                        courseNature: "专业课",
                        examNature: "正常考试"
                    },
                    {
                        studentid: "18251104126",
                        term: "2020-2021-1",
                        courseid: "16036303",
                        course: "人机交互技术",
                        regularScore: 87,
                        experimentScore: 0,
                        finalScore: 95,
                        totalmark: 93,
                        credit: 3,
                        coursecategory: "必修",
                        courseNature: "专业课",
                        examNature: "正常考试"
                    },
                    {
                        studentid: "18251104126",
                        term: "2020-2021-1",
                        courseid: "16036303",
                        course: "人机交互技术",
                        regularScore: 87,
                        experimentScore: 0,
                        finalScore: 95,
                        totalmark: 93,
                        credit: 3,
                        coursecategory: "必修",
                        courseNature: "专业课",
                        examNature: "正常考试"
                    },
                ]
            }
        },
        created() {
            this.form = {
                id: this.user.id,
                nickName: this.user.nickName,
                gender: this.user.gender,
                phone: this.user.phone
            }
        },
        methods: {
            toggleShow() {
                this.show = !this.show
            },
            handleClick(tab, event) {
                if (tab.name === 'second') {
                    this.init()
                }
            },
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .avatar {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }
    .user-info {
        padding-left: 0;
        list-style: none;
        li{
            border-bottom: 1px solid #F0F3F4;
            padding: 11px 0;
            font-size: 13px;
        }
        .user-right {
            float: right;
            a{
                color: #317EF3;
            }
        }

    }
    .handle-box {
        margin-bottom: 20px;
    }

</style>