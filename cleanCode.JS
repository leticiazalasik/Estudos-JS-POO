function calculateUserPrice(user, date) {
    const PREMIUM_BASE_PRICE = 100;
    const REGULAR_BASE_PRICE = 150;

    const basePrice = user.type === 'premium' 
        ? PREMIUM_BASE_PRICE 
        : REGULAR_BASE_PRICE;

    return applySundayDiscount(basePrice, user.type, date);
}

function applySundayDiscount(price, userType, date) {
    if (isSunday(date)) {
        const discountRate = userType === 'premium' ? 0.8 : 0.9; // 20% desconto para premium, 10% para regular
        return price * discountRate; // Aplica o desconto se for domingo
    }

    return price; // Se não for domingo, retorna o preço sem desconto
}

function isSunday(date) {
    return date.getDay() === 0; // Verifica se a data fornecida é um domingo (0)
}

// Teste para verificar a lógica
const userPremium = { type: 'premium' };
const userRegular = { type: 'regular' };

const sunday = new Date('2024-11-24T00:00:00'); // Um domingo
const weekday = new Date('2024-11-25T00:00:00'); // Uma segunda-feira

console.log(calculateUserPrice(userPremium, sunday)); // Deve retornar 80
console.log(calculateUserPrice(userPremium, weekday)); // Deve retornar 100
console.log(calculateUserPrice(userRegular, sunday)); // Deve retornar 135
console.log(calculateUserPrice(userRegular, weekday)); // Deve retornar 150
