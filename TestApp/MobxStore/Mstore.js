
// 订单store
class Mstore {
    // 无须成为被观察对象
    allDatas = []
    constructor(rootStore) {
        this.rootStore = rootStore
    }
}

// 返回RootStore实例 
export default new Mstore()