
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
}