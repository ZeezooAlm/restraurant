// انتظر حتى يتم تحميل محتوى الصفحة بالكامل
document.addEventListener('DOMContentLoaded', () => {

    // ===================================================
    // الجزء الأول: كود تشغيل نموذج "اتصل بنا"
    // ===================================================
    const contactForm = document.getElementById('contact-form');

    // هذا الكود سيعمل فقط إذا وجد النموذج في الصفحة الحالية
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // منع إعادة تحميل الصفحة

            // الحصول على عناصر نموذج التواصل
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            const successMessage = document.getElementById('form-success-message');

            // إخفاء الأخطاء القديمة (إذا وجدت)
            const errorMessages = contactForm.querySelectorAll('.error-message');
            errorMessages.forEach(msg => msg.style.display = 'none');
            
            let isValid = true;

            // التحقق من أن الحقول ليست فارغة
            if (nameInput.value.trim() === '') {
                const errorDiv = nameInput.parentElement.querySelector('.error-message');
                if(errorDiv) errorDiv.style.display = 'block';
                isValid = false;
            }
            if (emailInput.value.trim() === '' || !emailInput.value.includes('@')) {
                const errorDiv = emailInput.parentElement.querySelector('.error-message');
                if(errorDiv) errorDiv.style.display = 'block';
                isValid = false;
            }
            if (subjectInput.value.trim() === '') {
                const errorDiv = subjectInput.parentElement.querySelector('.error-message');
                if(errorDiv) errorDiv.style.display = 'block';
                isValid = false;
            }
            if (messageInput.value.trim() === '') {
                const errorDiv = messageInput.parentElement.querySelector('.error-message');
                if(errorDiv) errorDiv.style.display = 'block';
                isValid = false;
            }

            // إذا كانت جميع الحقول ممتلئة وصحيحة
            if (isValid) {
                contactForm.style.display = 'none'; // إخفاء النموذج
                if(successMessage) successMessage.style.display = 'block'; // إظهار رسالة النجاح
            }
        });
    }

    // ===================================================
    // الجزء الثاني: كود تشغيل نموذج "تسجيل الدخول"
    // ===================================================
    const loginForm = document.getElementById('login-form');

    // هذا الكود سيعمل فقط إذا وجد النموذج في الصفحة الحالية
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // منع إعادة تحميل الصفحة

            // الحصول على قيم حقول تسجيل الدخول
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // التحقق من بيانات الدخول (يمكنك تغييرها)
            if (email === 'user@example.com' && password === '123456') {
                // إذا كانت البيانات صحيحة، انتقل إلى الصفحة الرئيسية
                window.location.href = 'index.html'; 
            } else {
                // إذا كانت البيانات خاطئة، أظهر رسالة تنبيه
                alert('البريد الإلكتروني أو كلمة المرور غير صحيحة');
            }
        });
    }

});
