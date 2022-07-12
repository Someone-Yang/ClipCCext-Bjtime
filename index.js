const { Extension, type, api } = require('clipcc-extension');

class timeExtension extends Extension {
    onInit() {
        //分组
        api.addCategory({
            categoryId: 'someoneyang.bjtime.category',
            messageId: 'someoneyang.bjtime.category',
            color: '#00C2E3'
        });

        //北京时间
        api.addBlock({
            opcode: 'someoneyang.bjtime.bjtimefull',
            type: type.BlockType.REPORTER,
            messageId: 'someoneyang.bjtime.bjtimefull',
            categoryId: 'someoneyang.bjtime.category',
            function: () => this.getFullTime()
        });

        api.addBlock({
            opcode: 'someoneyang.bjtime.bjtimeyea',
            type: type.BlockType.REPORTER,
            messageId: 'someoneyang.bjtime.bjtimeyea',
            categoryId: 'someoneyang.bjtime.category',
            function: () => this.getYea()
        });

        api.addBlock({
            opcode: 'someoneyang.bjtime.bjtimemon',
            type: type.BlockType.REPORTER,
            messageId: 'someoneyang.bjtime.bjtimemon',
            categoryId: 'someoneyang.bjtime.category',
            function: () => this.getMon()
        });

        api.addBlock({
            opcode: 'someoneyang.bjtime.bjtimeday',
            type: type.BlockType.REPORTER,
            messageId: 'someoneyang.bjtime.bjtimeday',
            categoryId: 'someoneyang.bjtime.category',
            function: () => this.getDay()
        });

        api.addBlock({
            opcode: 'someoneyang.bjtime.bjtimehou',
            type: type.BlockType.REPORTER,
            messageId: 'someoneyang.bjtime.bjtimehou',
            categoryId: 'someoneyang.bjtime.category',
            function: () => this.getHou()
        });

        api.addBlock({
            opcode: 'someoneyang.bjtime.bjtimemin',
            type: type.BlockType.REPORTER,
            messageId: 'someoneyang.bjtime.bjtimemin',
            categoryId: 'someoneyang.bjtime.category',
            function: () => this.getMin()
        });

        api.addBlock({
            opcode: 'someoneyang.bjtime.bjtimesec',
            type: type.BlockType.REPORTER,
            messageId: 'someoneyang.bjtime.bjtimesec',
            categoryId: 'someoneyang.bjtime.category',
            function: () => this.getSec()
        });
    }

    getFullTime() {
        var e2shttpRequest = new XMLHttpRequest();
        e2shttpRequest.open('GET', 'https://v1.api.paimon.cloud/bjtime/fulltime', false);
        e2shttpRequest.send();
        return e2shttpRequest.responseText;
    }

    getSec() {
        var e2shttpRequest = new XMLHttpRequest();
        e2shttpRequest.open('GET', 'https://v1.api.paimon.cloud/bjtime/sec', false);
        e2shttpRequest.send();
        return parseInt(e2shttpRequest.responseText);
    }

    getMin() {
        var e2shttpRequest = new XMLHttpRequest();
        e2shttpRequest.open('GET', 'https://v1.api.paimon.cloud/bjtime/min', false);
        e2shttpRequest.send();
        return parseInt(e2shttpRequest.responseText);
    }

    getHou() {
        var e2shttpRequest = new XMLHttpRequest();
        e2shttpRequest.open('GET', 'https://v1.api.paimon.cloud/bjtime/hou', false);
        e2shttpRequest.send();
        return parseInt(e2shttpRequest.responseText);
    }

    getDay() {
        var e2shttpRequest = new XMLHttpRequest();
        e2shttpRequest.open('GET', 'https://v1.api.paimon.cloud/bjtime/day', false);
        e2shttpRequest.send();
        return parseInt(e2shttpRequest.responseText);
    }

    getMon() {
        var e2shttpRequest = new XMLHttpRequest();
        e2shttpRequest.open('GET', 'https://v1.api.paimon.cloud/bjtime/mon', false);
        e2shttpRequest.send();
        return parseInt(e2shttpRequest.responseText);
    }

    getYea() {
        var e2shttpRequest = new XMLHttpRequest();
        e2shttpRequest.open('GET', 'https://v1.api.paimon.cloud/bjtime/yea', false);
        e2shttpRequest.send();
        return parseInt(e2shttpRequest.responseText);
    }

    onUninit() {
        api.removeCategory('someoneyang.bjtime.category');
    }
}

module.exports = timeExtension;

