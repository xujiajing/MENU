import React from "react";
import $ from "jquery";
import "./style.css";

export default class MenuPage extends React.Component {
    constructor(props) {
        super(props);
        this.onMenuClicked = this.onMenuClicked.bind(this);
    }

    onMenuClicked(ev) {      
        let node = $(ev.target); // 被点击的<h1>    
        let subMenu = node.next(); // 属于<h1>的相邻子菜单列表    
        subMenu.css("display", subMenu.css('display') == "none" ? "block" : "none"); // 显示/隐藏这个列表
    }

    generateMenu(menuObj) { //递归生成菜单
        let vdom = [];
        if (menuObj instanceof Array) {
            let list = [];
            for (var item of menuObj) {
                list.push(this.generateMenu(item));
            }
            vdom.push(
                <ul key="single">
                    {list}
                </ul>
            );
        } else {
            vdom.push(
                <li key={menuObj.menuId} style={{cursor:"pointer"}}>
                    <h1 onClick={this.onMenuClicked}>
                        {menuObj.name}
                    </h1>
                    {this.generateMenu(menuObj.children)}
                </li>
            );
        }
        return vdom;
    }

    render() {
        let data = [
            {
                menuId: 1,
                name: '工单管理',
                children: [
                    {
                        menuId: 3,
                        name: '工单设定',
                        children: []
                    },
                    {
                        menuId: 4,
                        name: '工单查询',
                        children: []
                    }
                ],
            },
            {
                menuId: 2,
                name: '成品管理',
                children: [
                    {
                        menuId: 5,
                        name: '成品抽检',
                        children: []
                    },
                    {
                        menuId: 6,
                        name: '维修管理',
                        children: []
                    },
                    {
                        menuId: 7,
                        name: '半成品管理',
                        children: [
                            {
                                menuId: 8,
                                name: '半成品抽检',
                                children: []
                            },
                            {
                                menuId: 9,
                                name: '半成品维修',
                                children: []
                            }
                        ]
                    }
                ],
            },
            
        ];

        return (
            <div className="MenuStyle">
                {this.generateMenu(data)}
            </div>
        );
    }
}

MenuPage.contextTypes = {
    router: () => { React.PropTypes.object.isRequired }
};
