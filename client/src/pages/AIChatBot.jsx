import { useState } from "react";

import {
  FaRobot,
  FaPaperPlane
} from "react-icons/fa";

import "../styles/AIChatBot.css";

function AIChatBot() {

  const [message,setMessage] =
  useState("");

  const [chat,setChat] =
  useState([

    {

      sender:"bot",

      text:"Hello 👋 Welcome to BikeMarket AI Assistant"

    }

  ]);

  /* SEND MESSAGE */

  const sendMessage = ()=>{

    if(!message){

      return;

    }

    /* USER MESSAGE */

    const userMessage = {

      sender:"user",

      text:message

    };

    /* AI REPLY */

    let botReply = "";

    const lowerMsg =
    message.toLowerCase();

    if(

      lowerMsg.includes("price")

    ){

      botReply =
      "Bike price depends on year, KM driven, condition and fuel type.";

    }

    else if(

      lowerMsg.includes("best bike")

    ){

      botReply =
      "Yamaha R15, KTM Duke and RE Classic are trending bikes.";

    }

    else if(

      lowerMsg.includes("electric")

    ){

      botReply =
      "Electric bikes are growing fast and save fuel costs.";

    }

    else if(

      lowerMsg.includes("loan")

    ){

      botReply =
      "You can check EMI and bike loan options from partner banks.";

    }

    else{

      botReply =
      "Sorry 🤖 I am still learning. Please ask bike related questions.";

    }

    const botMessage = {

      sender:"bot",

      text:botReply

    };

    setChat([

      ...chat,

      userMessage,

      botMessage

    ]);

    setMessage("");

  };

  return (

    <div className="chatbot-page">

      <div className="chatbot-container">

        {/* HEADER */}

        <div className="chat-header">

          <FaRobot />

          <h2>

            BikeMarket AI

          </h2>

        </div>

        {/* CHAT BODY */}

        <div className="chat-body">

          {

            chat.map((msg,index)=>(

              <div
                key={index}
                className={

                  msg.sender === "user"

                  ?

                  "user-msg"

                  :

                  "bot-msg"

                }
              >

                {msg.text}

              </div>

            ))

          }

        </div>

        {/* INPUT */}

        <div className="chat-input">

          <input
            type="text"
            placeholder="Ask something..."
            value={message}
            onChange={(e)=>

              setMessage(
                e.target.value
              )

            }
          />

          <button
            onClick={sendMessage}
          >

            <FaPaperPlane />

          </button>

        </div>

      </div>

    </div>
  );
}

export default AIChatBot;