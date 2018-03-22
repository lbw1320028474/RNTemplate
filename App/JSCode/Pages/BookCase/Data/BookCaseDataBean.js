import { observable, computed, action } from 'mobx'
import BookBean from './BookBean'
import LastReadBean from './LastReadBean'
/**
 * 书架数据实体类
 */
export default class BookCaseDataBean {
    /**
     * 是否全选
     */
    @observable
    isSelectedAll = false;

    /**
     * 阅读时间
     */
    @observable
    readTime = 0;

    /**
     * 书架的书列表
     */
    @observable
    bookCaseList = [];

    /**
    * 最后一次阅读的图书
    */
    @observable
    lastReadBook = new LastReadBean();


}



