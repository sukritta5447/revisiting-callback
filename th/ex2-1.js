/* 
- เรากำลังพัฒนาระบบแจ้งเตือน (Notification System) อยู่ ระบบแจ้งเตือนของเราสามารถที่จะทำ Action ดังต่อไปนี้
    1. แจ้งเตือนกรณีสร้างโพสสำเร็จ
    2. แจ้งเตือนกรณีมีคนมากดไลค์
    3. แจ้งเตือนกรณีมีคนมาคอมเมนต์
    4. แจ้งเตือนกรณีมีคนแชร์โพส
- ให้เขียน function ที่ทำงานตามที่โจทย์กำหนด
*/

// Start Coding Here
/*
-ต้องมี callback 4 อัน postCreated, postLiked, postCommented, postShared
-HoF ชื่อว่า sendNotification(callback)
*/
function postCreated() {
    return "📝 แจ้งเตือน: โพสต์ของคุณถูกสร้างสำเร็จ!"
}
function postLiked() {
    return "👍 แจ้งเตือน: มีคนมากดไลค์โพสต์ของคุณ!"
}
function postCommented() {
    return "💬 แจ้งเตือน: มีคนมาคอมเมนต์ในโพสต์ของคุณ!"
}
function postShared() {
    return "🔄 แจ้งเตือน: มีคนแชร์โพสต์ของคุณ!"
}

function sendNotification(callback){
    return callback();
}

// เมื่อ function นี้ทำงานจะเห็นผลลัพธ์ดังนี้
console.log(sendNotification(postCreated));   // 📝 แจ้งเตือน: โพสต์ของคุณถูกสร้างสำเร็จ!
console.log(sendNotification(postLiked));     // 👍 แจ้งเตือน: มีคนมากดไลค์โพสต์ของคุณ!
console.log(sendNotification(postCommented)); // 💬 แจ้งเตือน: มีคนมาคอมเมนต์ในโพสต์ของคุณ!
console.log(sendNotification(postShared));    // 🔄 แจ้งเตือน: มีคนแชร์โพสต์ของคุณ!