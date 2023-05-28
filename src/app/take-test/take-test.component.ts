import { Component } from '@angular/core';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.component.html',
  styleUrls: ['./take-test.component.css']
  
})
export class TakeTestComponent {

  questions = [
    { question: '1. How do you read this character:　あ？', options: ['a', 'e', 'i','o'], answer: 1 },
    { question: '2. What does this word mean:　月曜日（げつようび）？', options: ['monday', 'tuesday', 'friday','saturday'], answer: 1 },
    { question: '3. How do you read this character: み？', options: ['ma', 'mi', 'mu','mo'], answer: 2 },
    { question: '4. What does this word mean: 車（くるま） ？', options: ['bycicle', 'airplane', 'shoes','car'], answer: 4 },
    { question: '5. How do you read this character: す？', options: ['shi', 'su', 'sa','se'], answer: 2 },
    { question: '6. What does this word mean: 家（いえ）？', options: ['school', 'theater', 'house','hospital'], answer: 3 },
    { question: '7. How do you say 「I’m sorry」？', options: ['こんにちは', 'ありがとう', 'じゃあね','ごめんなさい'], answer: 4 },
    { question: '8. How would you translate: 私は音楽が大好き（わたしはおんがくだいすき）？', options: ['I love pizza', 'I love music', 'I love strawberries','I love movies'], answer: 2 },
    { question: '9. How would you translate the following:　彼の電話番号は　いちーさんーにーななーきゅうーろく？', options: ['His phone number is 321-697', 'His phone number is 132-796', 'His phone number is 123-796','His phone number is 271-693'], answer: 2 },
    { question: '10. How do you say 「tomorrow」？', options: ['明日（あした）', '今日（きょう）', '昨日（きのう）','今（いま）'], answer: 1 }
  ];

  userAnswers: number[] = [];
  showScore: boolean = false;
  score: number = 0;

  calculateScore(): void {
    this.score = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.userAnswers[i] === this.questions[i].answer) {
        this.score += 10;
      }
    }
    this.showScore = true;
    
  }  
 

 
}
