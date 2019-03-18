import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        //通过父组件传递来的回调函数，删除指定id的列表项
        //注意此处调用用的实际上是在父组件中定义的通过props.delete传递过来的方法
        this.props.delete(this.props.index);
    }

    render() {
        const { content } = this.props;//使用解构语法，声明一个不可变量 content
        return (
            <div onClick={this.handleDelete}>{content}</div>
        );
    }
}

export default TodoItem;