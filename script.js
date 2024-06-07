let arrayNumbers = [1, 2, 3, 4, 5];

// Hàm cập nhật giá trị trong mảng
function updateValue() {
    let oldValue = parseFloat(document.getElementById("soThuc1").value); 
    let newValue = parseFloat(document.getElementById("soThuc2").value); 
    let index = arrayNumbers.indexOf(oldValue);

    if (index !== -1) {
        arrayNumbers[index] = newValue; // 
        document.querySelector('.giatritrungbinh').innerHTML = "Cập nhật thành công! Mảng sau khi cập nhật: " + arrayNumbers.join(', ');
    } else {
        document.querySelector('.giatritrungbinh').innerHTML = "Không tìm thấy giá trị cần cập nhật trong mảng.";
    }
}

document.getElementById("nut").addEventListener("click", updateValue);


let integerArray = [];

//Tính tổng các số dương trong mảng
function sumOfPositiveNumbers() {
    let sum = 0;
    integerArray.forEach(num => {
        if (num > 0) {
            sum += num;
        }
    });
    return sum;
}

//Đếm số lượng số dương
function countPositiveNumbers() {
    let count = 0;
    integerArray.forEach(num => {
        if (num > 0) {
            count++;
        }
    });
    return count;
}

//Tìm số nhỏ nhất
function findSmallestNumber() {
    if (integerArray.length === 0) {
        return null;
    }
    return Math.min(...integerArray);
}

//Tìm số dương nhỏ nhất 
function findSmallestPositiveNumber() {
    let smallestPositive = null;
    integerArray.forEach(num => {
        if (num > 0 && (smallestPositive === null || num < smallestPositive)) {
            smallestPositive = num;
        }
    });
    return smallestPositive;
}

//Tìm số chẵn cuối cùng 
function findLastEvenNumber() {
    let lastEven = -1;
    for (let i = integerArray.length - 1; i >= 0; i--) {
        if (integerArray[i] % 2 === 0) {
            lastEven = integerArray[i];
            break;
        }
    }
    return lastEven;
}

//Đổi chỗ 2 giá trị trong mảng theo vị trí
function swapValues(position1, position2) {
    if (position1 < 0 || position1 >= integerArray.length || position2 < 0 || position2 >= integerArray.length) {
        return false; 
    }
    [integerArray[position1], integerArray[position2]] = [integerArray[position2], integerArray[position1]]; 
    return true; 
}

//Sắp xếp mảng theo thứ tự tăng dần
function sortArrayAscending() {
    integerArray.sort((a, b) => a - b);
    return integerArray.slice(); // Trả về một bản sao của mảng đã sắp xếp
}

// Hàm kiểm tra số nguyên tố
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Hàm thực hiện chức năng 8: Tìm số nguyên tố đầu tiên trong mảng
function findFirstPrimeNumber() {
    for (let num of integerArray) {
        if (isPrime(num)) {
            return num;
        }
    }
    return -1; // Trả về -1 nếu không tìm thấy số nguyên tố
}

// Hàm thực hiện chức năng 9: Đếm số lượng số nguyên trong mảng số thực
function countIntegersInRealArray(realArray) {
    let integerCount = 0;
    realArray.forEach(num => {
        if (Number.isInteger(num)) {
            integerCount++;
        }
    });
    return integerCount;
}

// Hàm thực hiện chức năng 10: So sánh số lượng số dương và số lượng số âm
function comparePositiveAndNegativeCounts() {
    let positiveCount = 0;
    let negativeCount = 0;
    integerArray.forEach(num => {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeCount++;
        }
    });
    if (positiveCount > negativeCount) {
        return "Positive numbers are more than negative numbers";
    } else if (positiveCount < negativeCount) {
        return "Negative numbers are more than positive numbers";
    } else {
        return "Positive numbers are equal to negative numbers";
    }
}

// Hàm thực hiện chức năng thêm số nguyên vào mảng
function addIntegerToArray(number) {
    integerArray.push(number);
}

// Hàm hiển thị kết quả
function displayResult(result) {
    let resultDiv = document.querySelector('.result');
    resultDiv.textContent = result;
}

// Hàm thực hiện chức năng Swap two positions
function performSwap() {
    let position1 = parseInt(prompt('Enter the first position:'));
    let position2 = parseInt(prompt('Enter the second position:'));
    if (!isNaN(position1) && !isNaN(position2)) {
        let success = swapValues(position1, position2);
        if (success) {
            displayResult("Swap successful. New array: " + integerArray);
        } else {
            displayResult("Invalid positions");
        }
    } else {
        displayResult("Invalid positions");
    }
}

// Xử lý khi người dùng nhấn nút
function performOperation(operation) {
    let result;
    switch (operation) {
        case 1:
            result = "Sum of positive numbers: " + sumOfPositiveNumbers();
            break;
        case 2:
            result = "Count of positive numbers: " + countPositiveNumbers();
            break;
        case 3:
            result = "Smallest number: " + findSmallestNumber();
            break;
        case 4:
            result = "Smallest positive number: " + findSmallestPositiveNumber();
            break;
        case 5:
            result = "Last even number: " + findLastEvenNumber();
            break;
        case 7:
            result = "Sorted array: " + sortArrayAscending();
            break;
        case 8:
            result = "First prime number: " + findFirstPrimeNumber();
            break;
        case 10:
            result = comparePositiveAndNegativeCounts();
            break;
        default:
            result = "Invalid operation";
    }
    displayResult(result);
}

// Thực hiện chức năng đếm số nguyên trong mảng số thực
function performRealArrayOperation() {
    let realArray = [];
    let realNumbers = prompt('Enter real numbers separated by commas:').split(',');
    realNumbers.forEach(num => {
        realArray.push(parseFloat(num));
    });
    let integerCount = countIntegersInRealArray(realArray);
    displayResult("Number of integers in real array: " + integerCount);
}

// Xử lý khi người dùng nhập số nguyên mới
document.getElementById('numberInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let number = parseInt(document.getElementById('numberInput').value);
        if (!isNaN(number)) {
            addIntegerToArray(number);
            document.getElementById('numberInput').value = '';
            displayResult("Number added to array: " + integerArray);
        } else {
            displayResult("Invalid input. Please enter a valid integer.");
        }
    }
});