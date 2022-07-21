function savePhone() {
    var phone = [93456789, 37499088, 98102375, 374123124];
    var viettel = [];
    var mobifone = [];
    var vinaphone = [];
    for (var i = 0; i < phone.length; i++) {
        if (phone[i].toString().substring(2, 0) == '37') {
            viettel.push(phone[i]);
        }
        else if (phone[i].toString().substring(2, 0) == '93') {
            mobifone.push(phone[i]);
        }
        else if (phone[i].toString().substring(2, 0) == '98') {
            vinaphone.push(phone[i]);
        }
    }
    console.log("s\u1ED1 n\u00E0y l\u00E0 s\u1ED1 vinaphone: ".concat(vinaphone, " "));
    console.log("s\u1ED1 n\u00E0y l\u00E0 s\u1ED1 viettel ".concat(viettel));
    console.log("s\u1ED1 n\u00E0y l\u00E0 s\u1ED1 mobilephone ".concat(mobifone));
}
savePhone();
