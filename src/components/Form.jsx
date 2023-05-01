import React, { useEffect, useState } from "react";
const Form = () => {
  const questions = [
    {
      question: "How would you rate the overall trip?",
      questionType: "rating",
      questionId: "rating01",
      answerOptions: null,
    },
    // {
    //   question: "How would you rate the driver attitude?",
    //   questionType: "rating",
    //   questionId: "rating02",
    //   answerOptions: null,
    // },
    // {
    //   question: "How would you rate the ride hygiene and cleanliness?",
    //   questionType: "rating",
    //   questionId: "rating03",
    //   answerOptions: null,
    // },
    // {
    //   question: "Do you have any suggestions for us?",
    //   questionType: "text",
    //   questionId: "text01",
    //   answerOptions: null,
    // },
    // {
    //   question: "Do you have any tip for us?",
    //   questionType: "text",
    //   questionId: "text02",
    //   answerOptions: null,
    // },
    // {
    //   question: "Please select the extra expenses during the trip?",
    //   questionType: "multiSelect",
    //   questionId: "multi01",
    //   answerOptions: ["Toll", "Food", "Drinks"],
    // },
    // {
    //   question: "Please select the extra expenses other than trip?",
    //   questionType: "multiSelect",
    //   questionId: "multi02",
    //   answerOptions: ["Shopping", "Movie", "Grocery"],
    // },

    // {
    //   question: "Did you enjoy your trip with us?",
    //   questionType: "singleSelect",
    //   questionId: "single01",
    //   answerOptions: ["Yes", "No", "Maybe"],
    // },
    // {
    //   question: "What did you not like in the trip?",
    //   questionType: "singleSelect",
    //   questionId: "single02",
    //   answerOptions: ["Car", "Driver", "Route"],
    // },
  ];

  const [textFeedbackAnswer, setTextFeedbackAnswer] = useState([]);
  const [ratingFeedbackAnswer, setRatingFeedbackAnswer] = useState();
  const [singleSelectFeedbackAnswer, setSingleSelectFeedbackAnswer] = useState([]);
  const [multiSelectFeedbackAnswer, setMultiSelectFeedbackAnswer] = useState();

  const textOnChange = (input, questionId) => {
    console.log(questionId);
    setTextFeedbackAnswer([...textFeedbackAnswer, { [questionId]: input }]);
  };

  const ratingOnChange = (input, questionId) => {
    console.log(input, questionId);
    setRatingFeedbackAnswer({ [questionId]: input });
  };

  const singleSelectOnChange = (input, questionId) => {
    setSingleSelectFeedbackAnswer([...singleSelectFeedbackAnswer, { [questionId]: [input] }]);
  };

  const multiSelectOnChange = (input, questionId) => {
    // setMultiSelectFeedbackAnswerArray([...multiSelectFeedbackAnswerArray, input])
    setMultiSelectFeedbackAnswer({ [questionId]: [input] });
  };

  return (
    <form style={formStyle}>
      <h1 style={{ textAlign: "center" }}>Feedback Form</h1>
      {questions.map((ques, idx) => {
        const { question, questionId, questionType, answerOptions } = ques;
        switch (questionType) {
          case "rating":
            return (
              <div key={idx}>
                <div>
                  <h2>Question:</h2>
                  <p>{question}</p>
                </div>
                <div style={{ display: "flex" }}>
                  {[1, 2, 3, 4, 5].map((num, idx) => {
                    return ratingFeedbackAnswer >= num ? (
                      <div key={idx}>
                        <input
                          type="radio"
                          id={num}
                          value={num}
                          name={question}
                          style={{ display: "none" }}
                          onChange={(e) => ratingOnChange(e.target.value, questionId)}
                        ></input>
                        <label htmlFor={num}>
                          <i
                            className="fa-solid fa-star fa-xl"
                            style={{ color: "yellow", marginRight: "10px" }}
                          />
                        </label>
                      </div>
                    ) : (
                      <div key={idx}>
                        <input
                          type="radio"
                          id={num}
                          value={num}
                          name={question}
                          style={{ display: "none" }}
                          onChange={(e) => ratingOnChange(e.target.value)}
                        ></input>
                        <label htmlFor={num}>
                          <i
                            className="fa-regular fa-star fa-xl"
                            style={{ color: "grey", marginRight: "10px" }}
                          />
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );

          case "text":
            return (
              <div>
                <div>
                  <h2>Question:</h2>
                  <p>{question}</p>
                </div>
                <div>
                  <textarea
                    value={
                      textFeedbackAnswer[questionId] ? textFeedbackAnswer[questionId].input : ""
                    }
                    onChange={(e) => textOnChange(e.target.value, questionId)}
                    style={{
                      height: "5rem",
                      width: "100%",
                      border: "2px solid #ccc",
                      resize: "none",
                      background: " #f2f2f2",
                    }}
                  />
                </div>
              </div>
            );

          case "singleSelect":
            return (
              <div>
                <div>
                  <h2>Question:</h2>
                  <p>{question}</p>
                </div>
                <div>
                  {answerOptions.map((option, idx) => (
                    <div key={idx}>
                      <input
                        type="radio"
                        id={option}
                        name={question}
                        // checked={false}
                        value={option}
                        onChange={(e) => singleSelectOnChange(e.target.value, questionId)}
                      />
                      <label htmlFor={option}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            );

          case "multiSelect":
            return (
              <div>
                <div>
                  <h2>Question:</h2>
                  <p>{question}</p>
                </div>
                <div>
                  {answerOptions.map((option, idx) => (
                    <div key={idx}>
                      <input
                        type="checkbox"
                        id={option}
                        value={option}
                        onChange={(e) => multiSelectOnChange(e.target.value, questionId)}
                      />
                      <label htmlFor={option}>{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
    </form>
  );
};

const formStyle = {
  backgroundColor: "skyblue",
  margin: "0 auto",
  width: "50%",
  padding: "5rem",
};

export default Form;
