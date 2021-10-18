(function () {
    var index = 1;
    var wrap = document.getElementsByClassName('guestMsgWrap')[0],
        msg = document.getElementById("msgLoader");

    $('#sendBtn').click(function (e) {
        // 如果输入框中无内容则点击发送按钮无效
        if (msg.value === "") return false;

        // 创建 li 装载留言
        var 
            wrapFirstChild = wrap.firstElementChild,
            li = document.createElement('li'),
            divInfo = document.createElement('div'),
            spanFloor = document.createElement('span'),
            spanTime = document.createElement('span'),
            divTxt = document.createElement('div');

        // 获取点击的日期和时间
        var 
            date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth(),
            days = date.getDate(),
            Hour = date.getHours(),
            Hour = Hour < 9 ? "0"+Hour : Hour;
            minutes = date.getMinutes(),
            minutes = minutes < 9 ? "0"+minutes : minutes;
            seconds = date.getSeconds();
            seconds = seconds < 9 ? "0"+seconds : seconds;
        
        // 添加类名
        divInfo.className = "msgInfo";
        spanFloor.className = "floor";
        spanFloor.innerText = "# " + index++ + "楼";
        spanTime.className = "msgTime";
        spanTime.innerText = `${year}-${month}-${days} ${Hour}:${minutes}:${seconds}`;
        divInfo.appendChild( spanFloor );
        divInfo.appendChild( spanTime )

        divTxt.className = "msgText";
        divTxt.innerText = msg.value;

        li.appendChild( divInfo );
        li.appendChild( divTxt );

        // 在顶部插入留言
        wrap.insertBefore(li, wrapFirstChild);

        // 发送完之后清空输入框中内容
        msg.value = "";
    })
})();