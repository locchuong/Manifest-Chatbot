# Manifest Chatbot

This project was created as part of the interview process for Manifest. In this project, you will find a fully-automated chat bot that asks the user to respond to predefined questions and answers. Although the application is meant for mobile view, it is fully responsive on desktop as well and maintains the same layout.

## Getting Started Online

A demo of the application is posted on [AWS](https://manifest-project.s3-us-west-1.amazonaws.com/index.html) in the event that you do not want to install the project on your Local Machine.

## Getting Started on your Local Machine

In the project directory, you can run:

### `npm install`

Installs the necessary dependencies for the project

Then, in the project directory again run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Several Features

In case you missed some of the more nuanced features of the code, here are several features I found critical to how the application looks and feels

#### **Chat Message Bubbling**
> As the chat bot (or user) types multiple messages, the chat bubbles will group together on the left-hand side as more and more messages appear to always appear connected to each other. If one message is sent, the message will appear as a rounded pill. If two message are sent, the two messages will combine where they are adjacent to form a pill-like shape. If three or more messages are sent, the first and last messages will have rounded corners while the messages in the middle appear flat on the side. This feature can be seen in the Lemonade App (which was use for inspiration of this project). There are other css animations going on as well, but I believe this one really gives the application the feel of a mobile chat app.

#### **Global Theme Management**
> Styles can be a hassle to change, especially of there are multiple themes you are going for. To resolve this issue, a Themes.js file (in constants folder) was made in order to keep all stylistic choices in one place. By changing a parameter of a theme object, the change will persist throughout the entire application. This removes the need of changing, say, the primary color of your application everywhere it is used.

#### **Fully Responsive**
> Although this application is meant to be used as a mobile app, it is fully responsive throughout. Having said that, the application looks the best on mobile and should be used on a mobile device.

#### **Atomic Design Methodology**
> This application was built with the mindset that components will be reused in other places of the application. As such, each component is divided into their own respective files to enstill encapsulation. Having said that, learning styled-components on the fly really elevated this methodology of reusability.

## Dependencies/Languages

### `Javascript` `HTML5` `CSS3` `React` `Styled-Components` `React-Date-Picker`
