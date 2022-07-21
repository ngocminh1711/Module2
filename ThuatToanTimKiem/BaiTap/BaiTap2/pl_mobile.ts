function savePhone() {

    let phone = [93456789, 37499088, 98102375, 374123124]

    let viettel = [];
    let mobifone = [];
    let vinaphone = [];

    for (let i = 0; i < phone.length; i++) {
        if (phone[i].toString().substring(2, 0) == '37') {
            viettel.push(phone[i])
        } else if (phone[i].toString().substring(2, 0) == '93') {
            mobifone.push(phone[i])
        } else if (phone[i].toString().substring(2, 0) == '98') {
            vinaphone.push(phone[i]);
        }
    }
    console.log(`số vinaphone: ${vinaphone} `)
    console.log(`số viettel: ${viettel}`)
    console.log(`số mobilephone: ${mobifone}`)
}
savePhone()
