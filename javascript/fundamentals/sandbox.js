const test_obj = {
    test_key: 'test_value'
};

console.log(test_obj);
test_obj.test_key = "changed value"
console.log(test_obj);
console.log(test_obj['test_key']);
console.log(test_obj.test_key);
test_obj['second_key'] = "new value"
console.log(test_obj);
test_obj = 5;
console.log(test_obj);
