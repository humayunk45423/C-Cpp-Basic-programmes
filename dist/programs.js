    const data = [
["01. SUM, SUBTRACTION, MULTIPLICATION & DIVISION OF TWO NUMBERS", `চারটি মৌলিক গাণিতিক অপারেশন: +, −, ×, ÷  —  float ব্যবহার করা হয় দশমিক ফলাফলের জন্য।
  a=10, b=3 → Sum=13.00, Subtraction=7.00, Multiplication=30.00, Division=3.33
  বিশেষ ক্ষেত্র: b=0 হলে ভাগ সম্ভব নয় → if (b!=0) দিয়ে যাচাই করা হয়।`, `#include <stdio.h>

int main() {
    float a, b;
    printf("Enter two numbers: ");
    scanf("%f %f", &a, &b);
    printf("Sum = %f\\n", a + b);
    printf("Subtraction = %f\\n", a - b);
    printf("Multiplication = %f\\n", a * b);
    if (b != 0)
        printf("Division = %f\\n", a / b);
    else
        printf("Division not possible (b=0)\\n");
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    float a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    cout << "Sum = " << a + b << endl;
    cout << "Subtraction = " << a - b << endl;
    cout << "Multiplication = " << a * b << endl;
    if (b != 0)
        cout << "Division = " << a / b << endl;
    else
        cout << "Division not possible (b=0)" << endl;
    return 0;
}`],
["02. FIND LARGER OF TWO NUMBERS", `if (a > b) → a বড়।  else if (b > a) → b বড়।  else → দুটো সমান।
  উদাহরণ: a=8, b=3 → "Larger number is: 8"
           a=5, b=5 → "Both numbers are equal."`, `#include <stdio.h>

int main() {
    int a, b;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    if (a > b)
        printf("Larger number is: %d\\n", a);
    else if (b > a)
        printf("Larger number is: %d\\n", b);
    else
        printf("Both numbers are equal.\\n");
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    if (a > b)
        cout << "Larger number is: " << a << endl;
    else if (b > a)
        cout << "Larger number is: " << b << endl;
    else
        cout << "Both numbers are equal." << endl;
    return 0;
}`],
["03. FIND SMALLER OF TWO NUMBERS", `if (a < b) → a ছোট।  else if (b < a) → b ছোট।  else → দুটো সমান।
  উদাহরণ: a=3, b=8 → "Smaller number is: 3"
           a=5, b=5 → "Both numbers are equal."`, `#include <stdio.h>

int main() {
    int a, b;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    if (a < b)
        printf("Smaller number is: %d\\n", a);
    else if (b < a)
        printf("Smaller number is: %d\\n", b);
    else
        printf("Both numbers are equal.\\n");
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    if (a < b)
        cout << "Smaller number is: " << a << endl;
    else if (b < a)
        cout << "Smaller number is: " << b << endl;
    else
        cout << "Both numbers are equal." << endl;
    return 0;
}`],
["04. FIND LARGEST OF THREE NUMBERS (CONDITIONAL OPERATOR)", `টার্নারি: (শর্ত) ? সত্য-মান : মিথ্যা-মান
  max = (a>b && a>c) ? a : (b>c ? b : c)
  উদাহরণ: a=4, b=9, c=6 → max = 9`, `#include <stdio.h>

int main() {
    int a, b, c;
    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);
    int max = (a > b && a > c) ? a : (b > c ? b : c);
    printf("Largest number is: %d\\n", max);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int a, b, c;
    cout << "Enter three numbers: ";
    cin >> a >> b >> c;
    int max = (a > b && a > c) ? a : (b > c ? b : c);
    cout << "Largest number is: " << max << endl;
    return 0;
}`],
["05. FIND SMALLEST OF THREE NUMBERS (CONDITIONAL OPERATOR)", `টার্নারি: (শর্ত) ? সত্য-মান : মিথ্যা-মান
  min = (a<b && a<c) ? a : (b<c ? b : c)
  উদাহরণ: a=4, b=9, c=6 → min = 4`, `#include <stdio.h>

int main() {
    int a, b, c;
    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);
    int min = (a < b && a < c) ? a : (b < c ? b : c);
    printf("Smallest number is: %d\\n", min);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int a, b, c;
    cout << "Enter three numbers: ";
    cin >> a >> b >> c;
    int min = (a < b && a < c) ? a : (b < c ? b : c);
    cout << "Smallest number is: " << min << endl;
    return 0;
}`],
["06. AVERAGE OF THREE NUMBERS", `গড় = (a + b + c) / 3   → float ব্যবহার করা হয় দশমিক পেতে।
  উদাহরণ: a=4, b=8, c=9 → গড় = (4+8+9)/3 = 21/3 = 7.000000`, `#include <stdio.h>

int main() {
    float a, b, c;
    printf("Enter three numbers: ");
    scanf("%f %f %f", &a, &b, &c);
    float avg = (a + b + c) / 3;
    printf("Average = %f\\n", avg);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    float a, b, c;
    cout << "Enter three numbers: ";
    cin >> a >> b >> c;
    float avg = (a + b + c) / 3;
    cout << "Average = " << avg << endl;
    return 0;
}`],
["07. AREA OF A RIGHT-ANGLED TRIANGLE", `সমকোণী ত্রিভুজের ক্ষেত্রফল সূত্র: ক্ষেত্রফল = (ভূমি × উচ্চতা) ÷ 2
  উদাহরণ: ভূমি = 6, উচ্চতা = 4 → ক্ষেত্রফল = (6 × 4) ÷ 2 = 12.00`, `#include <stdio.h>

int main() {
    float base, height;
    printf("Enter base and height: ");
    scanf("%f %f", &base, &height);
    float area = 0.5 * base * height;
    printf("Area of right-angled"
           " triangle = %f\\n", area);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    float base, height;
    cout << "Enter base and height: ";
    cin >> base >> height;
    float area = 0.5 * base * height;
    cout << "Area of right-angled"
         << " triangle = " << area << endl;
    return 0;
}`],
["08. AREA OF A SCALENE TRIANGLE (HERON'S FORMULA)", `হেরোনের সূত্র: তিন বাহু a, b, c জানা থাকলে ক্ষেত্রফল বের করা যায়।
  আধা-পরিসীমা: s = (a + b + c) / 2
  ক্ষেত্রফল   = √(s × (s−a) × (s−b) × (s−c))
  উদাহরণ: a=3, b=4, c=5 → s=6 → area = √(6×3×2×1) = 6.00`, `#include <stdio.h>
#include <math.h>

int main() {
    float a, b, c;
    printf("Enter three sides: ");
    scanf("%f %f %f", &a, &b, &c);
    float s = (a + b + c) / 2;
    float area = sqrt(s * (s - a) * (s - b) * (s - c));
    printf("Area of scalene"
           " triangle = %f\\n", area);
    return 0;
}`, `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    float a, b, c;
    cout << "Enter three sides: ";
    cin >> a >> b >> c;
    float s = (a + b + c) / 2;
    float area = sqrt(s * (s - a) * (s - b) * (s - c));
    cout << "Area of scalene"
         << " triangle = " << area << endl;
    return 0;
}`],
["09. AREA OF A CIRCLE", `বৃত্তের ক্ষেত্রফল সূত্র: A = π × r²
  #define PI 3.1416 দিয়ে π ধ্রুবক সংজ্ঞায়িত করা হয়।
  উদাহরণ: r=7 → A = 3.1416 × 7 × 7 = 153.94`, `#include <stdio.h>
#define PI 3.1416

int main() {
    float radius;
    printf("Enter radius: ");
    scanf("%f", &radius);
    float area = PI * radius * radius;
    printf("Area of circle = %f\\n", area);
    return 0;
}`, `#include <iostream>
#define PI 3.1416
using namespace std;

int main() {
    float radius;
    cout << "Enter radius: ";
    cin >> radius;
    float area = PI * radius * radius;
    cout << "Area of circle = " << area << endl;
    return 0;
}`],
["10. CHECK POSITIVE, NEGATIVE, OR ZERO", `n > 0 → Positive  |  n < 0 → Negative  |  n = 0 → Zero
  উদাহরণ: 5 → Positive  |  -3 → Negative  |  0 → Zero`, `#include <stdio.h>

int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    if (n > 0)
        printf("Positive\\n");
    else if (n < 0)
        printf("Negative\\n");
    else
        printf("Zero\\n");
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter a number: ";
    cin >> n;
    if (n > 0)
        cout << "Positive" << endl;
    else if (n < 0)
        cout << "Negative" << endl;
    else
        cout << "Zero" << endl;
    return 0;
}`],
["11. CHECK ODD OR EVEN", `num % 2 == 0 → জোড়  |  num % 2 != 0 → বিজোড়
  উদাহরণ: 4 → Even (4%2=0)  |  7 → Odd (7%2=1)`, `#include <stdio.h>

int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    if (num % 2 != 0)
        printf("The number is odd.");
    else
        printf("The number is even.");
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    if (num % 2 != 0)
        cout << "The number is odd.";
    else
        cout << "The number is even.";
    return 0;
}`],
["12. CHECK LEAP YEAR", `অধিবর্ষ (Leap Year) কেন?
  পৃথিবী সূর্যকে একবার প্রদক্ষিণ করতে ঠিক ৩৬৫ দিন নয়, বরং ৩৬৫ দিন ৫ ঘণ্টা ৪৮ মিনিট ৪৫ সেকেন্ড লাগে।
  প্রতি বছর প্রায় ৬ ঘণ্টা বাকি থাকে → ৪ বছরে ≈ ২৪ ঘণ্টা = ১ দিন।
  তাই প্রতি ৪ বছরে ফেব্রুয়ারিতে ১ দিন যোগ করা হয় → ফেব্রুয়ারি ২৯ দিনের হয়।
  কিন্তু আসলে ৫ ঘণ্টা ৪৮ মিনিট — তাই ১০০ বছরে একটু বেশি হয়।
  তাই ১০০ দিয়ে বিভাজ্য বছর leap year নয়, কিন্তু ৪০০ দিয়ে বিভাজ্য হলে আবার leap year।
  নিয়ম:
    ✓  year % 4 == 0 এবং year % 100 != 0  → লিপ ইয়ার
    ✓  year % 400 == 0                     → লিপ ইয়ার (ব্যতিক্রম)
  উদাহরণ: 2024 ✓ লিপ  |  1900 ✗ লিপ নয় (100 দিয়ে বিভাজ্য)  |  2000 ✓ লিপ (400 দিয়ে বিভাজ্য)`, `#include <stdio.h>

int main() {
    int year;
    printf("Enter a year: ");
    scanf("%d", &year);
    if ((year % 4 == 0 && year % 100 != 0)
        || (year % 400 == 0))
        printf("Leap year\\n");
    else
        printf("Not a leap year\\n");
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int year;
    cout << "Enter a year: ";
    cin >> year;
    if ((year % 4 == 0 && year % 100 != 0)
        || (year % 400 == 0))
        cout << "Leap year" << endl;
    else
        cout << "Not a leap year" << endl;
    return 0;
}`],
["13. CELSIUS TO FAHRENHEIT", `সেলসিয়াস → ফারেনহাইট:  F = (C × 9/5) + 32
  উদাহরণ: C=0°   → F=32°    (বরফ গলনাঙ্ক)
           C=100° → F=212°   (পানি স্ফুটনাঙ্ক)
           C=37°  → F=98.6°  (মানবদেহের তাপমাত্রা)`, `#include <stdio.h>

int main() {
    float celsius, fahrenheit;
    printf("Enter temperature in Celsius: ");
    scanf("%f", &celsius);
    fahrenheit = (celsius * 9 / 5) + 32;
    printf("Temp in Fahrenheit: %f\\n",
           fahrenheit);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    float celsius, fahrenheit;
    cout << "Enter temperature in Celsius: ";
    cin >> celsius;
    fahrenheit = (celsius * 9 / 5) + 32;
    cout << "Temp in Fahrenheit: "
         << fahrenheit << endl;
    return 0;
}`],
["14. FAHRENHEIT TO CELSIUS", `ফারেনহাইট → সেলসিয়াস:  C = (F − 32) × 5/9
  উদাহরণ: F=32°   → C=0°   (বরফ গলনাঙ্ক)
           F=212°  → C=100° (পানি স্ফুটনাঙ্ক)
           F=98.6° → C=37°  (মানবদেহের তাপমাত্রা)`, `#include <stdio.h>

int main() {
    float fahrenheit, celsius;
    printf("Enter temperature in Fahrenheit: ");
    scanf("%f", &fahrenheit);
    celsius = (fahrenheit - 32) * 5 / 9;
    printf("Temperature in Celsius: %f\\n", celsius);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    float fahrenheit, celsius;
    cout << "Enter temperature in Fahrenheit: ";
    cin >> fahrenheit;
    celsius = (fahrenheit - 32) * 5 / 9;
    cout << "Temp in Celsius: "
         << celsius << endl;
    return 0;
}`],
["15. CHECK UPPERCASE OR LOWERCASE", `'a'–'z' → Lowercase  |  'A'–'Z' → Uppercase  |  অন্যটা → Not an alphabet
  উদাহরণ: 'g' → Lowercase  |  'G' → Uppercase  |  '3' → Not an alphabet`, `#include <stdio.h>

int main() {
    char ch;
    printf("Enter a character: ");
    scanf("%c", &ch);
    if (ch >= 'a' && ch <= 'z')
        printf("Lowercase letter\\n");
    else if (ch >= 'A' && ch <= 'Z')
        printf("Uppercase letter\\n");
    else
        printf("Not an alphabet letter\\n");
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    char ch;
    cout << "Enter a character: ";
    cin >> ch;
    if (ch >= 'a' && ch <= 'z')
        cout << "Lowercase letter" << endl;
    else if (ch >= 'A' && ch <= 'Z')
        cout << "Uppercase letter" << endl;
    else
        cout << "Not an alphabet letter" << endl;
    return 0;
}`],
["16. CHECK VOWEL OR CONSONANT (IF-ELSE)", `tolower() দিয়ে ছোট হাতে করা হয়, তারপর a/e/i/o/u → Vowel, বাকি → Consonant।
  উদাহরণ: 'A' → tolower → 'a' → Vowel  |  'B' → Consonant  |  '5' → Not an alphabet`, `#include <stdio.h>
#include <ctype.h>

int main() {
    char ch;
    printf("Enter an alphabet: ");
    scanf("%c", &ch);
    ch = tolower(ch);
    if (ch == 'a' || ch == 'e' || ch == 'i'
        || ch == 'o' || ch == 'u')
        printf("Vowel\\n");
    else if (ch >= 'a' && ch <= 'z')
        printf("Consonant\\n");
    else
        printf("Not an alphabet\\n");
    return 0;
}`, `#include <iostream>
#include <cctype>
using namespace std;

int main() {
    char ch;
    cout << "Enter an alphabet: ";
    cin >> ch;
    ch = tolower(ch);
    if (ch == 'a' || ch == 'e' || ch == 'i'
        || ch == 'o' || ch == 'u')
        cout << "Vowel" << endl;
    else if (ch >= 'a' && ch <= 'z')
        cout << "Consonant" << endl;
    else
        cout << "Not an alphabet" << endl;
    return 0;
}`],
["17. CHECK VOWEL OR CONSONANT (SWITCH-CASE)", `switch-case: একটি মানের বিপরীতে নির্দিষ্ট case মেলানো হয়। if-else এর চেয়ে পরিষ্কার।
  ch = tolower(ch) → আগে ছোট হাতে রূপান্তর, তারপর case 'a','e','i','o','u' → Vowel
  default: 'a'–'z' হলে Consonant, না হলে Not an alphabet।
  উদাহরণ: 'E' → tolower → 'e' → case 'e' → Vowel  |  'k' → default → Consonant`, `#include <stdio.h>
#include <ctype.h>

int main() {
    char ch;
    printf("Enter an alphabet: ");
    scanf("%c", &ch);
    ch = tolower(ch);
    switch(ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            printf("Vowel\\n");
            break;
        default:
            if (ch >= 'a' && ch <= 'z')
                printf("Consonant\\n");
            else
                printf("Not an alphabet\\n");
    }
    return 0;
}`, `#include <iostream>
#include <cctype>
using namespace std;

int main() {
    char ch;
    cout << "Enter an alphabet: ";
    cin >> ch;
    ch = tolower(ch);
    switch(ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            cout << "Vowel" << endl;
            break;
        default:
            if (ch >= 'a' && ch <= 'z')
                cout << "Consonant" << endl;
            else
                cout << "Not an alphabet" << endl;
    }
    return 0;
}`],
["18. PRINT \"BANGLADESH\" 10 TIMES (FOR / WHILE / DO-WHILE)", `for → শুরু, শর্ত, পরিবর্তন একলাইনে। গণনার জন্য সবচেয়ে উপযুক্ত।
while → আগে শর্ত দেখে, তারপর চালায়। শর্ত মিথ্যা হলে একবারও চলে না।
do-while → আগে একবার চালায়, তারপর শর্ত দেখে। অন্তত একবার চলবেই।`, `#include <stdio.h>
int main() {
    // for loop
    for (int i=0; i<10; i++)
        printf("Bangladesh\\n");
    // while loop
    int j=0;
    while (j<10) { printf("Bangladesh\\n"); j++; }
    // do-while loop
    int k=0;
    do { printf("Bangladesh\\n"); k++; }
    while (k<10);
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    // for loop
    for (int i=0; i<10; i++)
        cout << "Bangladesh" << endl;
    // while loop
    int j=0;
    while (j<10) { cout << "Bangladesh" << endl; j++; }
    // do-while loop
    int k=0;
    do { cout << "Bangladesh" << endl; k++; }
    while (k<10);
    return 0;
}`],
["19. PRINT 1 TO 10 (FOR / WHILE / DO-WHILE)", `একই কাজ তিনটি ভিন্ন লুপ দিয়ে — তিনটির আউটপুট একই: 1 2 3 4 5 6 7 8 9 10
for → for (int i=1; i<=10; i++) { ... }    while → int i=1; while(i<=10){...i++;}
do-while → int i=1; do { ... i++; } while(i<=10);  — অন্তত একবার চলবেই`, `#include <stdio.h>
int main() {
    // for loop
    for (int i=1; i<=10; i++)
        printf("%d ", i);
    // while loop
    int j=1;
    while (j<=10) { printf("%d ", j); j++; }
    // do-while loop
    int k=1;
    do { printf("%d ", k); k++; }
    while (k<=10);
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    // for loop
    for (int i=1; i<=10; i++)
        cout << i << " ";
    // while loop
    int j=1;
    while (j<=10) { cout << j << " "; j++; }
    // do-while loop
    int k=1;
    do { cout << k << " "; k++; }
    while (k<=10);
    return 0;
}`],
["20. SUM OF 1 TO 10 (FOR LOOP)", `১ থেকে ১০ পর্যন্ত যোগফল:
  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
  পদ্ধতি: sum=0 দিয়ে শুরু, প্রতি ধাপে sum = sum + i করা হয়।
  সূত্র: n(n+1)/2 = 10×11/2 = 55  (লুপ না চালিয়েও পাওয়া যায়)`, `#include <stdio.h>

int main() {
    int sum = 0;
    for (int i = 1; i <= 10; i++)
        sum = sum + i;
    printf("Sum = %d\\n", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int sum = 0;
    for (int i = 1; i <= 10; i++)
        sum = sum + i;
    cout << "Sum = " << sum << endl;
    return 0;
}`],
["21. CHECK PRIME NUMBER", `মৌলিক সংখ্যা: শুধু ১ ও নিজে দিয়ে বিভাজ্য।
  পদ্ধতি: ২ থেকে (num−1) পর্যন্ত ভাগ করে দেখা হয়।
  উদাহরণ: 7 → 2,3,4,5,6 দিয়ে ভাগ হয় না → মৌলিক ✓
           9 → 3 দিয়ে ভাগ হয় → মৌলিক নয় ✗`, `#include <stdio.h>

int main() {
    int num, count = 0;
    printf("Enter any positive number: ");
    scanf("%d", &num);
    if (num <= 1) {
        printf("Not Prime Number");
        return 0;
    }
    for (int i = 2; i < num; i++) {
        if (num % i == 0) {
            count++;
            break;
        }
    }
    if (count == 0)
        printf("Prime Number");
    else
        printf("Not Prime Number");
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int num, count = 0;
    cout << "Enter any positive number: ";
    cin >> num;
    if (num <= 1) {
        cout << "Not Prime Number";
        return 0;
    }
    for (int i = 2; i < num; i++) {
        if (num % i == 0) {
            count++;
            break;
        }
    }
    if (count == 0)
        cout << "Prime Number";
    else
        cout << "Not Prime Number";
    return 0;
}`],
["22. CHECK PERFECT NUMBER", `পরিপূর্ণ সংখ্যা: নিজ ব্যতীত সকল গুণনীয়কের যোগফল = নিজেই।
  উদাহরণ: 6 → গুণনীয়ক: 1,2,3 → 1+2+3 = 6 ✓
           28 → গুণনীয়ক: 1,2,4,7,14 → যোগফল = 28 ✓
           12 → গুণনীয়ক যোগ = 16 ≠ 12 ✗`, `#include <stdio.h>

int main() {
    int num, sum = 0;
    printf("Enter a number: ");
    scanf("%d", &num);
    for (int i = 1; i < num; i++) {
        if (num % i == 0)
            sum = sum + i;
    }
    if (sum == num)
        printf("Perfect Number\\n");
    else
        printf("Not Perfect Number\\n");
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int num, sum = 0;
    cout << "Enter a number: ";
    cin >> num;
    for (int i = 1; i < num; i++) {
        if (num % i == 0)
            sum = sum + i;
    }
    if (sum == num)
        cout << "Perfect Number" << endl;
    else
        cout << "Not Perfect Number" << endl;
    return 0;
}`],
["23. SUM OF DIGITS IN AN INTEGER", `পদ্ধতি: temp%10 → শেষ অঙ্ক বের করে, sum += অঙ্ক, temp/10 → শেষ অঙ্ক বাদ দেয়। temp=0 হলে শেষ হয়।
  1234 এর অঙ্কসমূহের যোগ: sum=0
  ধাপ ১: r=4, sum=4,  temp=123
  ধাপ ২: r=3, sum=7,  temp=12
  ধাপ ৩: r=2, sum=9,  temp=1
  ধাপ ৪: r=1, sum=10, temp=0 → শেষ  →  আউটপুট: 10`, `#include <stdio.h>

int main() {
    int num, temp, r, sum = 0;
    printf("Enter a number: ");
    scanf("%d", &num);
    temp = num;
    while (temp != 0) {
        r = temp % 10;
        sum = sum + r;
        temp = temp / 10;
    }
    printf("Sum of digits = %d\\n", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int num, temp, r, sum = 0;
    cout << "Enter a number: ";
    cin >> num;
    temp = num;
    while (temp != 0) {
        r = temp % 10;
        sum = sum + r;
        temp = temp / 10;
    }
    cout << "Sum of digits = " << sum << endl;
    return 0;
}`],
["24. REVERSE A NUMBER", `পদ্ধতি: temp%10 → শেষ অঙ্ক বের করে, sum = sum×10 + অঙ্ক, temp/10 → শেষ অঙ্ক বাদ দেয়।
  1234 উল্টানো: sum=0
  ধাপ ১: r=4, sum=0×10+4=4,    temp=123
  ধাপ ২: r=3, sum=4×10+3=43,   temp=12
  ধাপ ৩: r=2, sum=43×10+2=432, temp=1
  ধাপ ৪: r=1, sum=432×10+1=4321, temp=0 → শেষ  →  আউটপুট: 4321`, `#include <stdio.h>

int main() {
    int num, temp, r, sum = 0;
    printf("Enter a number: ");
    scanf("%d", &num);
    temp = num;
    while (temp != 0) {
        r = temp % 10;
        sum = sum * 10 + r;
        temp = temp / 10;
    }
    printf("Reversed number = %d\\n", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int num, temp, r, sum = 0;
    cout << "Enter a number: ";
    cin >> num;
    temp = num;
    while (temp != 0) {
        r = temp % 10;
        sum = sum * 10 + r;
        temp = temp / 10;
    }
    cout << "Reversed number = " << sum << endl;
    return 0;
}`],
["25. CHECK PALINDROME NUMBER", `প্যালিন্ড্রোম সংখ্যা কী?
  উল্টালেও একই থাকে এমন সংখ্যা।
  উদাহরণ: 121 → উল্টো → 121 ✓  |  12321 → উল্টো → 12321 ✓  |  123 → উল্টো → 321 ✗
  পদ্ধতি: সংখ্যাটি উল্টে মূল সংখ্যার সাথে সমান কি না যাচাই করা।`, `#include <stdio.h>

int main() {
    int num, temp, r, sum = 0;
    printf("Enter a number: ");
    scanf("%d", &num);
    temp = num;
    while (temp != 0) {
        r = temp % 10;
        sum = sum * 10 + r;
        temp = temp / 10;
    }
    if (sum == num)
        printf("Palindrome number\\n");
    else
        printf("Not palindrome number\\n");
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int num, temp, r, sum = 0;
    cout << "Enter a number: ";
    cin >> num;
    temp = num;
    while (temp != 0) {
        r = temp % 10;
        sum = sum * 10 + r;
        temp = temp / 10;
    }
    if (sum == num)
        cout << "Palindrome number" << endl;
    else
        cout << "Not palindrome number" << endl;
    return 0;
}`],
["26. CHECK ARMSTRONG NUMBER", `আর্মস্ট্রং সংখ্যা: ৩-অঙ্কের সংখ্যায় প্রতিটি অঙ্কের ঘনের (cube) যোগফল = সংখ্যা।
  উদাহরণ: 153 → 1³+5³+3³ = 1+125+27 = 153 ✓
           370 → 3³+7³+0³ = 27+343+0 = 370 ✓
           123 → 1+8+27 = 36 ≠ 123 ✗`, `#include <stdio.h>

int main() {
    int num, temp, r, sum = 0;
    printf("Enter a number: ");
    scanf("%d", &num);
    temp = num;
    while (temp != 0) {
        r = temp % 10;
        sum = sum + r * r * r;
        temp = temp / 10;
    }
    if (sum == num)
        printf("Armstrong number\\n");
    else
        printf("Not Armstrong number\\n");
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int num, temp, r, sum = 0;
    cout << "Enter a number: ";
    cin >> num;
    temp = num;
    while (temp != 0) {
        r = temp % 10;
        sum = sum + r * r * r;
        temp = temp / 10;
    }
    if (sum == num)
        cout << "Armstrong number" << endl;
    else
        cout << "Not Armstrong number" << endl;
    return 0;
}`],
["27. CHECK STRONG NUMBER", `স্ট্রং সংখ্যা: প্রতিটি অঙ্কের ফ্যাক্টোরিয়ালের যোগফল = সংখ্যা।
  উদাহরণ: 145 → 1! + 4! + 5! = 1 + 24 + 120 = 145 ✓
           2 → 2! = 2 ✓
           123 → 1!+2!+3! = 1+2+6 = 9 ≠ 123 ✗`, `#include <stdio.h>

int main() {
    int num, temp, r, sum = 0, f;
    printf("Enter a number: ");
    scanf("%d", &num);
    temp = num;
    while (temp != 0) {
        r = temp % 10;
        f = 1;
        for (int i = 1; i <= r; i++)
            f = f * i;
        sum = sum + f;
        temp = temp / 10;
    }
    if (sum == num)
        printf("Strong number\\n");
    else
        printf("Not strong number\\n");
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int num, temp, r, sum = 0, f;
    cout << "Enter a number: ";
    cin >> num;
    temp = num;
    while (temp != 0) {
        r = temp % 10;
        f = 1;
        for (int i = 1; i <= r; i++)
            f = f * i;
        sum = sum + f;
        temp = temp / 10;
    }
    if (sum == num)
        cout << "Strong number" << endl;
    else
        cout << "Not strong number" << endl;
    return 0;
}`],
["28. GCD AND LCM OF TWO NUMBERS", `গ.সা.গু (GCD) ও ল.সা.গু (LCM) নির্ণয়:
  Euclidean Algorithm: y != 0 পর্যন্ত x % y এর ভাগশেষ দিয়ে পুনরাবৃত্তি।
  সূত্র: LCM = (a * b) / GCD
  উদাহরণ: a=12, b=18 → GCD=6, LCM=(12*18)/6=36`, `#include <stdio.h>

int main() {
    int a, b, x, y, gcd, lcm;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    x = a; y = b;
    while (y != 0) {
        int temp = y;
        y = x % y;
        x = temp;
    }
    gcd = x;
    lcm = (a * b) / gcd;
    printf("GCD = %d\\n", gcd);
    printf("LCM = %d\\n", lcm);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int a, b, x, y, gcd, lcm;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    x = a; y = b;
    while (y != 0) {
        int temp = y;
        y = x % y;
        x = temp;
    }
    gcd = x;
    lcm = (a * b) / gcd;
    cout << "GCD = " << gcd << endl;
    cout << "LCM = " << lcm << endl;
    return 0;
}`],
["29. FACTORIAL OF A NUMBER", `ফ্যাক্টরিয়াল (!) কী?
  n! = n × (n-1) × (n-2) × ... × 2 × 1
  উদাহরণ: 0! = 1 (সংজ্ঞা অনুযায়ী)
           1! = 1
           5! = 5 × 4 × 3 × 2 × 1 = 120
           10! = 3,628,800
  লুপে: fact=1, i=1 থেকে n পর্যন্ত → fact = fact × i
  সতর্কতা: সংখ্যা দ্রুত বড় হয়। 13!-এর বেশি int-এ ধরে না।
            long long ব্যবহার করতে হয় (সর্বোচ্চ ≈ 9.2 × 10¹⁸)।`, `#include <stdio.h>

int main() {
    int num;
    unsigned long long fact = 1;
    printf("Enter a number: ");
    scanf("%d", &num);
    for (int i = 1; i <= num; i++)
        fact = fact * i;
    printf("Factorial = %llu", fact);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int num;
    unsigned long long fact = 1;
    cout << "Enter a number: ";
    cin >> num;
    for (int i = 1; i <= num; i++)
        fact = fact * i;
    cout << "Factorial = " << fact;
    return 0;
}`],
["30. FIBONACCI SERIES", `ফিবোনাচ্চি সিরিজ: প্রতিটি পদ = পূর্ববর্তী দুটি পদের যোগফল।
  a=0, b=1, next = a + b
  n=8 হলে আউটপুট: 0 1 1 2 3 5 8 13`, `#include <stdio.h>

int main() {
    int n, a = 0, b = 1, next;
    printf("Enter number of terms: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        printf("%d ", a);
        next = a + b;
        a = b;
        b = next;
    }
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int n, a = 0, b = 1, next;
    cout << "Enter number of terms: ";
    cin >> n;
    for (int i = 1; i <= n; i++) {
        cout << a << " ";
        next = a + b;
        a = b;
        b = next;
    }
    return 0;
}`],
["31. SERIES: 1! + 2! + 3! + 4! + ... + n! = ?", `সিরিজ: ১! + ২! + ৩! + ... + n!  — প্রতিটি পদ ফ্যাক্টরিয়াল, সব পদের যোগফল।
  n=5: 1! + 2! + 3! + 4! + 5! = 1 + 2 + 6 + 24 + 120 = 153`, `#include <stdio.h>

int main() {
    int num;
    unsigned long long fact = 1, sum = 0;
    printf("Enter a number: ");
    scanf("%d", &num);
    for (int i = 1; i <= num; i++) {
        fact = fact * i;
        sum = sum + fact;
    }
    printf("Sum = %llu", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int num;
    unsigned long long fact = 1, sum = 0;
    cout << "Enter a number: ";
    cin >> num;
    for (int i = 1; i <= num; i++) {
        fact = fact * i;
        sum = sum + fact;
    }
    cout << "Sum = " << sum;
    return 0;
}`],
["32. SERIES: 2! + 4! + 6! + ... + n! = ?", `সিরিজ: ২! + ৪! + ৬! + ... + n!  — শুধু জোড় পদের ফ্যাক্টরিয়াল যোগ করা হয়।
  n=6: 2! + 4! + 6! = 2 + 24 + 720 = 746`, `#include <stdio.h>

int main() {
    int num;
    unsigned long long fact = 1, sum = 0;
    printf("Enter a number: ");
    scanf("%d", &num);
    for (int i = 2; i <= num; i = i + 2) {
        fact = 1;
        for (int j = 1; j <= i; j++)
            fact = fact * j;
        sum = sum + fact;
    }
    printf("Sum = %llu", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int num;
    unsigned long long fact = 1, sum = 0;
    cout << "Enter a number: ";
    cin >> num;
    for (int i = 2; i <= num; i = i + 2) {
        fact = 1;
        for (int j = 1; j <= i; j++)
            fact = fact * j;
        sum = sum + fact;
    }
    cout << "Sum = " << sum;
    return 0;
}`],
["33. SERIES: 1! + 3! + 5! + ... + n! = ?", `সিরিজ: ১! + ৩! + ৫! + ... + n!  — শুধু বিজোড় পদের ফ্যাক্টরিয়াল যোগ করা হয়।
  n=5: 1! + 3! + 5! = 1 + 6 + 120 = 127`, `#include <stdio.h>

int main() {
    int num;
    unsigned long long fact = 1, sum = 0;
    printf("Enter a number: ");
    scanf("%d", &num);
    for (int i = 1; i <= num; i = i + 2) {
        fact = 1;
        for (int j = 1; j <= i; j++)
            fact = fact * j;
        sum = sum + fact;
    }
    printf("Sum = %llu", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int num;
    unsigned long long fact = 1, sum = 0;
    cout << "Enter a number: ";
    cin >> num;
    for (int i = 1; i <= num; i = i + 2) {
        fact = 1;
        for (int j = 1; j <= i; j++)
            fact = fact * j;
        sum = sum + fact;
    }
    cout << "Sum = " << sum;
    return 0;
}`],
["34. SERIES: 1 + 2 + 3 + 4 + ... + n = ?", `সিরিজ: ১ + ২ + ৩ + ... + n  — সব স্বাভাবিক সংখ্যার যোগফল।
  n=5: 1+2+3+4+5 = 15  |  সূত্র: n(n+1)/2 = 5×6/2 = 15`, `#include <stdio.h>

int main() {
    int n, sum = 0;
    printf("Enter n: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
        sum = sum + i;
    printf("Sum = %d\\n", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int n, sum = 0;
    cout << "Enter n: ";
    cin >> n;
    for (int i = 1; i <= n; i++)
        sum = sum + i;
    cout << "Sum = " << sum << endl;
    return 0;
}`],
["35. SERIES: 1 + 3 + 5 + ... + n = ?", `সিরিজ: ১ + ৩ + ৫ + ... + n  — শুধু বিজোড় সংখ্যার যোগফল।
  n=7: 1 + 3 + 5 + 7 = 16  |  লুপে i=1 থেকে শুরু, i+=2 করে বাড়ানো হয়।`, `#include <stdio.h>

int main() {
    int n, sum = 0;
    printf("Enter n: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i = i + 2)
        sum = sum + i;
    printf("Sum = %d\\n", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int n, sum = 0;
    cout << "Enter n: ";
    cin >> n;
    for (int i = 1; i <= n; i = i + 2)
        sum = sum + i;
    cout << "Sum = " << sum << endl;
    return 0;
}`],
["36. SERIES: 2 + 4 + 6 + 8 + ... + n = ?", `সিরিজ: ২ + ৪ + ৬ + ... + n  — শুধু জোড় সংখ্যার যোগফল।
  n=6: 2 + 4 + 6 = 12  |  লুপে i=2 থেকে শুরু, i+=2 করে বাড়ানো হয়।`, `#include <stdio.h>

int main() {
    int n, sum = 0;
    printf("Enter n: ");
    scanf("%d", &n);
    for (int i = 2; i <= n; i = i + 2)
        sum = sum + i;
    printf("Sum = %d\\n", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int n, sum = 0;
    cout << "Enter n: ";
    cin >> n;
    for (int i = 2; i <= n; i = i + 2)
        sum = sum + i;
    cout << "Sum = " << sum << endl;
    return 0;
}`],
["37. SERIES: 1¹ + 2² + 3³ + 4⁴ + ... + nⁿ = ?", `সিরিজ: ১¹ + ২² + ৩³ + ... + nⁿ  — প্রতিটি সংখ্যা নিজেই নিজের ঘাতে উঠানো হয়।
  n=4: 1¹ + 2² + 3³ + 4⁴ = 1 + 4 + 27 + 256 = 288`, `#include <stdio.h>
#include <math.h>

int main() {
    int n;
    long long sum = 0;
    printf("Enter n: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
        sum = sum + (long long)pow(i, i);
    printf("Sum = %lld\\n", sum);
    return 0;
}`, `#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int n;
    long long sum = 0;
    cout << "Enter n: ";
    cin >> n;
    for (int i = 1; i <= n; i++)
        sum = sum + (long long)pow(i, i);
    cout << "Sum = " << sum << endl;
    return 0;
}`],
["38. SERIES: 1² + 2² + 3² + 4² + ... + n² = ?", `সিরিজ: ১² + ২² + ৩² + ... + n²  — সব সংখ্যার বর্গের যোগফল।
  n=4: 1² + 2² + 3² + 4² = 1 + 4 + 9 + 16 = 30`, `#include <stdio.h>

int main() {
    int n, sum = 0;
    printf("Enter n: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
        sum = sum + i * i;
    printf("Sum = %d\\n", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int n, sum = 0;
    cout << "Enter n: ";
    cin >> n;
    for (int i = 1; i <= n; i++)
        sum = sum + i * i;
    cout << "Sum = " << sum << endl;
    return 0;
}`],
["39. SERIES: 1² + 3² + 5² + ... + n² = ?", `সিরিজ: ১² + ৩² + ৫² + ... + n²  — শুধু বিজোড় সংখ্যার বর্গের যোগফল।
  n=5: 1² + 3² + 5² = 1 + 9 + 25 = 35`, `#include <stdio.h>

int main() {
    int n, sum = 0;
    printf("Enter n: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i = i + 2)
        sum = sum + i * i;
    printf("Sum = %d\\n", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int n, sum = 0;
    cout << "Enter n: ";
    cin >> n;
    for (int i = 1; i <= n; i = i + 2)
        sum = sum + i * i;
    cout << "Sum = " << sum << endl;
    return 0;
}`],
["40. SERIES: 2² + 4² + 6² + 8² + ... + n² = ?", `সিরিজ: ২² + ৪² + ৬² + ... + n²  — শুধু জোড় সংখ্যার বর্গের যোগফল।
  n=6: 2² + 4² + 6² = 4 + 16 + 36 = 56`, `#include <stdio.h>

int main() {
    int n, sum = 0;
    printf("Enter n: ");
    scanf("%d", &n);
    for (int i = 2; i <= n; i = i + 2)
        sum = sum + i * i;
    printf("Sum = %d\\n", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int n, sum = 0;
    cout << "Enter n: ";
    cin >> n;
    for (int i = 2; i <= n; i = i + 2)
        sum = sum + i * i;
    cout << "Sum = " << sum << endl;
    return 0;
}`],
["41. SERIES: 1 + 2 + 4 + 8 + ... + 2ⁿ = ?", `সিরিজ: ১ + ২ + ৪ + ৮ + ...  — প্রতিটি পদ আগেরটির দ্বিগুণ (২ গুণোত্তর ধারা)।
  n=5 পদ: 1 + 2 + 4 + 8 + 16 = 31  |  term = term × 2 করে বাড়ানো হয়।`, `#include <stdio.h>

int main() {
    int n, sum = 0, term = 1;
    printf("Enter number of terms: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        sum = sum + term;
        term = term * 2;
    }
    printf("Sum = %d\\n", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int n, sum = 0, term = 1;
    cout << "Enter number of terms: ";
    cin >> n;
    for (int i = 0; i < n; i++) {
        sum = sum + term;
        term = term * 2;
    }
    cout << "Sum = " << sum << endl;
    return 0;
}`],
["42. SERIES: 1 + 3 + 9 + 27 + ... + 3ⁿ = ?", `সিরিজ: ১ + ৩ + ৯ + ২৭ + ...  — প্রতিটি পদ আগেরটির তিনগুণ (৩ গুণোত্তর ধারা)।
  n=4 পদ: 1 + 3 + 9 + 27 = 40  |  term = term × 3 করে বাড়ানো হয়।`, `#include <stdio.h>

int main() {
    int n, sum = 0, term = 1;
    printf("Enter number of terms: ");
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        sum = sum + term;
        term = term * 3;
    }
    printf("Sum = %d\\n", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int n, sum = 0, term = 1;
    cout << "Enter number of terms: ";
    cin >> n;
    for (int i = 0; i < n; i++) {
        sum = sum + term;
        term = term * 3;
    }
    cout << "Sum = " << sum << endl;
    return 0;
}`],
["43. SERIES: 1/1 + 1/2 + 1/3 + ... + 1/n = ?", `সিরিজ: ১/১ + ১/২ + ১/৩ + ... + ১/n  — হারমোনিক সিরিজ, ভাজক বাড়তে থাকে।
  n=4: 1 + 0.5 + 0.333 + 0.25 ≈ 2.083  |  float ব্যবহার করতে হয়।`, `#include <stdio.h>

int main() {
    int n;
    double sum = 0.0;
    printf("Enter n: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
        sum = sum + 1.0 / i;
    printf("Sum = %lf\\n", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int n;
    double sum = 0.0;
    cout << "Enter n: ";
    cin >> n;
    for (int i = 1; i <= n; i++)
        sum = sum + 1.0 / i;
    cout << "Sum = " << sum << endl;
    return 0;
}`],
["44. SERIES: 1/1² + 1/2² + 1/3² + ... + 1/n² = ?", `সিরিজ: ১/১² + ১/২² + ১/৩² + ...  — প্রতিটি পদ 1/(i×i), ভাজক বর্গাকারে বাড়ে।
  n=4: 1 + 0.25 + 0.111 + 0.0625 ≈ 1.424  |  Basel series নামে পরিচিত।`, `#include <stdio.h>

int main() {
    int n;
    double sum = 0.0;
    printf("Enter n: ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
        sum = sum + 1.0 / (i * i);
    printf("Sum = %lf\\n", sum);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int n;
    double sum = 0.0;
    cout << "Enter n: ";
    cin >> n;
    for (int i = 1; i <= n; i++)
        sum = sum + 1.0 / (i * i);
    cout << "Sum = " << sum << endl;
    return 0;
}`],
["PATTERN 1. ASCENDING LEFT TRIANGLE — STARS (*)", `*
* *
* * *
* * * *
* * * * *`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            printf("* ");
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            cout << "* ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 2. ASCENDING LEFT TRIANGLE — HASH (#)", `#
# #
# # #
# # # #
# # # # #`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            printf("# ");
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            cout << "# ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 3. ASCENDING LEFT TRIANGLE — COL NUMBER", `1
1 2
1 2 3
1 2 3 4
1 2 3 4 5`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            printf("%d ", col);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            cout << col << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 4. ASCENDING LEFT TRIANGLE — ROW NUMBER", `1
2 2
3 3 3
4 4 4 4
5 5 5 5 5`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            printf("%d ", row);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            cout << row << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 5. ASCENDING LEFT TRIANGLE — COL%2 (0/1)", `1
1 0
1 0 1
1 0 1 0
1 0 1 0 1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            printf("%d ", col%2);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            cout << col%2 << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 6. ASCENDING LEFT TRIANGLE — ROW%2 (0/1)", `1
0 0
1 1 1
0 0 0 0
1 1 1 1 1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            printf("%d ", row%2);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            cout << row%2 << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 7. ASCENDING LEFT TRIANGLE — ROW LETTER", `A
B B
C C C
D D D D
E E E E E`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            printf("%c ", row+64);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            cout << (char)(row+64) << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 8. ASCENDING LEFT TRIANGLE — COL LETTER", `A
A B
A B C
A B C D
A B C D E`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            printf("%c ", col+64);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            cout << (char)(col+64) << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 9. DESCENDING LEFT TRIANGLE — STARS (*)", `* * * * *
* * * *
* * *
* *
*`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            printf("* ");
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            cout << "* ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 10. DESCENDING LEFT TRIANGLE — HASH (#)", `# # # # #
# # # #
# # #
# #
#`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            printf("# ");
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            cout << "# ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 11. DESCENDING LEFT TRIANGLE — COL NUMBER", `1 2 3 4 5
1 2 3 4
1 2 3
1 2
1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            printf("%d ", col);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            cout << col << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 12. DESCENDING LEFT TRIANGLE — ROW NUMBER", `5 5 5 5 5
4 4 4 4
3 3 3
2 2
1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            printf("%d ", row);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            cout << row << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 13. DESCENDING LEFT TRIANGLE — COL%2 (0/1)", `1 0 1 0 1
1 0 1 0
1 0 1
1 0
1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            printf("%d ", col%2);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            cout << col%2 << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 14. DESCENDING LEFT TRIANGLE — ROW%2 (0/1)", `1 1 1 1 1
0 0 0 0
1 1 1
0 0
1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            printf("%d ", row%2);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            cout << row%2 << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 15. DESCENDING LEFT TRIANGLE — ROW LETTER", `E E E E E
D D D D
C C C
B B
A`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            printf("%c ", row+64);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            cout << (char)(row+64) << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 16. DESCENDING LEFT TRIANGLE — COL LETTER", `A B C D E
A B C D
A B C
A B
A`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            printf("%c ", col+64);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= row; col++) {
            cout << (char)(col+64) << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 17. DIAMOND SHAPE — STARS (*)", `*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            printf("* ");
        printf("\\n");
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            printf("* ");
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            cout << "* ";
        cout << endl;
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            cout << "* ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 18. DIAMOND SHAPE — HASH (#)", `#
# #
# # #
# # # #
# # # # #
# # # #
# # #
# #
#`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            printf("# ");
        printf("\\n");
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            printf("# ");
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            cout << "# ";
        cout << endl;
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            cout << "# ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 19. DIAMOND SHAPE — COL NUMBER", `1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            printf("%d ", col);
        printf("\\n");
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            printf("%d ", col);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            cout << col << " ";
        cout << endl;
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            cout << col << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 20. DIAMOND SHAPE — ROW NUMBER", `1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
4 4 4 4
3 3 3
2 2
1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            printf("%d ", row);
        printf("\\n");
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            printf("%d ", row);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            cout << row << " ";
        cout << endl;
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            cout << row << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 21. DIAMOND SHAPE — COL%2 (0/1)", `1
1 0
1 0 1
1 0 1 0
1 0 1 0 1
1 0 1 0
1 0 1
1 0
1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            printf("%d ", col%2);
        printf("\\n");
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            printf("%d ", col%2);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            cout << col%2 << " ";
        cout << endl;
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            cout << col%2 << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 22. DIAMOND SHAPE — ROW%2 (0/1)", `1
0 0
1 1 1
0 0 0 0
1 1 1 1 1
0 0 0 0
1 1 1
0 0
1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            printf("%d ", row%2);
        printf("\\n");
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            printf("%d ", row%2);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            cout << row%2 << " ";
        cout << endl;
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            cout << row%2 << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 23. DIAMOND SHAPE — ROW LETTER", `A
B B
C C C
D D D D
E E E E E
D D D D
C C C
B B
A`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            printf("%c ", row+64);
        printf("\\n");
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            printf("%c ", row+64);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            cout << (char)(row+64) << " ";
        cout << endl;
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            cout << (char)(row+64) << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 24. DIAMOND SHAPE — COL LETTER", `A
A B
A B C
A B C D
A B C D E
A B C D
A B C
A B
A`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            printf("%c ", col+64);
        printf("\\n");
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            printf("%c ", col+64);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++)
            cout << (char)(col+64) << " ";
        cout << endl;
    }
    for (row = n - 1; row >= 1; row--) {
        for (col = 1; col <= row; col++)
            cout << (char)(col+64) << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 25. RIGHT-ALIGNED ASCENDING TRIANGLE — STARS (*)", `        *
      * *
    * * *
  * * * *
* * * * *`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("* ");
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << "* ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 26. RIGHT-ALIGNED ASCENDING TRIANGLE — HASH (#)", `        #
      # #
    # # #
  # # # #
# # # # #`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("# ");
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << "# ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 27. RIGHT-ALIGNED ASCENDING TRIANGLE — COL NUMBER", `        1
      1 2
    1 2 3
  1 2 3 4
1 2 3 4 5`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("%d ", col);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << col << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 28. RIGHT-ALIGNED ASCENDING TRIANGLE — ROW NUMBER", `        1
      2 2
    3 3 3
  4 4 4 4
5 5 5 5 5`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("%d ", row);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << row << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 29. RIGHT-ALIGNED ASCENDING TRIANGLE — COL%2 (0/1)", `        1
      1 0
    1 0 1
  1 0 1 0
1 0 1 0 1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("%d ", col%2);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << col%2 << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 30. RIGHT-ALIGNED ASCENDING TRIANGLE — ROW%2 (0/1)", `        1
      0 0
    1 1 1
  0 0 0 0
1 1 1 1 1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("%d ", row%2);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << row%2 << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 31. RIGHT-ALIGNED ASCENDING TRIANGLE — ROW LETTER", `        A
      B B
    C C C
  D D D D
E E E E E`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("%c ", row+64);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << (char)(row+64) << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 32. RIGHT-ALIGNED ASCENDING TRIANGLE — COL LETTER", `        A
      A B
    A B C
  A B C D
A B C D E`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("%c ", col+64);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << (char)(col+64) << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 33. RIGHT-ALIGNED DESCENDING TRIANGLE — STARS (*)", `* * * * *
  * * * *
    * * *
      * *
        *`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("* ");
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << "* ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 34. RIGHT-ALIGNED DESCENDING TRIANGLE — HASH (#)", `# # # # #
  # # # #
    # # #
      # #
        #`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("# ");
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << "# ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 35. RIGHT-ALIGNED DESCENDING TRIANGLE — COL NUMBER", `1 2 3 4 5
  1 2 3 4
    1 2 3
      1 2
        1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("%d ", col);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << col << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 36. RIGHT-ALIGNED DESCENDING TRIANGLE — ROW NUMBER", `5 5 5 5 5
  4 4 4 4
    3 3 3
      2 2
        1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("%d ", row);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << row << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 37. RIGHT-ALIGNED DESCENDING TRIANGLE — COL%2 (0/1)", `1 0 1 0 1
  1 0 1 0
    1 0 1
      1 0
        1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("%d ", col%2);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << col%2 << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 38. RIGHT-ALIGNED DESCENDING TRIANGLE — ROW%2 (0/1)", `1 1 1 1 1
  0 0 0 0
    1 1 1
      0 0
        1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("%d ", row%2);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << row%2 << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 39. RIGHT-ALIGNED DESCENDING TRIANGLE — ROW LETTER", `E E E E E
  D D D D
    C C C
      B B
        A`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("%c ", row+64);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << (char)(row+64) << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 40. RIGHT-ALIGNED DESCENDING TRIANGLE — COL LETTER", `A B C D E
  A B C D
    A B C
      A B
        A`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            printf("  ");
        for (col = 1; col <= row; col++) {
            printf("%c ", col+64);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = n; row >= 1; row--) {
        for (col = 1; col <= n - row; col++)
            cout << "  ";
        for (col = 1; col <= row; col++) {
            cout << (char)(col+64) << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 41. RECTANGLE / SQUARE — STARS (*)", `* * * * *
* * * * *
* * * * *
* * * * *
* * * * *`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            printf("* ");
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            cout << "* ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 42. RECTANGLE / SQUARE — HASH (#)", `# # # # #
# # # # #
# # # # #
# # # # #
# # # # #`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            printf("# ");
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            cout << "# ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 43. RECTANGLE / SQUARE — COL NUMBER", `1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            printf("%d ", col);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            cout << col << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 44. RECTANGLE / SQUARE — ROW NUMBER", `1 1 1 1 1
2 2 2 2 2
3 3 3 3 3
4 4 4 4 4
5 5 5 5 5`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            printf("%d ", row);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            cout << row << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 45. RECTANGLE / SQUARE — COL%2 (0/1)", `1 0 1 0 1
1 0 1 0 1
1 0 1 0 1
1 0 1 0 1
1 0 1 0 1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            printf("%d ", col%2);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            cout << col%2 << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 46. RECTANGLE / SQUARE — ROW%2 (0/1)", `1 1 1 1 1
0 0 0 0 0
1 1 1 1 1
0 0 0 0 0
1 1 1 1 1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            printf("%d ", row%2);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            cout << row%2 << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 47. RECTANGLE / SQUARE — ROW LETTER", `A A A A A
B B B B B
C C C C C
D D D D D
E E E E E`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            printf("%c ", row+64);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            cout << (char)(row+64) << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 48. RECTANGLE / SQUARE — COL LETTER", `A B C D E
A B C D E
A B C D E
A B C D E
A B C D E`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            printf("%c ", col+64);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n; col++)
            cout << (char)(col+64) << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 49. COUNTING PATTERN — ++COUNT", `1
2 3
4 5 6
7 8 9 10`, `#include <stdio.h>
int main() {
    int row, col, count = 0, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            printf("%d ", ++count);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, count = 0, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            cout << ++count << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 50. COUNTING PATTERN — COUNT++", `0
1 2
3 4 5
6 7 8 9`, `#include <stdio.h>
int main() {
    int row, col, count = 0, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            printf("%d ", count++);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, count = 0, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            cout << count++ << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 51. COUNTING PATTERN — COL×ROW", `1
2 4
3 6 9
4 8 12 16`, `#include <stdio.h>
int main() {
    int row, col, count = 0, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            printf("%d ", col*row);
        }
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, count = 0, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= row; col++) {
            cout << col*row << " ";
        }
        cout << endl;
    }
    return 0;
}`],
["PATTERN 52. CENTERED PYRAMID — STARS (*)", `    *
   * * *
  * * * * *
 * * * * * * *
* * * * * * * * *`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  "); // double space
        for (col = 1; col <= 2 * row - 1; col++)
            printf("* ");
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  "; // double space
        for (col = 1; col <= 2 * row - 1; col++)
            cout << "* ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 53. CENTERED PYRAMID — HASH (#)", `    #
   # # #
  # # # # #
 # # # # # # #
# # # # # # # # #`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  "); // double space
        for (col = 1; col <= 2 * row - 1; col++)
            printf("# ");
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  "; // double space
        for (col = 1; col <= 2 * row - 1; col++)
            cout << "# ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 54. CENTERED PYRAMID — COL NUMBER", `    1
   1 2 3
  1 2 3 4 5
 1 2 3 4 5 6 7
1 2 3 4 5 6 7 8 9`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  "); // double space
        for (col = 1; col <= 2 * row - 1; col++)
            printf("%d ", col);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  "; // double space
        for (col = 1; col <= 2 * row - 1; col++)
            cout << col << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 55. CENTERED PYRAMID — ROW NUMBER", `    1
   2 2 2
  3 3 3 3 3
 4 4 4 4 4 4 4
5 5 5 5 5 5 5 5 5`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  "); // double space
        for (col = 1; col <= 2 * row - 1; col++)
            printf("%d ", row);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  "; // double space
        for (col = 1; col <= 2 * row - 1; col++)
            cout << row << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 56. CENTERED PYRAMID — COL%2 (0/1)", `    1
   1 0 1
  1 0 1 0 1
 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0 1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  "); // double space
        for (col = 1; col <= 2 * row - 1; col++)
            printf("%d ", col%2);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  "; // double space
        for (col = 1; col <= 2 * row - 1; col++)
            cout << col%2 << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 57. CENTERED PYRAMID — ROW%2 (0/1)", `    1
   0 0 0
  1 1 1 1 1
 0 0 0 0 0 0 0
1 1 1 1 1 1 1 1 1`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  "); // double space
        for (col = 1; col <= 2 * row - 1; col++)
            printf("%d ", row%2);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  "; // double space
        for (col = 1; col <= 2 * row - 1; col++)
            cout << row%2 << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 58. CENTERED PYRAMID — ROW LETTER", `    A
   B B B
  C C C C C
 D D D D D D D
E E E E E E E E E`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  "); // double space
        for (col = 1; col <= 2 * row - 1; col++)
            printf("%c ", row+64);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  "; // double space
        for (col = 1; col <= 2 * row - 1; col++)
            cout << (char)(row+64) << " ";
        cout << endl;
    }
    return 0;
}`],
["PATTERN 59. CENTERED PYRAMID — COL LETTER", `    A
   A B C
  A B C D E
 A B C D E F G
A B C D E F G H I`, `#include <stdio.h>
int main() {
    int row, col, n;
    printf("Enter a value of n: ");
    scanf("%d", &n);
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            printf("  "); // double space
        for (col = 1; col <= 2 * row - 1; col++)
            printf("%c ", col+64);
        printf("\\n");
    }
    return 0;
}`, `#include <iostream>
using namespace std;
int main() {
    int row, col, n;
    cout << "Enter a value of n: ";
    cin >> n;
    for (row = 1; row <= n; row++) {
        for (col = 1; col <= n - row; col++)
            cout << "  "; // double space
        for (col = 1; col <= 2 * row - 1; col++)
            cout << (char)(col+64) << " ";
        cout << endl;
    }
    return 0;
}`],
["53. FACTORIAL USING RECURSION", `রিকার্শন দিয়ে ফ্যাক্টরিয়াল:
  রিকার্শন মানে ফাংশন নিজেই নিজেকে ডাকে, ছোট ছোট ধাপে ভেঙে সমাধান করে।
  fact(5) কীভাবে কাজ করে:
    fact(5) = 5 × fact(4)
           = 5 × 4 × fact(3)
           = 5 × 4 × 3 × fact(2)
           = 5 × 4 × 3 × 2 × fact(1)
           = 5 × 4 × 3 × 2 × 1 = 120
  Base case: fact(n <= 1) = 1  ← এখানে রিকার্শন থামে।
  Base case না থাকলে ফাংশন অসীমভাবে নিজেকে ডাকতে থাকত।`, `#include <stdio.h>

int fact(int n) {
    if (n <= 1) return 1;
    else return n * fact(n - 1);
}

int main() {
    int number, result;
    printf("Enter a positive number: ");
    scanf("%d", &number);
    result = fact(number);
    printf("%d", result);
    return 0;
}`, `#include <iostream>
using namespace std;

int fact(int n) {
    if (n <= 1) return 1;
    else return n * fact(n - 1);
}

int main() {
    int number, result;
    cout << "Enter a positive number: ";
    cin >> number;
    result = fact(number);
    cout << result;
    return 0;
}`],
["54. FIBONACCI SERIES USING RECURSION", `রিকার্শন দিয়ে ফিবোনাচ্চি: fibo(n) = fibo(n-1) + fibo(n-2)
  Base cases: fibo(0) = 0,  fibo(1) = 1  ← এখানে রিকার্শন থামে।
  fibo(5) কীভাবে কাজ করে (গাছের মতো ডালপালা ছড়ায়):
    fibo(5)
    ├── fibo(4)
    │   ├── fibo(3) → fibo(2)+fibo(1) = 1+1 = 2
    │   └── fibo(2) → fibo(1)+fibo(0) = 1+0 = 1  → fibo(4) = 3
    └── fibo(3) → 2
    fibo(5) = 3 + 2 = 5 ✓
  আউটপুট (n=7): 0  1  1  2  3  5  8`, `#include <stdio.h>

int fibo(int n) {
    if (n == 0) return 0;
    else if (n == 1) return 1;
    else return fibo(n-1) + fibo(n-2);
}

int main() {
    int terms;
    printf("Enter the number of terms: ");
    scanf("%d", &terms);
    for (int i = 0; i < terms; i++)
        printf("%d ", fibo(i));
    return 0;
}`, `#include <iostream>
using namespace std;

int fibo(int n) {
    if (n == 0) return 0;
    else if (n == 1) return 1;
    else return fibo(n-1) + fibo(n-2);
}

int main() {
    int terms;
    cout << "Enter the number of terms: ";
    cin >> terms;
    for (int i = 0; i < terms; i++)
        cout << fibo(i) << " ";
    return 0;
}`],
["55. CALCULATE POWER USING RECURSION", `রিকার্শনে পাওয়ার: power(x,y) = x × power(x, y-1)
  Base case: power(x, 0) = 1
  উদাহরণ: power(2,4) = 2×power(2,3) = 2×2×power(2,2)
           = 2×2×2×power(2,1) = 2×2×2×2×power(2,0) = 2×2×2×2×1 = 16`, `#include <stdio.h>

int power(int x, int y) {
    if (y == 0) return 1;
    else return (x * power(x, y-1));
}

int main() {
    int b, p, c;
    printf("Enter Base and Power: ");
    scanf("%d %d", &b, &p);
    c = power(b, p);
    printf("%d", c);
    return 0;
}`, `#include <iostream>
using namespace std;

int power(int x, int y) {
    if (y == 0) return 1;
    else return (x * power(x, y-1));
}

int main() {
    int b, p, c;
    cout << "Enter Base and Power: ";
    cin >> b >> p;
    c = power(b, p);
    cout << c;
    return 0;
}`],
["56. FIND MAXIMUM IN AN ARRAY", `পদ্ধতি: max = arr[0] দিয়ে শুরু। প্রতিটি উপাদান max এর চেয়ে বড় হলে max আপডেট করো।
  arr=[5,12,3,20,1]: max=5 → 12>5 → max=12 → 3<12 → 20>12 → max=20 → 1<20
  →  Maximum = 20`, `#include <stdio.h>

int main() {
    int num[100], n, i;
    printf("How many numbers: ");
    scanf("%d", &n);
    for (i = 0; i < n; i++) scanf("%d", &num[i]);
    int max = num[0];
    for (i = 0; i < n; i++)
        if (max < num[i]) max = num[i];
    printf("%d\\n", max);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int num[100], n, i;
    cout << "How many numbers: ";
    cin >> n;
    for (i = 0; i < n; i++) cin >> num[i];
    int max = num[0];
    for (i = 0; i < n; i++)
        if (max < num[i]) max = num[i];
    cout << max << endl;
    return 0;
}`],
["57. FIND MINIMUM IN AN ARRAY", `পদ্ধতি: min = arr[0] দিয়ে শুরু। প্রতিটি উপাদান min এর চেয়ে ছোট হলে min আপডেট করো।
  arr=[5,12,3,20,1]: min=5 → 12>5 → 3<5 → min=3 → 20>3 → 1<3 → min=1
  →  Minimum = 1`, `#include <stdio.h>

int main() {
    int num[100], n, i;
    printf("How many numbers: ");
    scanf("%d", &n);
    for (i = 0; i < n; i++) scanf("%d", &num[i]);
    int min = num[0];
    for (i = 0; i < n; i++)
        if (min > num[i]) min = num[i];
    printf("%d\\n", min);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int num[100], n, i;
    cout << "How many numbers: ";
    cin >> n;
    for (i = 0; i < n; i++) cin >> num[i];
    int min = num[0];
    for (i = 0; i < n; i++)
        if (min > num[i]) min = num[i];
    cout << min << endl;
    return 0;
}`],
["58. SWAP TWO NUMBERS WITHOUT TEMPORARY VARIABLE", `তৃতীয় চলক (temp) ছাড়া অদলবদল — গাণিতিক কৌশল:
  a = 5,  b = 3
  a = a + b = 8      (a-তে যোগফল রাখা হলো)
  b = a - b = 8-3=5  (পুরনো a পাওয়া গেল)
  a = a - b = 8-5=3  (পুরনো b পাওয়া গেল)
  ফলাফল: a = 3,  b = 5  ✓`, `#include <stdio.h>

int main() {
    int a, b;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    a = b + a;
    b = a - b;
    a = a - b;
    printf("%d %d", a, b);
    return 0;
}`, `#include <iostream>
using namespace std;

int main() {
    int a, b;
    cout << "Enter two numbers: ";
    cin >> a >> b;
    a = b + a;
    b = a - b;
    a = a - b;
    cout << a << " " << b;
    return 0;
}`],
["59. CONTINUE STATEMENT — SKIP 3, PRINT REST", `continue কী করে?
লুপের ভেতরে continue পেলে সেই পুনরাবৃত্তির বাকি অংশ বাদ দিয়ে
সরাসরি পরের পুনরাবৃত্তিতে চলে যায়।
উদাহরণ (i==3 হলে skip): আউটপুট → 1 2 4 5 6 7 8 9 10  (3 বাদ)`, `#include <stdio.h>

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 3) continue;
        printf("%d ", i);
    }
    return 0;
} // Output: 1 2 4 5 6 7 8 9 10`, `#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 3) continue;
        cout << i << " ";
    }
    return 0;
} // Output: 1 2 4 5 6 7 8 9 10`],
["60. BREAK STATEMENT — STOP AT 3", `break কী করে?
লুপের ভেতরে break পেলে সম্পূর্ণ লুপ বন্ধ হয়ে বাইরে চলে আসে।
উদাহরণ (i==3 হলে stop): আউটপুট → 1 2  (3 আসতেই থামে)

continue vs break:
  continue → শুধু এই পুনরাবৃত্তি বাদ, লুপ চলতে থাকে।
  break    → পুরো লুপই বন্ধ।`, `#include <stdio.h>

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 3) break;
        printf("%d ", i);
    }
    return 0;
} // Output: 1 2`, `#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i == 3) break;
        cout << i << " ";
    }
    return 0;
} // Output: 1 2`]
    ];