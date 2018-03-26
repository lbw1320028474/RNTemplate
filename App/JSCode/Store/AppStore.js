import { observable, computed, action } from 'mobx'
import BookCaseDataBean from '../Pages/BookCase/Data/BookCaseDataBean'
/**
 * 书架数据实体类
 */
export default class AppStore {
    @observable
    isHiddenNavbar = false;     //是否隐藏tab导航栏

    @observable
    bookCaseDataBean = new BookCaseDataBean();      //小说书架数据
    
}



