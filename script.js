// สมัครสมาชิก
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("regUsername").value;
      const password = document.getElementById("regPassword").value;
      let users = JSON.parse(localStorage.getItem("users") || "[]");
      users.push({ username, password, role: "สมาชิก" });
      localStorage.setItem("users", JSON.stringify(users));
      document.getElementById("registerMessage").textContent = "สมัครสมาชิกสำเร็จ!";
    });
  }

  // เข้าสู่ระบบ
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      let role = "สมาชิก";

      if ((username === "NU" || username === "admin" || username === "Admin") && password === "anuwat") {
        role = "Admin";
        document.getElementById("loginMessage").textContent = "เข้าสู่ระบบสำเร็จ! ยศ: " + role;
      } else {
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        let found = users.find(u => u.username === username && u.password === password);
        if (found) {
          role = found.role;
          document.getElementById("loginMessage").textContent = "เข้าสู่ระบบสำเร็จ! ยศ: " + role;
        } else {
          document.getElementById("loginMessage").textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
        }
      }
    });
  }

  // อัปโหลดสลิป
  const slipForm = document.getElementById("slipForm");
  if (slipForm) {
    slipForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fileInput = document.getElementById("slipFile");
      if (fileInput.files.length > 0) {
        document.getElementById("slipMessage").textContent = "ส่งสลิปเรียบร้อย! รอ Admin ยืนยัน";
        alert("Admin: กรุณายืนยันสลิปนี้");
      } else {
        document.getElementById("slipMessage").textContent = "กรุณาเลือกไฟล์ก่อน";
      }
    });
  }
});
