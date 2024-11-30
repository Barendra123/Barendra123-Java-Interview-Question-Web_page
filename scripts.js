document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Questions Array (Can be replaced with API fetch in future)
    const questions = [
        //Core Java Concepts
        { 
            question: "What are the key features of Java?", 
            answer: "Java is platform-independent, object-oriented, secure, robust, portable, multi-threaded, and supports dynamic memory allocation." 
        },
        { 
            question: "What is JVM?", 
            answer: "JVM (Java Virtual Machine) is an abstract machine that provides a runtime environment in which Java bytecode can be executed." 
        },
        { 
            question: "Explain OOPs concepts in Java ?", 
            answer: "OOPs concepts include Encapsulation, Inheritance, Polymorphism, and Abstraction." 

            
        },
        { 
            question: "Explain the difference between JDK, JRE, and JVM ?", 
            answer: "JDK (Java Development Kit) is used to develop Java applications. JRE (Java Runtime Environment) provides libraries and JVM for running Java applications. JVM (Java Virtual Machine) is responsible for executing Java bytecode."
            
        },
        { 
            question: "Why is Java platform-independent ?", 
            answer: "Java's platform independence comes from its bytecode, which can run on any machine that has a JVM"
            
        },

        { 
            question: "What is the significance of the main() method in Java ?", 
            answer: "The main() method serves as the entry point for Java applications. It must be public, static, and void."
            
        },
        //Object-Oriented Programming (OOP):

        { 
            question: "Explain the four pillars of OOP: encapsulation, inheritance, polymorphism, and abstraction ? ", 
            answer: " Encapsulation: Wrapping data and methods into a single unit (class). Inheritance: Acquiring properties and methods from a parent class. Polymorphism: Ability to take many forms, e.g., method overloading and overriding. Abstraction: Hiding implementation details and showing only the functionality."
            
        },

        { 
            question: "What is the difference between abstract class and interface?", 
            answer: "Abstract classes can have concrete methods and variables, while interfaces only had abstract methods (before Java 8). From Java 8, interfaces can have default and static methods."
            
        },

        { 
            question: "Can a class extend multiple classes in Java? Why or why not?", 
            answer: "No, a class cannot extend multiple classes in Java due to ambiguity in multiple inheritance. However, it can implement multiple interfaces."
            
        },

        { 
            question: "What is method overloading and method overriding? Give examples.", 
            answer: "Method overloading allows methods with the same name but different parameters. Method overriding allows a subclass to provide a specific implementation of a parent class method."
            
        },
        //Data Types and Control Structures:

        { 
            question: "Explain the difference between primitive and non-primitive data types ?", 
            answer: "Primitive types (e.g., int, char) store values directly. Non-primitive types (e.g., String, arrays) store references to objects."
            
        },

        { 
            question: "What is the difference between == and .equals() in Java?", 
            answer: "== checks reference equality for objects and value equality for primitives. .equals() checks logical equality, often overridden in custom classes."
        },

        
        { 
            question: "How does the switch statement work in Java?", 
            answer: "The switch statement evaluates an expression and executes the corresponding case block. It supports byte, short, char, int, enums, and String (Java 7+)."
        },

        //Memory Management:

        { 
            question: "What is garbage collection in Java?", 
            answer: "Garbage collection is the process of automatically deallocating memory by removing unused objects."
        },

        { 
            question: "How is memory allocated in Java (stack vs heap)?", 
            answer: "Stack is used for method execution and local variables. Heap is used for dynamic memory allocation for objects."
        },

        { 
            question: "What are final, finally, and finalize?", 
            answer: "final: Modifier to declare constants or prevent inheritance. finally: Block to execute code after a try block, regardless of exceptions. finalize: Method called by the garbage collector before object destruction."
        },

        //Advanced Java Concepts
        //Collections Framework:


        { 
            question: "What is the Java Collections Framework? Why is it used?", 
            answer: " A framework that provides data structures (e.g., List, Set) and algorithms (e.g., sorting, searching) for efficient data manipulation."
        },

        { 
            question: "What is the difference between ArrayList and LinkedList?", 
            answer: "ArrayList is better for frequent access, as it uses a dynamic array. LinkedList is better for frequent insertions/deletions, as it uses a doubly linked list."
        },
        {
            question: "Explain the difference between HashMap and Hashtable?",
            answer: "HashMap is unsynchronized and allows one null key. Hashtable is synchronized and does not allow null keys or values."
        },
        {
            question: "What is the difference between Set and List?",
            answer: "Set doesn't allow duplicates, whereas List allows duplicates and maintains insertion order."
        },
        //Multithreading and Concurrency:

        {
            question: "What is a thread in Java, and how is it implemented?",
            answer: "A thread is a lightweight sub-process for multitasking. It is implemented by extending the Thread class or implementing the Runnable interface."
        },
        {
            question: "Explain the difference between Runnable and Thread?",
            answer: "Runnable is an interface that defines the run() method. Thread is a class that implements Runnable and provides methods for thread management."
        },
        {
            question: "What is synchronization, and why is it important?",
            answer: "Synchronization is a mechanism to control access to shared resources in multithreaded applications to prevent data inconsistency."
        },
        {
            question: "What are wait(), notify(), and notifyAll()?",
            answer: "These methods are used in inter-thread communication. wait() makes a thread wait, notify() wakes one waiting thread, and notifyAll() wakes all waiting threads."
        },
        //Exception Handling:
        {
            question: "What is the difference between checked and unchecked exceptions?",
            answer: "Checked exceptions are checked at compile-time (e.g., IOException), while unchecked exceptions are checked at runtime (e.g., NullPointerException)."
        },
        {
            question: "How does the try-catch block work in Java?",
            answer: "The try block contains code that might throw exceptions. The catch block handles exceptions and prevents program termination."
        },
        {
            question: "Can you create custom exceptions in Java? How?",
            answer: "Yes, by extending the Exception class or its subclasses."
        },
        //Java 8 Features:

        {
            question: "What are lambda expressions?",
            answer: "A concise way to implement functional interfaces using a single-line or block of code, introduced in Java 8."
        },
        {
            question: "What is a functional interface?",
            answer: "An interface with exactly one abstract method, used in functional programming."
        },
        {
            question: "Explain the purpose of the Stream API?",
            answer: "Stream API processes collections of data using a functional approach for operations like filtering, mapping, and reducing."
        },
        //Data Structures and Algorithms
        {
            question: "How do you reverse a string in Java?",
            answer: "Use StringBuilder's reverse() method or loop through the string in reverse order."
        },
        {
            question: "Write a program to check if a number is prime?",
            answer: "Loop through numbers from 2 to sqrt(n). If the number has no divisors, it's prime."
        },
        {
            question: "Explain the difference between Array and ArrayList?",
            answer: "Arrays have fixed sizes, while ArrayList is dynamic and part of the Java Collections Framework."
        },
        {
            question: "How do you find duplicates in an array?",
            answer: "Use a HashSet to track seen elements and check for duplicates."
        },
        {
            question: "What are the different sorting algorithms, and how do they work?",
            answer: "Common algorithms include Bubble Sort, Merge Sort, Quick Sort, each with varying time complexities and use cases."
        },
        {
            question: "Explain the time complexity of searching and sorting algorithms?",
            answer: "Binary search has O(log n), Quick Sort has O(n log n) average time complexity."
        },

        //SQL and Databases
        {
            question: "What is a database? Explain the difference between SQL and NoSQL?",
            answer: "A database is an organized collection of data, generally stored and accessed electronically. SQL databases are relational, use structured query language for management, and have a fixed schema. NoSQL databases are non-relational, often flexible, and handle unstructured data."
        },
        {
            question: "Write an SQL query to fetch the second-highest salary from a table?",
            answer: "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);"
        },
        {
            question: "What is the difference between INNER JOIN, LEFT JOIN, and RIGHT JOIN?",
            answer: "INNER JOIN returns rows with matching values in both tables. LEFT JOIN returns all rows from the left table and matched rows from the right table, filling NULL for unmatched rows. RIGHT JOIN returns all rows from the right table and matched rows from the left table, filling NULL for unmatched rows."
        },
        {
            question: "What are primary keys and foreign keys?",
            answer: "A primary key is a unique identifier for each record in a table. A foreign key is a field in a table that links to the primary key of another table, ensuring referential integrity."
        },
        //Web Technologies (Optional)
            {
                question: "What is a servlet in Java?",
                answer: "A servlet is a Java program that runs on a web server, handling client requests and generating dynamic web content, typically in response to HTTP requests."
            },
            {
                question: "What is the purpose of the Spring Framework?",
                answer: "The Spring Framework is a comprehensive framework for building Java applications, providing infrastructure support for developing Java EE applications, such as dependency injection, aspect-oriented programming, and transaction management."
            },
            {
                question: "Explain the concept of MVC architecture.",
                answer: "MVC (Model-View-Controller) is a design pattern used in web applications to separate concerns: the Model represents the data, the View displays the data, and the Controller handles user input and updates the Model and View accordingly."
            },
            {
                question: "What is the difference between GET and POST methods in HTTP?",
                answer: "GET is used to retrieve data from the server and appends data to the URL, making it visible. POST is used to send data to the server, which is included in the body of the request, providing better security and allowing for larger amounts of data."
            },
            //Behavioral Questions
                {
                    question: "Why do you want to be a Java developer?",
                    answer: "I enjoy working with Java because it is versatile, widely used in enterprise applications, and has a strong community with ample learning resources. The object-oriented principles in Java, as well as its stability and scalability, make it a great choice for developing large-scale applications."
                },
                {
                    question: "What projects have you worked on during your education or training?",
                    answer: "During my education, I have worked on various projects, including a web application using Java Spring Boot and MySQL for database management, and a multithreaded console application to simulate a ticket booking system. These projects helped me deepen my understanding of Java and apply it in real-world scenarios."
                },
                {
                    question: "How do you approach problem-solving?",
                    answer: "I begin by thoroughly understanding the problem and breaking it down into smaller, manageable components. I then explore possible solutions, weigh their pros and cons, and choose the most efficient approach. I also test my solution to ensure it meets the requirements, and I iterate based on feedback or issues that arise."
                },
                {
                    question: "Are you open to learning new technologies?",
                    answer: "Yes, I am always eager to learn new technologies to expand my skill set. As technology evolves, I believe it is essential to stay updated and adopt new tools or frameworks that can improve efficiency and help solve problems more effectively."
                },
                {
                    question: "What does a Java developer do?",
                    answer: "A Java developer is responsible for designing, developing, and maintaining Java-based applications. This includes writing code, debugging, testing, and deploying software. Java developers also work with frameworks like Spring, Hibernate, and tools such as databases, version control, and integrated development environments (IDEs) to build efficient and scalable applications."
                }

    ];

    let currentQuestionIndex = 0;

    const questionTitle = document.getElementById("question-title");
    const answerElement = document.getElementById("answer");
    const prevQuestionButton = document.getElementById("prev-question");
    const nextQuestionButton = document.getElementById("next-question");

    // Load Question
    const loadQuestion = (index) => {
        questionTitle.textContent = questions[index].question;
        answerElement.textContent = questions[index].answer;

        // Toggle button visibility
        prevQuestionButton.hidden = index === 0;
        nextQuestionButton.hidden = index === questions.length - 1;

        // Animate content
        animateContent();
    };

    // Animate Content
    const animateContent = () => {
        questionTitle.classList.remove("fade-in");
        answerElement.classList.remove("fade-in");
        prevQuestionButton.classList.remove("fade-in");
        nextQuestionButton.classList.remove("fade-in");

        setTimeout(() => {
            questionTitle.classList.add("fade-in");
            answerElement.classList.add("fade-in");
            prevQuestionButton.classList.add("fade-in");
            nextQuestionButton.classList.add("fade-in");
        }, 50);
    };

    // Previous Question
    prevQuestionButton.addEventListener("click", () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        }
    });

    // Next Question
    nextQuestionButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        }
    });

    // Initialize with the first question
    loadQuestion(currentQuestionIndex);
});
