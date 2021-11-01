import { observable, action } from 'mobx';

export default class GlobalStore {
  @observable appTitle = '飞速创新UI管理平台';

  @observable collapsed = false; //菜单栏收起

  @observable userInfo = {
    //当前用户信息
    loginName:"fscx",
  }

  @action.bound toggleCollapsed(){
    this.collapsed = !this.collapsed;
  } 

  @action.bound setData(data={}){
    Object.entries(data).forEach(item=>{
      this[item[0]] = item[1]
    })
  }
}
