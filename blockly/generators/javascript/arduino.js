'use strict';

goog.require('Blockly.JavaScript');

// 디지털 출력 PIN [ ] MODE ( HIGH, LOW )
// 디지털 입력 PIN [ ]
// 아날로그 출력 PIN [ ] 출력값 [  ]
// 아날로그 입력 PIN [ ]
// 핀 모드 설정 PIN [ ] MODE ( INPUT, OUTPUT )
// 지연 [ ]
// [ ] : int

Blockly.JavaScript['digital_write'] = function (block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = `digitalWrite(${value_name}, ${dropdown_name});\n`;
    return code;
};

// Blockly.JavaScript['analog_read'] = function (block) {
//     var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
//     // TODO: Assemble JavaScript into code variable.
//     var code = `analogRead(${value_pin});`;
//     return code;
// };

// Blockly.JavaScript['digital_read'] = function (block) {
//     var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
//     // TODO: Assemble JavaScript into code variable.
//     var code = `digitalRead(${value_pin});`;
//     return code;
// };

Blockly.JavaScript['analog_read'] = function(block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `analogRead(${value_pin})\n`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.JavaScript['digital_read'] = function(block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `digitalRead(${value_pin})\n`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

Blockly.JavaScript['analog_write'] = function (block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
    var value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `analogWrite(${value_pin}, ${value_value});\n`;
    return code;
};
Blockly.JavaScript['pin_mode'] = function (block) {
    var value_pin = Blockly.JavaScript.valueToCode(block, 'PIN', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_mode = block.getFieldValue('MODE');
    // TODO: Assemble JavaScript into code variable.
    var code = `pinMode(${value_pin}, ${dropdown_mode});\n`;
    return code;
};

Blockly.JavaScript['delay'] = function (block) {
    var value_millisecond = Blockly.JavaScript.valueToCode(block, 'Millisecond', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `delay(${value_millisecond});\n`;
    return code;
};

Blockly.JavaScript['setup'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var branchCode = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = `void setup() {\n ${branchCode}\n}\n`;
    return code;
};

Blockly.JavaScript['loop'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var branchCode = Blockly.JavaScript.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = `void loop() {\n ${branchCode}\n}\n`;
    return code;
};

Blockly.JavaScript['high_low'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    if(dropdown_name == "HIGH") {
        var code = `HIGH`;
    } else {
        var code = `LOW`;
    }
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };