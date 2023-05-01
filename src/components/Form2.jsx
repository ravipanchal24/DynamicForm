import React, { useState } from "react";
const Form2 = () => {
  const questions = [
    {
      question: "How would you rate the overall trip?",
      questionType: "rating",
      questionId: "rating01",
      answerOptions: null,
    },
    {
      question: "How would you rate the driver attitude?",
      questionType: "rating",
      questionId: "rating02",
      answerOptions: null,
    },
    {
      question: "How would you rate the ride hygiene and cleanliness?",
      questionType: "rating",
      questionId: "rating03",
      answerOptions: null,
    },
    {
      question: "Do you have any suggestions for us?",
      questionType: "text",
      questionId: "text01",
      answerOptions: null,
    },
    {
      question: "Please select the extra expenses during the trip?",
      questionType: "multiSelect",
      questionId: "multi01",
      answerOptions: ["Toll", "Food", "Drinks"],
    },
    {
      question: "Did you enjoy your trip with us?",
      questionType: "singleSelect",
      questionId: "single01",
      answerOptions: ["Yes", "No", "Maybe"],
    },
  ];

  const [textFeedbackAnswer, setTextFeedbackAnswer] = useState("");
  const [ratingFeedbackAnswer, setRatingFeedbackAnswer] = useState("");
  const [singleSelectFeedbackAnswer, setSingleSelectFeedbackAnswer] =
    useState("");
  const [multiSelectFeedbackAnswer, setMultiSelectFeedbackAnswer] = useState(
    []
  );

  const textOnChange = (input) => {
    setTextFeedbackAnswer(input);
  };

  const ratingOnChange = (input) => {
    setRatingFeedbackAnswer(input);
  };

  const singleSelectOnChange = (input) => {
    setSingleSelectFeedbackAnswer(input);
  };

  const multiSelectOnChange = (input) => {
    setMultiSelectFeedbackAnswer([...multiSelectFeedbackAnswer, input]);
  };

  const TextField = ({ question, questionId, answerOptions }) => {
    return (
      <div>
        <div>
          <h2>Question:</h2>
          <p>{question}</p>
        </div>
        <div>
          <textarea
            value={textFeedbackAnswer}
            onChange={(e) => textOnChange(e.target.value)}
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
  };

  const RatingField = ({ question, questionId, answerOptions }) => {
    return (
      <div>
        <div>
          <h2>Question:</h2>
          <p>{question}</p>
        </div>
        <div>
          {[1, 2, 3, 4, 5].map((num, idx) =>
            num < 4 ? (
              <i
                className="fa-solid fa-star fa-xl"
                style={{ color: "yellow", marginRight: "10px" }}
                key={idx}
              />
            ) : (
              <i
                className="fa-regular fa-star fa-xl"
                style={{ color: "grey", marginRight: "10px" }}
                key={idx}
              />
            )
          )}
        </div>
      </div>
    );
  };

  const SingleSelectField = ({ question, questionId, answerOptions }) => {
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
                onChange={(e) => singleSelectOnChange(e.target.value)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const MultiSelectField = ({ question, questionId, answerOptions }) => {
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
                onChange={(e) => multiSelectOnChange(e.target.value)}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // const FormField = ({ ques }) => {
  //   const { question, questionId, questionType, answerOptions } = ques;
  //   switch (questionType) {
  //     case "rating":
  //       return (
  //         <RatingField
  //           question={question}
  //           questionId={questionId}
  //           answerOptions={answerOptions}
  //         />
  //       );

  //     case "text":
  //       return (
  //         <TextField
  //           question={question}
  //           questionId={questionId}
  //           answerOptions={answerOptions}
  //         />
  //       );

  //     case "singleSelect":
  //       return (
  //         <SingleSelectField
  //           question={question}
  //           questionId={questionId}
  //           answerOptions={answerOptions}
  //         />
  //       );

  //     case "multiSelect":
  //       return (
  //         <MultiSelectField
  //           question={question}
  //           questionId={questionId}
  //           answerOptions={answerOptions}
  //         />
  //       );

  //     default:
  //       return null;
  //   }
  // };

  return (
    // <form style={formStyle}>
    //   <h1 style={{ textAlign: "center" }}>Feedback Form</h1>
    //   {questions.map((ques, idx) => (
    //     <FormField ques={ques} key={idx} />

    //   ))}
    // </form>
    <form style={formStyle}>
      <h1 style={{ textAlign: "center" }}>Feedback Form2</h1>
      {questions.map((ques, idx) => {
        const { question, questionId, questionType, answerOptions } = ques;
        switch (questionType) {
          // case "rating":
          //   return (
          //     <div>
          //       <div>
          //         <h2>Question:</h2>
          //         <p>{question}</p>
          //       </div>
          //       <div>
          //         {[1, 2, 3, 4, 5].map((num, idx) =>
          //           num < 4 ? (
          //             <i
          //               className="fa-solid fa-star fa-xl"
          //               style={{ color: "yellow", marginRight: "10px" }}
          //               key={idx}
          //             />
          //           ) : (
          //             <i
          //               className="fa-regular fa-star fa-xl"
          //               style={{ color: "grey", marginRight: "10px" }}
          //               key={idx}
          //             />
          //           )
          //         )}
          //       </div>
          //     </div>
          //   );

          // case "text":
          //   return (
          //     <TextField
          //       question={question}
          //       questionId={questionId}
          //       answerOptions={answerOptions}
          //     />
          //   );

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
                      onChange={(e) => singleSelectOnChange(e.target.value)}
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>
                ))}
              </div>
            </div>
            );

          // case "multiSelect":
          //   return (
          //     <MultiSelectField
          //       question={question}
          //       questionId={questionId}
          //       answerOptions={answerOptions}
          //     />
          //   );

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

export default Form2;
