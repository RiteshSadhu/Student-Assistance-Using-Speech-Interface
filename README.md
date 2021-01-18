# Web-Portal of "Student Assistance using Speech Interface"
This system is designed for voice based test using *Alexa AI assistance* and *NLP*. 
System will usefull where speaking and listening are more import. For example. IELTS, listening exams and more.
Student will go throw 3 stage test and result will processes by NLP processes.  
Student , Faculty and Admin will use this web portal to interact with site.
First and second test stage will process on Alexa echo devices and third will process on student dashboard.

 
## Descrition:
Students assistance using a speech interface will provide students to improve there learning and
skills. This will provide a speech interface to interact with the system. The system will provide a
solution according to a speech command using machine learning. Machine learning will be used
to decide the precision results of the speech interface and the best results. The student will use the
system for a more efficient learning module.  

This skill is designed for student's voice based test. Alexa will ask 6 question in per test.
check out Demonstration on Youtube.  
![alexa skill demonstration on youtube](https://img.icons8.com/fluent/48/000000/youtube-play.png "youtube icon")  
	https://youtu.be/Q0UTCNZcTHE

[presentations](https://www.canva.com/design/DAD_KTRP7Fw/szyRMaKyA7lbDRu_SEJGOg/view?utm_content=DAD_KTRP7Fw&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton#1)   
[project reports](https://drive.google.com/file/d/1yiReZr662NAvYngymQ3fpPoVfVjkgOcq/view?usp=sharing)


### Web-portal flow
System admin will mange system level complains and Faculty management.
Faculty will register self and then students will registerd by them. Faculty will also add topic after that they will add question and answers of differnt types.
Question Types: 
* Short answer (One or two word answer)
* True and False
* Descriptive answer (long answer)

student will start their test with alexa. 

After completion of test result will genrated.  




# How we calculate NLP processed Results?
Test has 7 questions. For every right answer of 1th to 6th question srudent will get 1 marks. but 7th question is long description answer so it will get upto 4 marks. 
Total marks 10.
## NLP Process
### For question 1st to 6th:
1. Question answer and student answer will fetch from database.
2. Tokenizing Words Student_answer and QUestion_answer using "word_tokenize".
3. For 1 to 6: matching both list (Student_answer and Question_answer)  
	if mathing number >= 1 then answer is right

### For question 7th:
1. Question answer and student answer will fetch from database.  
2. Tokenizing words Student_answer and QUestion_answer using "word_tokenize".  
3. Removing Stopwords from Tokenized_student_answer_list and Tokenizes_question_answer_list.
4. Genrating Synonyms Word List of Tokenized_student_answer_list and Tokenized_question_answer_list.
5. Tokenizing Sentence of Student_answer and Question_answer using "sentance_tokoniz". 
6. Now calculate Accuracy_of_words and Accuracy_of_sentances:  
	Accuracy_of_words = (Tokenized_student_answer/Tokenized_question_answer)*100  
	Accuracy_of_sentences = (Tokenized_sentence_Student_answer/Tokenized_sentence_Question_answer)*100
	
	Accuracy = (Accuracy_of_words * 0.7) + ( Accuracy_of_sentences * 0.3)
	marks of 7th question = 4*(Accuracy/100)


```python
		#accuracy of Sentance in Answer Seven
                accuracyOfSentance = round((sentanceTokenCount * 100) / len(lemmatizedSentance_keyword))
                #accuracy of Keyword and Tokens in Answer Seven
                accuracyOfTokenWords = round((synonymsWordTokenCount * 100)/ len(synonyms_keyword_text[6]))

                print("Accuracy of sentance : ", accuracyOfSentance)
                print("Accurecy of token word :", accuracyOfTokenWords)

                #result score of Descriptive Answer
                accuracy = (accuracyOfTokenWords * 0.7) + (accuracyOfSentance * 0.3)

                print('final accuracy of Descriptive answer : ', accuracy)

                #Descriptive Question has 4 points.
                totalMarks += 4*(accuracy/100)  
```


	
 

### Project and Source Description:
* Project Use MVC design design pattern.
* ORM SQL query for database oprations
* Flask Framewrok
* HTML, CSS, JAVA Script
* Bootstrap
* NLTK, SpeecRecognition 
* AWS S3 services
* AWS RDS
* AWS EC2

 





#### This repo contains:
* Template files (html, css, js, images)
* MVC design 
* Python 3.0 Libraries
* database 

#### Key notepoints of projects

