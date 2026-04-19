let currentDate = new Date();

function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    const display = document.getElementById('month-year-display');
    
    // 1. مسح محتوى الشبكة الحالي
    grid.innerHTML = '';

    // 2. إضافة أسماء الأيام
    const dayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    dayNames.forEach(name => {
        const label = document.createElement('div');
        label.className = 'day-label';
        label.innerText = name;
        grid.appendChild(label);
    });

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // 3. تحديث العنوان (الشهر والسنة)
    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate);
    display.innerText = `${monthName} ${year}`;

    // 4. حساب بداية الشهر وعدد الأيام
    let firstDay = new Date(year, month, 1).getDay();
    // تحويل ترتيب الأيام ليبدأ من الاثنين (0=الاثنين ... 6=الأحد)
    let adjustedFirstDay = (firstDay === 0) ? 6 : firstDay - 1;
    
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // 5. حلقة الأيام الفارغة (قبل بداية الشهر)
    for (let x = 0; x < adjustedFirstDay; x++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'day-cell';
        emptyCell.style.backgroundColor = 'rgba(0,0,0,0.02)';
        grid.appendChild(emptyCell);
    }

    // 6. حلقة رسم أيام الشهر الفعلي
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement('div');
        cell.className = 'day-cell';
        
        cell.innerHTML = `
            <div class="date-number">${day}</div>
            <textarea class="day-content"></textarea>
        `;
        grid.appendChild(cell);
    }
}

// دالة تغيير الشهر عند الضغط على الأزرار
function changeMonth(step) {
    currentDate.setMonth(currentDate.getMonth() + step);
    renderCalendar();
}

// تشغيل التقويم عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderCalendar);