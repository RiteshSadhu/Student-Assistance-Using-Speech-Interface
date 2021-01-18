from project import db
from project.com.vo.TestVO import TestVO
from project.com.vo.TopicVO import TopicVO
from project.com.vo.StudentVO import StudentVO
from project.com.vo.QuestionVO import QuestionVO


class TestDAO():
    #viewTest: get test details for perticular testId
    def viewTest(self, testVO):
        testVOList = db.session.query(TestVO, TopicVO, StudentVO) \
            .join(TopicVO, TestVO.test_TopicId == TopicVO.topicId) \
            .join(StudentVO, TestVO.test_LoginId == StudentVO.studentId) \
            .filter(TestVO.testId == testVO.testId).all()
        return testVOList

    #viewPendingTest: only return pending test for perticular student
    def viewPendingTest(self, testVO):
        testList = db.session.query(TestVO, TopicVO)\
            .join(TopicVO, TestVO.test_TopicId == TopicVO.topicId)\
            .filter(db.and_(TestVO.test_LoginId == testVO.test_LoginId,
                            TestVO.test_AnswerSeven == testVO.test_AnswerSeven)).all()
        return testList

    #viewTestForStudent
    def viewTestForStudent(self, testVO):
        testList = db.session.query(TestVO, TopicVO, StudentVO) \
            .join(TopicVO, TestVO.test_TopicId == TopicVO.topicId) \
            .join(StudentVO, TestVO.test_LoginId == StudentVO.studentId)\
            .filter(TestVO.test_LoginId == testVO.test_LoginId).all()
        return testList

    #viweTestList: all test list
    def viewTestList(self):
        testList = db.session.query(TestVO, TopicVO, StudentVO) \
            .join(TopicVO, TestVO.test_TopicId == TopicVO.topicId) \
            .join(StudentVO, TestVO.test_LoginId == StudentVO.studentId).all()
        return testList

    #insertTestData: insert test data in testmaster
    def insertTestData(self, testVO):
        db.session.merge(testVO)
        db.session.commit()

    #viewTestQuestion: get question for particular questionId
    def viewTestQuestion(self, questionVO):
        testQestionVOList = QuestionVO.query.filter_by(questionId=questionVO.questionId)
        return testQestionVOList


    #viewPendingResult
    def viewPendingResult(self, testVO):
        testVOList = db.session.query(TestVO, TopicVO, StudentVO) \
            .join(TopicVO, TestVO.test_TopicId == TopicVO.topicId) \
            .join(StudentVO, TestVO.test_LoginId == StudentVO.studentId)\
            .filter(TestVO.test_ResultStatus == testVO.test_ResultStatus).all()
        return testVOList

    # total numbers of test (Count of test initiated by student)
    def totalTestCount(self):
        totalTestCount = TestVO.query.count()
        return totalTestCount

    #total numbers of Completed Test by Student (all types of questions)
    def totalCompletedTestCount(self):
        totalCompletedTestCount = TestVO.query.filter(TestVO.test_AnswerSeven != "none").count()
        return totalCompletedTestCount

    # count of generated Result ( count of genrated result by Faculty)
    def totalResultCount(self):
        totalResultCount = TestVO.query.filter(TestVO.test_ResultStatus == "generated").count()
        return totalResultCount

