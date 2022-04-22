////购物车 数组相关
/**
 *添加商品
 * @param {item}  另一个时间（默认当前）
 * @param {p}  对比的字段
 * @param {f}  列表字段
 */
 Array.prototype.Add = function (item, p, f) {

    var hava = false;
    for (var i = 0; i < this.length; i++) {
        if (item[p] == this[i][p]) {
            hava = true;
            f(this[i]);
            break;
        }
    }
    if (!hava) {

        this.push(item);
    }
}
/**
 * 计算总和 
 * @param {p}  需要计算的字段
 */
Array.prototype.Sum = function (p) {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += Number(this[i][p]);
    }
    return sum;
} 
/**
 * 根据主要字段获取当前列表的对象
 * @param {item}  需要寻找的对象
 *  @param {p}  字段
 */
Array.prototype.IndexItem = function (item, key) {
    //var sum = 0;
    for (var i = 0; i < this.length; i++) { 
        if (this[i][key] == item[key]) {
            return this[i];
        }
    }
    return null;
}
/**
 * 根据主要字段删除当前列表的对象
 * @param {item}  需要寻找的对象
 *  @param {key}  字段
 */
Array.prototype.Remove = function (item, key) {
    this.forEach(function (_item, index, arr) {
        if (_item[key] == item[key]) {
            arr.splice(index, 1);
        }
    });
}