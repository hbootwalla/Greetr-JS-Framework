# GreetrJSFramework
A Simple JavaScript Framework for Formal and Informal Greetings

This framework demonstrates the ability of creating simple re-usable JavaScript Frameworks. It demonstrates my ability of using Immediately Invoked Function Expressions and Function Closures to allow the development of self-contained JavaScript frameworks.

The framework enables the creation of a Greetr object via the G$() syntax. This is syntactic sugar which allows for shorter syntax rather than calling the function constructor itself. 
Once the object is created, the framework allows for setting the language, logging the output, get the greeting string, and setting the greeting string in an HTML component by passing the CSS selector string. 
These functions all return the object itself to allow for chaining the function calls. These functions are added to the Greetr prototype rather than in the object specification itself so as to not have multiple function code copies in each object. 

This framework extends the innerHTML functionality of the jQuery framework. It uses a reference to the jQuery object and accepts a selector parameter from the user to set the innerHTML property of the HTML component to the greeting string.

# Immediately Invoked Function Expressions

An immediately invoked function expression allows for the definition and execution of an anonymous function at the place of definition itself. An IIFE maintains containment by seperating its executing environment from the global environment. 
This makes sure that no naming conflicts occur. Furthermore, closures allow that objects created within the IIFE continue to exist even after the execution of the IIFE itself.

# Closures

Closures allow the maintainance of scope environments even after the execution of a function. This allows the user to access the framework's entities even after the framework source has been parsed and executed. 
