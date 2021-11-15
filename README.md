# Invoice App

---

!["Website Screenshot"](/Website.jpg "Project Image")

---

## Table of Contents

- [Introduction](#introduction)
- [Used Technologies](#used-technologies)
- [Details of The Project](#details-of-the-project)
  - [Features](#features-of-this-web-application)
  - [What I Learned](#what-i-learned-from-this-project)
  - [Bugs](#known-bugs)
- [Conclusion](#conclusion)

---

### Introduction

Hello everyone, initially, thank you for your interest. This was the largest project I have ever done so far. I learned a lot, and I am looking forward to telling you everything I have done in this project.

### Used Technologies

- **[React.js](https://reactjs.org/)**- Powerful JavaScript library for building user interfaces

- **[Redux](https://redux.js.org/)** - JavaScript library for managing and centralizing application state. It is most commonly used with React or Angular libraries to build user interfaces.
  - **_[Redux Persist](https://www.npmjs.com/package/redux-persist)_** - Library that allows saving a Redux store in the local storage of an application.
  - **_[Reselect](https://www.npmjs.com/package/reselect)_** - Library for creating memoized "selector" functions. Commonly used with Redux.
  - **_[React Datepicker](https://reactdatepicker.com/)_** - Useful Datepicker for React
- **[Styled Components](https://styled-components.com/)** - Library that allows writing CSS in Javascript
- **[Formik](https://formik.org/)** - Formik is the world's most popular open-source form library for React.
  - **[Yup](https://www.npmjs.com/package/yup?activeTab=readme)** - Very Simple Form Validation Library
- **[Framer Motion](https://www.framer.com/motion/)** - Production-Ready Animation Library for React
- **[React Focus Lock](https://www.npmjs.com/package/react-focus-lock)** - Library for focus lock (trap) for React
- **[React Router](https://reactrouter.com/)** - Declarative routing for React apps
- **[Immutability Helper](https://www.npmjs.com/package/immutability-helper)** - Library for mutating a copy of data without changing the source

### Details of The Project

As you can see, many technologies were used to design and code this project. It is crucial to mention that this website is entirely **accessible**, meaning that you can navigate through this website using the keyboard. It is also **screen-reader friendly**. I tried to use smooth and fast animations for transitions, modals for a better user experience.

#### Features of this web application

- Creating an invoice
  - Invoices can be created either as drafts or as pending. Clicking "Save as Draft" allows the user to create a draft invoice.
- Editing an invoice
- Marking invoice as paid. This should change the invoice's status to "paid."
- Deleting an invoice.

#### What I Learned From This Project

I learned to design and code such a big application. I improved my Redux skills; moreover, I learned how to **persist** redux state, meaning redux js state is fully synced with **local storage**. I learned how to update the redux state without changing initial data, where the **Immutability Helper** library helped me a lot. Also, I learned how to create **memoized selectors** in redux for better performance. **Reselect** library helped me a lot. I also improved my skills in web animations, which I implemented using **Framer Motion** library.

#### Known Bugs

1. In the mobile version of the website, when the user clicks to navigate to the details of an invoice, the dashboard with buttons appears later than other components, and it has a "clunky" animation. **This is mostly framer motion's library bug as it fails to animate position fixed property** properly
2. Jumpy animation sometimes occurs in invoice cards when the filter is changed from one to another.

### Conclusion

Overall, it was a great project to design/code. I learned a lot and will be glad if my source code will help you in any way. If you have any questions, please feel free to contact me via email **aliyevnihats@outlook.com**.

**_Happy Coding_!**

---

---
