
import { observable, computed, action } from 'mobx'
/**
 * 正在阅读的图书实体类
 */
export default class LastReadBean {
    @observable bookId = '';
    @observable bookName = '';
    @observable bookCover = '';
    @observable hasNew = false;
    @observable isSelected = false;
    @observable lastChapterName = '';
    @observable readed = '';        //已经阅读了的百分百

    @action
    setLastBookInfo(lastBookInfo) {
        if (lastBookInfo) {
            let that = this;
            that.bookId = lastBookInfo.bookId;
            that.bookName = lastBookInfo.bookName;
            that.bookCover = lastBookInfo.bookCover;
            that.hasNew = lastBookInfo.hasNew;
            that.isSelected = lastBookInfo.isSelected;
            that.lastChapterName = lastBookInfo.lastChapterName;
            that.readed = lastBookInfo.readed;
        }
    }
}