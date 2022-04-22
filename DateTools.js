/**
 * 数据库时间格式转日期
 */

 String.prototype.ChangeDate = function () {
    
    var date = new Date(parseInt(this.replace("/Date(", "").replace(")/", ""), 10));
    return date;
    
}

/**
 * 时间加小时
 * @param {h}  小时
 */
Date.prototype.AddHours = function (h) {
    var date=new Date( new Date(this).setHours(this.getHours() + h));
   
    return date;
}
/**
 * 时间加分钟
 * @param {m}  分钟
 */
Date.prototype.AddMinutes = function (m) {
    var date = new Date(new Date(this).setMinutes(this.getMinutes() + m));

    return date;
}
/**
 * 时间加秒
 * @param {m}  秒
 */
Date.prototype.AddSeconds = function (s) {
    var date = new Date(new Date(this).setSeconds(this.getSeconds() + s));

    return date;
}
/**
 * 时间相差 绝对值
 * @param {date}  另一个时间
 */
 Date.prototype.Difference = function (date) {
    if (!date) {
        return Math.floor(Math.abs((new Date() - this) / 1000 / 60))
    }
    return Math.floor(Math.abs((date - this) / 1000 / 60))
}
/**
 * 时间相减法
 * @param {date}  另一个时间（默认当前）
 */
Date.prototype.Sub = function (date) {
    if (!date) { 
        return Math.floor((this - new Date()) / 1000 / 60)
    }
    return Math.floor(( this-date ) / 1000 / 60)
}
/**
 * 日期格式化 需要使用到的padStart方法
 * 老的浏览器也可能没有，所以重写一下
 */
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0;
        padString = String(typeof padString !== 'undefined' ? padString : ' ');
        if (this.length > targetLength) {
            return String(this);
        } else {
            targetLength = targetLength - this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength / padString.length);
                //append to original to ensure we are longer than needed 
            } return padString.slice(0, targetLength) + String(this);
        }
    };
}
/**
 * 日期格式化
 * @param {fmt}  yyyy-MM-dd hh:mm:ss
 */
Date.prototype.format = function (fmt) {
    var ret;
    var opt = {
        "y+": this.getFullYear().toString(),        // 年
        "M+": (this.getMonth() + 1).toString(),     // 月
        "d+": this.getDate().toString(),            // 日
        "h+": this.getHours().toString(),           // 时
        "m+": this.getMinutes().toString(),         // 分
        "s+": this.getSeconds().toString(),          // 秒
        "H+": this.getHours()>12?(this.getHours()-12).toString():this.getHours().toString(), //十二小时制时间
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (var k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")));
        }
    }
    return fmt;
}
