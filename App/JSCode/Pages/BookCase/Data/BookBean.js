import { observable } from 'mobx'
/**
 * 书架列表图书实体类
 */
export default class BookBean {
    @observable bookId = '';
    @observable bookName = '';
    @observable bookCover = '';
    @observable hasNew = false;//是否有新章节
    @observable isSelected = false;//是否处于选中状态
    @observable lastChapterName = '';
}