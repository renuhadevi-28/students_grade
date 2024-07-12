
        function calculate() {
            var num1 = parseFloat(document.getElementById('num1').value);
            var num2 = parseFloat(document.getElementById('num2').value);
            var num3 = parseFloat(document.getElementById('num3').value);
            var num4 = parseFloat(document.getElementById('num4').value);
            var total = num1 + num2 + num3 + num4;
            var average = total / 4;
            document.getElementById('total').value = total;
            document.getElementById('average').value = average.toFixed(2);
            var grade = '';
            if (average >= 85) {
                grade = 'A';
            } else if (average >= 75) {
                grade = 'B';
            } else if (average >= 65) {
                grade = 'C';
            } else if (average >= 55) {
                grade = 'D';
            } else {
                grade = 'E';
            }
            document.getElementById('grade').value = grade;
        }
    