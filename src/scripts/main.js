document.addEventListener('DOMContentLoaded', function() {
    const inputPace = document.getElementById('inputPace');
    const result200m = document.getElementById('result200m');
    const result300m = document.getElementById('result300m');
    const result400m = document.getElementById('result400m');
    const calculateButton = document.getElementById('calculateButton');

    calculateButton.addEventListener('click', function() {
        // 解析 mm:ss 格式
        const paceStr = inputPace.value.trim();
        let paceInSeconds;
        if (/^\d+:\d{1,2}$/.test(paceStr)) {
            const [min, sec] = paceStr.split(':').map(Number);
            paceInSeconds = min * 60 + sec;
        } else if (/^\d+(\.\d+)?$/.test(paceStr)) {
            // 支援純分鐘小數格式
            paceInSeconds = parseFloat(paceStr) * 60;
        } else {
            alert('請輸入有效的配速（分鐘:秒 或 分鐘）');
            return;
        }

        const pace200m = Math.round((paceInSeconds * 200) / 1000); // 200公尺配速
        const pace300m = Math.round((paceInSeconds * 300) / 1000); // 300公尺配速
        const pace400m = Math.round((paceInSeconds * 400) / 1000); // 400公尺配速

        result200m.textContent = pace200m;
        result300m.textContent = pace300m;
        result400m.textContent = pace400m;
    });
});