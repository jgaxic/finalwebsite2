function calculateStayTotal(startDateValue, endDateValue, ratePerDay) {
    if (!startDateValue || !endDateValue) return null;

    const startDate = new Date(startDateValue);
    const endDate = new Date(endDateValue);

    if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
        return null;
    }

    const timeDiff = endDate.getTime() - startDate.getTime();
    const dayCount = Math.max(1, Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
    return dayCount * ratePerDay;
}

function getRoomPrice(roomType, bedType, fallbackPrice = 0) {
    const roomKey = (roomType || '').trim().toLowerCase();
    const bedKey = (bedType || '').trim().toLowerCase();

    const roomRates = {
        standard: {
            'single bed room': 5000,
            'twin bed room': 6000,
            'double bed room': 5500
        },
        premium: {
            'single bed room': 6500,
            'twin bed room': 8000,
            'double bed room': 7500
        },
        vip: {
            'single bed room': 8000,
            'twin bed room': 10000,
            'double bed room': 9000
        }
    };

    const mappedPrice = roomRates[roomKey]?.[bedKey];
    if (mappedPrice) {
        return mappedPrice;
    }

    const parsedFallback = Number(fallbackPrice);
    return Number.isFinite(parsedFallback) && parsedFallback > 0 ? parsedFallback : 0;
}

function updateBookingForm(roomType, bedType, pricePerDay) {
    const bedField = document.getElementById('bed');
    const roomField = document.getElementById('room');
    const totalField = document.getElementById('total');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const roomPrice = getRoomPrice(roomType, bedType, pricePerDay);

    if (bedField) bedField.value = bedType;
    if (roomField) roomField.value = roomType;
    if (totalField) totalField.dataset.price = String(roomPrice);

    if (startDateInput && endDateInput && totalField) {
        const total = calculateStayTotal(startDateInput.value, endDateInput.value, roomPrice);
        totalField.value = total === null ? '' : '฿' + total;
    } else if (totalField) {
        totalField.value = '฿' + roomPrice;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bed = urlParams.get('bed');
    const room = urlParams.get('room');
    const price = Number(urlParams.get('price')) || 0;

    if (bed && room) {
        updateBookingForm(room, bed, price);
    }

    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const totalField = document.getElementById('total');

    if (startDateInput && endDateInput && totalField) {
        const recalculate = () => {
            const roomType = document.getElementById('room')?.value || 'Standard';
            const bedType = document.getElementById('bed')?.value || 'Single bed room';
            const pricePerDay = getRoomPrice(roomType, bedType, Number(totalField.dataset.price) || 0);
            totalField.dataset.price = String(pricePerDay);
            const total = calculateStayTotal(startDateInput.value, endDateInput.value, pricePerDay);
            totalField.value = total === null ? '' : '฿' + total;
        };

        startDateInput.addEventListener('input', recalculate);
        endDateInput.addEventListener('input', recalculate);
    }
});
