import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    //定义构造方法,初始化组件state
    constructor(props) {
        super(props);
        // 定义组件状态数据结构
        this.state = {
            list: [],
            inputValue: ''
        }
    }

    // 定义添加任务按钮单击事件
    // 每次点击按钮都会将input中输入的值，作为数组的一项添加到state的list[]中去
    handleBtnClick() {
        // 调用 react组件默认担任的 setState 修改组件状态数据
        // 需要注意React中一直强调的 数据不可变
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        });
    }

    //定义input框 onChange 事件
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    /**
     * 删除列表项处理函数
     * @param {*} index 要删除的列表项索引号
     */
    handleDelete(index) {
        // 实际上是要修改 state.list 属性的值
        // 所以，不可变性的原因
        const list = [...this.state.list];//复制一个副本
        list.splice(index, 1);//从list中截取指定索引
    }

    //定义获取所有列表项逻辑函数
    getTodoItems() {
        return (
            this.state.list.map((item, index) => {
                return (
                    <TodoItem delete={this.handleDelete}
                    key={index}
                    content={item}
                    index={index}
                    />
                )
            })
        )
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange} />
                    <button onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>{this.getTodoItems}</ul>{/* 调用子组件,显示列表项 */}
            </Fragment>
        );
    }
}