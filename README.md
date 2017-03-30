# Go Service

Go Service คือ service กลางที่หลายๆ component ใช้งานร่วมกัน ซึ่งถูกแยกออกมาเพื่อแก้ปัญหา duplicate code และสามารถแก้ไข/ปรับเปลี่ยนการทำงานในจุดเดียว  

#### Service List
1 Bootstrap Class Service
..* setStyleClass() - function สำหรับ set bootstrap class เช่น btn, alert
..* setSizeClass() - function สำหรับ set bootstrap class ที่ใช้ในการระบุ size ในรูปแบบ sm, lg เช่น btn-sm, btn-lg