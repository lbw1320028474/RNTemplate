import { observable } from 'mobx'
/**
 * 书架列表图书实体类
 */
export default class BookBean {
    @observable bookId = '';
    @observable bookName = '';
    @observable bookCover = '';
    @observable hasNew = false;
    @observable isSelected = false;
    @observable lastChapterName = '';
}