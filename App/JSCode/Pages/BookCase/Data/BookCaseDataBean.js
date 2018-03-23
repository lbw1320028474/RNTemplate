import { observable, computed, action } from 'mobx'
import BookBean from './BookBean'
import LastReadBean from './LastReadBean'
/**
 * 书架数据实体类
 */
export default class BookCaseDataBean {
    constructor() {
        let bookBean = new BookBean();
        bookBean.bookName = "蝴蝶花开"
        bookBean.bookCover = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521737908503&di=6b7840789d49493bbf8e29c3251faf5f&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dfe5ba490e6fe9925cb596154019872e9%2F6159252dd42a2834f0e98a5e5db5c9ea15cebf1c.jpg";
        this.bookCaseList.push(bookBean);

        let bookBean1 = new BookBean();
        bookBean1.bookName = "蝴蝶花开"
        bookBean1.bookCover = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521737978850&di=20ffea2a6241ad6b78e0de434be0d079&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F4bed2e738bd4b31c023b2a8685d6277f9e2ff88c.jpg";
        this.bookCaseList.push(bookBean1);

        let bookBean2 = new BookBean();
        bookBean2.bookName = "蝴蝶花开"
        bookBean2.bookCover = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521737978849&di=ee766183dac572a27bfca8a42e564803&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f8ae5a117fb3a80121985c0bd36b.jpg%401280w_1l_2o_100sh.jpg";
        this.bookCaseList.push(bookBean2);

        let bookBean3 = new BookBean();
        bookBean3.bookName = "蝴蝶花开"
        bookBean3.bookCover = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521737978849&di=947122b6b2f3e892c70861db6b094e0d&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F3ac79f3df8dcd10086324bf5738b4710b8122fb3.jpg";
        this.bookCaseList.push(bookBean3);

        let bookBean4 = new BookBean();
        bookBean4.bookName = "蝴蝶花开"
        bookBean4.bookCover = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521737978873&di=c6346dedc98eaa88c2b70bbf1747c9ed&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fa50f4bfbfbedab644313c863f336afc379311e2b.jpg";
        this.bookCaseList.push(bookBean4);

        let bookBean5 = new BookBean();
        bookBean5.bookName = "蝴蝶花开"
        bookBean5.bookCover = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521737978872&di=52432896c5c1c013b6bb776f8796813c&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fcaef76094b36acaffc053d1e7ad98d1000e99c6f.jpg";
        this.bookCaseList.push(bookBean5);

        let bookBean6 = new BookBean();
        bookBean6.bookName = "蝴蝶花开"
        bookBean6.bookCover = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521738051488&di=203f51332078f7e63a2932baace29215&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fbaike%2Fc0%253Dbaike60%252C5%252C5%252C60%252C20%253Bt%253Dgif%2Fsign%3Dfa73e6ffd662853586edda73f1861da3%2Fb151f8198618367abb97e3d02d738bd4b31ce5a5.jpg";
        this.bookCaseList.push(bookBean6);

        let bookBean7 = new BookBean();
        bookBean7.bookName = "蝴蝶花开"
        bookBean7.bookCover = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521738102136&di=6266cd346985559e8314264a942219f1&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0189545935a597a8012193a3e84e16.jpg%402o.jpg";
        this.bookCaseList.push(bookBean7);

        let bookBean8 = new BookBean();
        bookBean8.bookName = "蝴蝶花开"
        bookBean8.bookCover = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521738102136&di=f290a5619f3e83b4f2bba617b9b34521&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01de865a117faea801204a0edd259e.jpg%401280w_1l_2o_100sh.jpg";
        this.bookCaseList.push(bookBean8);

        let bookBean9 = new BookBean();
        bookBean9.bookName = "蝴蝶花开"
        bookBean9.bookCover = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521738102135&di=4a8ec1e424af3323b412226928aea20c&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F4bed2e738bd4b31c023b2a8685d6277f9e2ff88c.jpg";
        this.bookCaseList.push(bookBean9);

        let bookBean10 = new BookBean();
        bookBean10.bookName = "蝴蝶花开"
        bookBean10.bookCover = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521737908503&di=6b7840789d49493bbf8e29c3251faf5f&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dfe5ba490e6fe9925cb596154019872e9%2F6159252dd42a2834f0e98a5e5db5c9ea15cebf1c.jpg";
        this.bookCaseList.push(bookBean10);
    }

    /**
     * ScrollView滑动距离
     */
    @observable
    scrollViewScrollY = 0;

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


    @observable inSelect = false;       //是否处于编辑状态

    /**
     * 
     * @param {*} isInSelect 修改是否处于编辑状态，默认是false
     */
    @action
    setInSelect(isInSelect = false) {
        this.inSelect = isInSelect;
        if (isInSelect) {
            if (this.bookCaseList && this.bookCaseList.length > 0) {
                this.bookCaseList.map((item, index) => {
                    item.isSelected = false;
                })
            }
        }
    }
}



