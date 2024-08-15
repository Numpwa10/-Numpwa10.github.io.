// ข้อมูลผู้ใช้ที่เก็บไว้ในตัวแปร (username: admin, password: 1234)
const validUsername = "numpwa10";
const validPassword = "1234";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันการ submit ฟอร์มปกติ

    // รับค่าจากฟอร์ม
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // เปรียบเทียบกับข้อมูลที่เก็บไว้ในตัวแปร
    if (username === validUsername && password === validPassword) {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").textContent = "เข้าสู่ระบบสำเร็จ!";
    } else {
        document.getElementById("message").textContent = "Invalid username or password";
    }
});
